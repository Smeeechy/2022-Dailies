import Express from 'express'

import { getRecipes, getRecipeDetails, addRecipe, updateRecipe } from '../controllers/recipes.js'

const router = Express.Router()

router.get('/', getRecipes)
router.get('/details/:recipeName', getRecipeDetails)
router.post('/', addRecipe)
router.put('/', updateRecipe)

export default router