import Express from 'express'
import bodyParser from 'body-parser'

import recipesRoutes from './routes/recipes.js'

const app = Express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/recipes', recipesRoutes)

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`))