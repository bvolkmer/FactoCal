import objects.*

data class ProcessingStep(val output: Product, val rate: Float, private val factoCal: FactoCal) {
    val recipes = factoCal.getRecipesByProduct(output)
    val uuid = uuid()
    val children = mutableMapOf<Product, ProcessingStep>()
    var currentRecipe = recipes.first()
    var currentAssembler = currentRecipe.assembler.first()
    val numberOfAssemblerNeeded
        get() = rate / ((currentRecipe.output[output]!! / currentRecipe.time) * currentAssembler.speed)
    val inputNeeded: Map<Product, Pair<Float, ProcessingStep?>>
        get() = currentRecipe.input.mapValues { (product, amount) ->
            amount * numberOfAssemblerNeeded * currentAssembler.speed to children[product]
        }.toMap()
    val outputProduced: Map<Product, Float>
        get() = currentRecipe.output.mapValues { (_, amount) ->
            amount * numberOfAssemblerNeeded * currentAssembler.speed
        }

    fun createMissingInputStep(product: Product): ProcessingStep? {
        val pair = inputNeeded[product]
        return if (pair !=null && pair.second == null) {
            ProcessingStep(product, pair.first, factoCal).also { children += product to this }
        } else null
    }
}