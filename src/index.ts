import express from 'express'
import cors from 'cors'
import productRoutes from './routes/product'
import userRoutes from './routes/user'
import orderRoutes from './routes/order'
import bodyParser from 'body-parser'

const app: express.Application = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

productRoutes(app)
userRoutes(app)
orderRoutes(app)

// start the Express server
app.listen(port, function () {
    const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
    console.log(`App listen on ${url}`);
})

export default app
