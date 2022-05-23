const recipes = [
    {
        "name": "scrambledEggs",
        "ingredients": [
            "1 tsp oil",
            "2 eggs",
            "salt"
        ],
        "instructions": [
            "Beat eggs with salt",
            "Heat oil in pan",
            "Add eggs to pan when hot",
            "Gather eggs into curds, remove when cooked",
            "Salt to taste and enjoy"
        ]
    },
    {
        "name": "garlicPasta",
        "ingredients": [
            "500mL water",
            "100g spaghetti",
            "25mL olive oil",
            "4 cloves garlic",
            "Salt"
        ],
        "instructions": [
            "Heat garlic in olive oil",
            "Boil water in pot",
            "Add pasta to boiling water",
            "Remove pasta from water and mix with garlic olive oil",
            "Salt to taste and enjoy"
        ]
    },
    {
        "name": "chai",
        "ingredients": [
            "400mL water",
            "100mL milk",
            "5g chai masala",
            "2 tea bags or 20 g loose tea leaves"
        ],
        "instructions": [
            "Heat water until 80 C",
            "Add milk, heat until 80 C",
            "Add tea leaves/tea bags, chai masala; mix and steep for 3-4 minutes",
            "Remove mixture from heat; strain and enjoy"
        ]
    }
]

export const getRecipes = (req, res) => {
    res.send({ recipeNames: recipes.map(recipe => recipe.name) })
}

export const getRecipeDetails = (req, res) => {
    const recipe = recipes.find(recipe => recipe.name === req.params.recipeName)
    if (recipe) {
        const details = { ingredients: recipe.ingredients, numSteps: recipe.instructions.length }
        res.send({ details })
    } else res.send({})
}

export const addRecipe = (req, res) => {
    const recipe = recipes.find(recipe => recipe.name === req.body.name)
    if (recipe) res.status(400).send({ error: "recipe already exists" })
    else {
        recipes.push({ ...req.body })
        res.status(201).send()
    }
}

export const updateRecipe = (req, res) => {
    const recipe = recipes.find(recipe => recipe.name === req.body.name)
    if (recipe) {
        recipe.ingredients = req.body.ingredients
        recipe.instructions = req.body.instructions
        res.status(204).send()
    } else res.status(404).send({ error: "recipe does not exist" })
}