
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("movies").del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'The AvenGers', year: "2012", released:"04 May 2012", runtime:"143min", genre:"Action,Adventure", director:"Joss Whedon", writer:"Joss Whedon(screenplay), Zak Penn (story), Joss Whedon (story)", actors:'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth', plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", country: "USA", imdbrating:"8.0", box_office:"$623,279,547"}
      ]);
    });
};
