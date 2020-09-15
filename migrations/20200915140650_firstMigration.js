
exports.up = function(knex) {
    return knex.schema.createTable("movies", (table) => {
        table.increments().index();
        table.text("title");
        table.text("year");
        table.text("released");
        table.text("runtime");
        table.text("genre");
        table.text("director");
        table.text("writer");
        table.text("actors");
        table.text("plot");
        table.text("poster");
        table.text("country");
        table.text("awards");
        table.text("imdbrating");
        table.text("box_office");
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("movies");

};
