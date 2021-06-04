export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Assignment API',
            description: 'Simple rest api for assignment',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./routes/*.js']
}