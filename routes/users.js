import express from 'express'
import {createUser, deleteUser, getUserById, getUsers, updateUser} from "../controllers/users.js";

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *      type: object
 *      required:
 *          - firstName
 *          - lastName
 *          - age
 *      properties:
 *          id:
 *              type: string
 *              description: The auto generated id of the user
 *          firstName:
 *              type: string
 *              description: The first name of the user
 *          lastName:
 *              type: string
 *              description: The last name of the user
 *          age:
 *              type: number
 *              description: The age of the user
 *          activated:
 *              type: boolean
 *              description: The activation state of the user
 *      example:
 *          id: 733b1011-b7f2-45bc-a30b-c7206e136b8b
 *          firstName: Albert
 *          lastName: Einstein
 *          age: 4
 *          activated: false
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/User'
 *
 */
router.get('/', getUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id.
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *     responses:
 *       200:
 *         description: The user
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       404:
 *          description: The user was not found
 *
 */
router.get('/:id', getUserById)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user.
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was created!
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       500:
 *          description: Internal server error
 *
 */
router.post('/', createUser)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update the user by id.
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       404:
 *          description: The user was not found
 *
 */
router.put('/:id', updateUser)

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete the user by id.
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *          description: The user was not found
 *
 */
router.delete('/:id', deleteUser)

export default router