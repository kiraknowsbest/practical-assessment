# Practical Assessment

You will be making a fullstack application according to a set of instructions listed here.

# Tips

Don't try and make something perfect before making something else work, like making the frontend styled and pretty before connecting to the server.

Make a plan for completing the app, don't just start writing code before you think about what you will be doing. Make sure you understand the goals of your code before you start writing any code.

Comments can help you remember what a certain block of code does. Switching from React components to server logic to database reading and writing can be confusing. Leave yourself notes!

While developing your code, if you use console.log() to check values, try and label the message also.
Example: 
console.log(request.body) // <-- bad
console.log('request.body: ', request.body) // <-- good

Scripts in the package.json are there to help you!

# Guidelines

You will be making a pokemon application using a free Pokemon API. You can look ath the API here: https://pokeapi.co/

The client will be able to click a pokemon to send a request to your server. The server will either return data from the database to the client or make an API call to the Pokemon API to get the data and save it to the database.

# Setup

You will need to get the basic setup between server and client first. You should be able to visit localhost:3000 to get your index.html and your React componenets to render on the page. Some npm scripts have been provided to help.

[ ] Get /server/server.js to serve static files from client/dist/ folder

# Frontend

You will need to display the original 151 pokemon so the user has something to click. This data has provided in /practical-assessment/data/pokemon.js

[ ] Using React, list each pokemon from /data/pokemon.js

[ ] Add a click event to each pokemon to console.log its information

[ ] Now instead of logging the information, send a POST to your server at /poke

*NOTE: The pokemon's number needs to be a part of the data you are sending*

[ ] console.log the error or response received by the server

Let's work a little bit on the server now.

# Server

Let's handle that POST we are receiving from the client.

[ ] Accept the POST request received from the client by sending back a status code of 200

[ ] console.log the data that was sent by the client

[ ] Make a GET request to the pokemon API for that pokemon's information

*NOTE: The url to make this request to is https://pokeapi.co/api/v2/pokemon/<number> where <number> is the number received by the client*

[ ] Send the data to the client (should be either an error or the data)

Let's work on adding the database now.

# Database

We will be using Mongo and Mongoose to interact with our database.

[ ] Create a connection to your mongo database in /db/index.js

[ ] Define a PokemonSchema and Pokemon Model in db/dbHelpers.js

[ ] Create helper function to find a pokemon from the db

*NOTE: reading or writing to db is asynchronous. consider using a callback as an argument!*

[ ] Create helper funtion to insert a pokemon into the db

[ ] Export the two helper functions

Lets head back to the server

# Server part 2

*NOTE: while connecting the db and the server, you might have to change some of the code you wrote in the db files*

[ ] Import the dbHelper functions we just wrote

[ ] Modify our handler for POST at /poke to check the database first before sending a request to the pokemon API. If the database has the pokemon, don't call the API

[ ] If we do call the Poke API, save the pokemon in the database using the helper we made

[ ] Manually check that you are actually adding pokemon to the database

[ ] Make sure you are sending the pokemon back to the client

# Frontend part 2

Now that we are getting the pokemon details on the client, let's make our frontend more interesting. Clicking a pokemon will now "select" a pokemon, and we will show the details. A pokemon can then be "unselected" to show the normal list again.

[ ] Create a way to save if a pokemon is selected or not.

[ ] While showing a selected pokemon's details, create a way to unselect the pokemon to go back to the normal view.
