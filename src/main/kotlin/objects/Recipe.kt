package objects

data class Recipe(val name: String, val input: Map<Product, Int>, val output: Map<Product, Int>, val assembler: Set<Assembler>, val time: Float) {

}

