/**
 * Exports a function that returns an object with the application configuration.
 * Get the port from the environment variables or use the default value.
 */

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
});
