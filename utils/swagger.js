import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    swaggerDefinition: {
        openapi: "3.0.3",
        info: {
            version: '1.0.0',
            title: 'Backend API Documentation',
            description: 'Transition Computing backend API documentation with JWT authentication',
            contact: {
                name: 'Samrat'
            }
        },
        servers: [
            {
                url: 'http://localhost:5001' // Adjust the URL as per your setup
            }
        ],
        securitySchemes: {
            bearerAuth: { // Define the security scheme for JWT authentication
                type: 'apiKey',
                in:Headers,
                name:"Authorization"
            }
        }
    },
    apis: ["./routes/*.js", "./model/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
    app.use('/docs', swaggerUi.serve);
    app.get('/docs', swaggerUi.setup(swaggerSpec, { explorer: true }));
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    // log.info(`Docs are available at http://localhost:${port}/docs`);
}

export default swaggerDocs;


