// Update with your config settings.
require("dotenv").config();
module.exports = {
    development: {
        client: "pg",
        connection:
            process.env.DATABASE_URL ||
            `postgres://${process.env.USER}@127.0.0.1:5432/movies`,
        migrations: {
            directory: __dirname + "/migrations",
        },
        seeds: {
            directory: __dirname + "/seeds",
        },
    },


};
