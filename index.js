import express from 'express'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc'
import {swaggerOptions} from "./swagger-options.js";
import swaggerUI from 'swagger-ui-express'
import usersRoutes from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 5000

const specs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors())
app.use(express.json())

app.use('/users', usersRoutes)

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))