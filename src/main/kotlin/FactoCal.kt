import json.factorioDBofJson
import json.toJson
import objects.Assembler
import objects.Product
import objects.Recipe

class FactoCal {

    private var db: FactorioDB = FactorioDB(listOf(), listOf(), listOf())
    private val recipesCache: MutableMap<Product, List<Recipe>> = mutableMapOf()

    fun loadDB(json: String) {
        db = factorioDBofJson(json)
    }

    fun saveDB() = db.toJson()

    fun addProduct(name: String) =
            if (name.isNotEmpty() && getProduct(name) == null) {
                db.products += Product(name)
                true
            } else false

    fun addAssembler(name: String, speed: Float) =
            if (name.isNotEmpty() && getAssembler(name) == null) {
                db.assembler += Assembler(name, speed)
                true
            } else false

    fun addRecipe(name: String, input: Map<Product, Int>, output: Map<Product, Int>, assembler: Set<Assembler>, time: Float) =
            if (name.isNotEmpty() && getRecipe(name) == null) {
                db.recipes += Recipe(name, input, output, assembler, time)
                true
            } else false

    fun getRecipesByProduct(output: Product): List<Recipe> = recipesCache.getOrPut(output) {
        db.recipes.filter { it.output.containsKey(output) }
    }

    fun getRecipesByProduct(output: String): List<Recipe> = recipesCache.getOrPut(getProduct(output)!!) {
        db.recipes.filter { it.output.containsKey(getProduct(output)!!) }
    }

    fun getProduct(string: String): Product? = db.products.filter { it.name == string }.takeIf { it.size == 1 }?.get(0)
    fun getAllProducts(): List<Product> = db.products
    fun getAssembler(string: String): Assembler? = db.assembler.filter { it.name == string }.takeIf { it.size == 1 }?.get(0)
    fun getAllAssembler(): List<Assembler> = db.assembler
    fun getRecipe(recipe: String): Recipe? = db.recipes.filter { it.name == recipe }.takeIf { it.size == 1 }?.get(0)

}
