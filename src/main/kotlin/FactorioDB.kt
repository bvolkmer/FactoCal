import objects.Assembler
import objects.Product
import objects.Recipe

data class FactorioDB(
        var products: List<Product>,
        var assembler: List<Assembler>,
        var recipes: List<Recipe>)


