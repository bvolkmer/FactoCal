package json

import FactorioDB
import objects.Assembler
import objects.Product
import objects.Recipe

private fun recipeOfJson(json: String, products: List<Product>, assemblerLib: List<Assembler>): Recipe {
    val jsonMap = mapOfJson(json)
    val name = jsonMap["name"]!!
    val time = jsonMap["time"]!!.toFloat()
    val inputs = mapOfJson(jsonMap["inputs"]!!)
            .map {(name, amountStr) ->
                val product = products.filter { it.name == name }.getOrNull(0)
                val amount = amountStr.toIntOrNull()
                if (product != null && amount != null)
                    product to amount
                else null
            }.requireNoNulls().toMap()
    val outputs = mapOfJson(jsonMap["outputs"]!!)
            .map {(name, amountStr) ->
                val product = products.filter { it.name == name }.getOrNull(0)
                val amount = amountStr.toIntOrNull()
                if (product != null && amount != null)
                    product to amount
                else null
            }.requireNoNulls().toMap()
    val assembler = listOfJson(jsonMap["assembler"]!!)
            .map {assemblerName ->
                assemblerLib.filter { it.name == assemblerName }.getOrNull(0)
            }.requireNoNulls().toSet()
    return Recipe(name, inputs, outputs, assembler, time)
}

fun factorioDBofJson(json: String): FactorioDB {
    val jsonMap = mapOfJson(json)
    val products = listOfJson(jsonMap["products"]!!).map {
        JSON.parse<Product>(it)
    }.requireNoNulls()
    val assembler = listOfJson(jsonMap["assembler"]!!).map {
        JSON.parse<Assembler>(it)
    }.requireNoNulls()
    val recipes = listOfJson(jsonMap["recipes"]!!).map {
        recipeOfJson(it, products, assembler)
    }.requireNoNulls()
    return FactorioDB(products, assembler, recipes)
}

fun Recipe.toJson() = mapOf(
        "name" to name,
        "time" to time.toString(),
        "inputs" to input.map { it.key.name to it.value.toString() }.toJson(),
        "outputs" to output.map { it.key.name to it.value.toString() }.toJson(),
        "assembler" to assembler.map { it.name }.toJson()
).toJson()

fun FactorioDB.toJson() = mapOf(
        "products" to products.map { JSON.stringify(it) }.toJson(),
        "assembler" to assembler.map { JSON.stringify(it) }.toJson(),
        "recipes" to recipes.map { it.toJson() }.toJson()
).toJson()

fun Map<String, String>.toJson(): String = this.map { "${it.key}:${it.value}" }.joinToString(separator = ",", prefix = "{", postfix = "}")
fun List<Pair<String, String>>.toJson(): String = this.map { "${it.first}:${it.second}" }.joinToString(separator = ",", prefix = "{", postfix = "}")

fun List<String>.toJson(): String = this.joinToString(separator = ",", prefix = "[", postfix = "]")

fun mapOfJson(json: String): Map<String, String> {
    val map = mutableMapOf<String, String>()
    var buffer = StringBuilder()
    var braceCounter = 0
    var qms = false /* qm = quotation mark */
    var inKey = true
    var currentKey = ""
    json.trim().removeSurrounding("{", "}").trim().forEach { char ->
        if (inKey) {
            if (char == '"') {
                qms = !qms
            } else if (qms || char != ':') buffer.append(char)
            else /*if(!hyphens && char == ':')*/ {
                inKey = false
                currentKey = buffer.toString()
                buffer = StringBuilder()
            }
        } else {
            if (char == '"') {
                qms = !qms
                buffer.append(char)
            } else if (qms) {
                buffer.append(char)
            } else if (char == '{' || char == '(' || char == '[') {
                braceCounter++
                buffer.append(char)
            } else if (char == '}' || char == ')' || char == ']') {
                braceCounter--
                buffer.append(char)
            } else if (braceCounter > 0 || char != ',') buffer.append(char)
            else /* if(!qms && braceCounter == 0 && char == ',')*/ {
                inKey = true
                map[currentKey] = buffer.toString()
                buffer = StringBuilder()
            }
        }
    }
    if (currentKey.isNotEmpty() && buffer.isNotEmpty()) {
        inKey = true
        map[currentKey] = buffer.toString()
        buffer = StringBuilder()
    }
    return map
}


fun listOfJson(json: String): List<String> {
    val list = mutableListOf<String>()
    var buffer = StringBuilder()
    var braceCounter = 0
    var qms = false /* qm = quoation mark*/
    json.trim().removeSurrounding("[", "]").trim().forEach { char ->
        if (char == '"') {
            qms = !qms
            buffer.append(char)
        } else if (qms) {
            buffer.append(char)
        } else if (char == '{' || char == '(' || char == '[') {
            braceCounter++
            buffer.append(char)
        } else if (char == '}' || char == ')' || char == ']') {
            braceCounter--
            buffer.append(char)
        } else if (braceCounter > 0 || char != ',') buffer.append(char)
        else /* if(!qms && braceCounter == 0 && char == ',')*/ {
            list += buffer.toString().removeSurrounding("\"")
            buffer = StringBuilder()
        }
    }
    if (buffer.isNotEmpty())
        list += buffer.toString()
    return list
}
