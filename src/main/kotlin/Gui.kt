import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.onClickFunction
import objects.Assembler
import org.w3c.dom.*
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import kotlin.browser.document
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set

@Suppress("unused")
class Gui(private val factoCal: FactoCal) {

    private val firstProductSelector = document.getElementById("firstProductSelector")!! as HTMLSelectElement
    private val firstProductButton = document.getElementById("firstProductBtn")!! as HTMLButtonElement
    private val firstProductRate = document.getElementById("firstProductRate")!! as HTMLInputElement
    private val headStep = document.getElementById("headStep")!! as HTMLDivElement
    private val configOutput = document.getElementById("configOutput")!! as HTMLTextAreaElement
    private val configDownload = document.getElementById("configDownload")!! as HTMLAnchorElement
    private val addRecipeAssemblerSelect = document.getElementById("addRecipeAssemblerSelect")!! as HTMLSelectElement
    private lateinit var headProcessingStep: ProcessingStep
    private var stepMap: MutableMap<String, ProcessingStep> = stringMapOf()

    private val addRecipeInputIds = mutableListOf<String>()
    private val addRecipeOutputIds = mutableListOf<String>()
    private val addRecipeAssemblerIds = mutableMapOf<String, Assembler>()

    fun initialize() {
        firstProductButton.addEventListener("click", {
            val firstProduct = factoCal.getProduct(firstProductSelector.value)!!
            val rate = firstProductRate.value.toFloat()
            headProcessingStep = ProcessingStep(firstProduct, rate, factoCal)
            stepMap[headProcessingStep.uuid] = headProcessingStep
            addProcessingStep(headProcessingStep, headStep)
        })
        update()
    }

    @Suppress("MemberVisibilityCanBePrivate")
    @JsName("update")
    fun update() {
        firstProductSelector.removeAllChildren()
        firstProductSelector.append {
            factoCal.getAllProducts().forEach {
                option {
                    +it.name
                    value = it.name
                }
            }
        }
        configOutput.value = factoCal.saveDB()
        configOutput.fit()
        configDownload.download = "factocal.conf"
        val blob = Blob(arrayOf(factoCal.saveDB()), BlobPropertyBag("text/plain"))
        configDownload.href = URL.createObjectURL(blob)

        addRecipeAssemblerSelect.removeAllChildren()
        addRecipeAssemblerSelect.append {
            factoCal.getAllAssembler().forEach {
                option {
                    +it.name
                    value = it.name
                }
            }
        }
    }

    @JsName("loadConfig")
    fun loadConfig(json: String) {
        factoCal.loadDB(json)
        update()
    }

    private fun updateAssemblerDiv(processingStep: ProcessingStep) {
        val uuid = processingStep.uuid
        val recipeSelect = document.getElementById("$uuid-recipe-select")!! as HTMLSelectElement
        val assemblerSelect = document.getElementById("$uuid-assembler-select")!! as HTMLSelectElement
        val outputTable = document.getElementById("$uuid-output-table")!! as HTMLTableElement
        val inputTable = document.getElementById("$uuid-input-table")!! as HTMLTableElement
        val assemblerCountP = document.getElementById("$uuid-assembler-count-p")!! as HTMLSpanElement
        val childDiv = document.getElementById("$uuid-child-div")!! as HTMLDivElement

        recipeSelect.removeAllChildren()
        recipeSelect.append {
            processingStep.recipes.forEach {
                option {
                    +it.name
                    value = it.name
                }
            }
        }
        recipeSelect.value = processingStep.currentRecipe.name

        assemblerSelect.removeAllChildren()
        assemblerSelect.append {
            processingStep.currentRecipe.assembler.forEach {
                option {
                    +it.name
                    value = it.name
                }
            }
        }
        assemblerSelect.value = processingStep.currentAssembler.name

        outputTable.removeAllChildren()
        outputTable.append {
            processingStep.outputProduced.forEach { (product, amount) ->
                tr {
                    td { +product.name }
                    td { +amount.toString() }
                }
            }
        }
        inputTable.removeAllChildren()
        inputTable.append {
            processingStep.inputNeeded.forEach { (product, pair) ->
                tr {
                    td { +product.name }
                    td { +pair.first.toString() }
                    td {
                        if (pair.second == null) {
                            button {
                                +"Add step"
                                onClickFunction = {
                                    addProcessingStep(processingStep.createMissingInputStep(product)!!, childDiv)
                                    updateAssemblerDiv(processingStep)
                                }
                            }
                        }
                    }
                }
            }
        }

        assemblerCountP.textContent = processingStep.numberOfAssemblerNeeded.toString()
    }

    private fun addProcessingStep(step: ProcessingStep, parent: HTMLDivElement) {
        val uuid = step.uuid
        stepMap[uuid] = step
        parent.append {
            div {
                id = "$uuid-div"
                classes += "step"
                p {
                    label {
                        +"Output: "
                        table { id = "$uuid-output-table" }
                    }
                }
                p {
                    label {
                        +"Recipe: "
                        select { id = "$uuid-recipe-select" }
                    }
                }
                p {
                    label {
                        +"Assembler: "
                        select { id = "$uuid-assembler-select" }
                        +" x "
                        span { id = "$uuid-assembler-count-p" }
                    }
                }
                p {
                    label {
                        +"Input:"
                        table { id = "$uuid-input-table" }

                    }
                }
                div {
                    id = "$uuid-child-div"
                    classes += "child-container"
                }
            }
        }
        (document.getElementById("$uuid-recipe-select") as HTMLSelectElement).apply {
            addEventListener("change", {
                step.currentRecipe = factoCal.getRecipe(this.value)!!
                updateAssemblerDiv(step)
            })
        }
        (document.getElementById("$uuid-assembler-select") as HTMLSelectElement).apply {
            addEventListener("change", {
                step.currentAssembler = factoCal.getAssembler(this.value)!!
                updateAssemblerDiv(step)
            })
        }
        updateAssemblerDiv(step)
    }

    @JsName("addProduct")
    fun addProduct() {
        val nameInput = document.getElementById("addProductName")!! as HTMLInputElement
        val errorP = document.getElementById("addProductError")!! as HTMLParagraphElement
        if (!factoCal.addProduct(nameInput.value)) errorP.textContent = "Error: Name already exists"
        else errorP.textContent = ""
        update()
    }

    @JsName("addAssembler")
    fun addAssembler() {
        val nameInput = document.getElementById("addAssemblerName")!! as HTMLInputElement
        val speedInput = document.getElementById("addAssemblerSpeed")!! as HTMLInputElement
        val errorP = document.getElementById("addAssemblerError")!! as HTMLParagraphElement
        val speed = speedInput.value.toFloatOrNull()
        if (speed == null) {
            errorP.textContent = "Error: Speed not a number"
            return
        }
        if (!factoCal.addAssembler(nameInput.value, speed)) errorP.textContent = "Error: Name already exists"
        else errorP.textContent = ""
        update()
    }

    @JsName("addRecipe")
    fun addRecipe() {
        val nameInput = document.getElementById("addRecipeName")!! as HTMLInputElement
        val timeInput = document.getElementById("addRecipeTime")!! as HTMLInputElement
        val errorP = document.getElementById("addRecipeError")!! as HTMLParagraphElement
        val time = timeInput.value.toFloatOrNull()
        if (time == null) {
            errorP.textContent = "Error: Time not a number"
            return
        }
        val inputs = addRecipeInputIds.map {
            val productSelect = document.getElementById("$it-product")!! as HTMLSelectElement
            val amountInput = document.getElementById("$it-amount")!! as HTMLInputElement
            val amount = amountInput.value.toIntOrNull()
            if (amount == null) {
                errorP.textContent = "Error: Input product ${productSelect.value} amount is not a number"
                return
            }
            factoCal.getProduct(productSelect.value)!! to amount
        }.requireNoNulls().toMap()
        val outputs = addRecipeOutputIds.map {
            val productSelect = document.getElementById("$it-product")!! as HTMLSelectElement
            val amountInput = document.getElementById("$it-amount")!! as HTMLInputElement
            val amount = amountInput.value.toIntOrNull()
            if (amount == null) {
                errorP.textContent = "Error: Output product ${productSelect.value} amount is not a number"
                return
            }
            factoCal.getProduct(productSelect.value)!! to amount
        }.requireNoNulls().toMap()
        if (!factoCal.addRecipe(nameInput.value, inputs, outputs, addRecipeAssemblerIds.values.toSet(), time))
            errorP.textContent = "Error: Name already exists"
        else errorP.textContent = ""
        update()
    }

    @JsName("addRecipeElement")
    fun addRecipeElement(type: String) {
        val uuid = uuid()
        when (type) {
            "input" -> addRecipeInputIds += uuid
            "output" -> addRecipeOutputIds += uuid
            "assembler" -> addRecipeAssemblerIds[uuid] = factoCal.getAssembler(addRecipeAssemblerSelect.value)!!
        }
        val table = when (type) {
            "input" -> document.getElementById("addRecipeInput")!! as HTMLTableElement
            "output" -> document.getElementById("addRecipeOutput")!! as HTMLTableElement
            "assembler" -> document.getElementById("addRecipeAssembler")!! as HTMLTableElement
            else -> return
        }
        table.append {
            tr {
                id = "$uuid-row"
                td {
                    when (type) {
                        "input", "output" -> select {
                            id = "$uuid-product"
                            factoCal.getAllProducts().forEach {
                                option {
                                    +it.name
                                    value = it.name
                                }
                            }
                        }
                        "assembler" -> {
                            p {
                                +addRecipeAssemblerSelect.value
                                id = "$uuid-assembler"
                            }
                        }
                    }
                }
                if (type == "input" || type == "output") td {
                    label {
                        input {
                            id = "$uuid-amount"
                        }
                    }
                }
                td {
                    button {
                        +"Remove"
                        onClickFunction = {
                            when (type) {
                                "input" -> addRecipeInputIds -= uuid
                                "output" -> addRecipeOutputIds -= uuid
                                "assembler" -> addRecipeAssemblerIds.remove(uuid)
                            }
                            document.getElementById("$uuid-row")!!.remove()
                        }
                    }
                }
            }
        }
    }
}
