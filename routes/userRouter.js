import express from "express"
import userRegistration from "../controllers/register.js";
import userLogin from "../controllers/login.js";
import userSignOut from "../controllers/logout.js";
import authenticateUser from "../middlewars/authUser.js";
import userDetails from "../controllers/userDetails.js";
import isAdmin from "../middlewars/isAdmin.js";
import getAllRegisteredClients from "../controllers/registeredUsers.js";
import updateClientPassword from "../controllers/updatePassword.js";
import deleteClient from "../controllers/deleteUser.js";

const userRouter = express.Router();


/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: "Register a new user"
 *     description: "Registers a new user with the provided details."
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: "User successfully registered."
 *       '400':
 *         description: "Bad request - registration details are invalid."
 *       '401':
 *         description: "User already exist please login"
 *       '500':
 *         description: "Internal Server Error"
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: "User login"
 *     description: "Logs in a user with the provided credentials. A JSON Web Token (JWT) is generated upon successful login and stored in a cookie named 'token' for authentication."
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: "User email address."
 *               password:
 *                 type: string
 *                 minLength: 6
 *                 description: "User password."
 *     responses:
 *       '200':
 *         description: "User successfully logged in."
 *       '400':
 *         description: "Bad request - registration details are invalid."
 *       '401':
 *         description: "Unauthorized - invalid credentials."
 *       '500':
 *         description: "Internal Server Error"
 *     security:
 *       - cookieAuth: []
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: "jwtoken"
 */

/**
 * @swagger
 * /api/v1/logout:
 *   get:
 *     summary: "User logout"
 *     description: "Logs out the currently logged-in user."
 *     tags:
 *       - User
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       '200':
 *         description: "User successfully logged out."
 *       '401':
 *         description: "Unauthorized - user is not logged in."
 *       '500':
 *         description: "Internal Server Error"
 */

/**
 * @swagger
 * /user-details:
 *   get:
 *     summary: Get user details
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user details
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /all-users:
 *   get:
 *     summary: Get all registered clients
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all registered clients
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /forgot-password:
 *   put:
 *     summary: Update client password
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /remove-client/{id}:
 *   delete:
 *     summary: Delete a client by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the client to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */



userRouter.post('/register',userRegistration)
userRouter.post('/login',userLogin)
userRouter.get('/logout',userSignOut)
userRouter.get('/user-details',authenticateUser,userDetails)
userRouter.get("/all-users",authenticateUser,isAdmin,getAllRegisteredClients)
userRouter.put("/forgot-password",updateClientPassword)
userRouter.delete("/remove-client/:id",authenticateUser,isAdmin,deleteClient)

export default userRouter