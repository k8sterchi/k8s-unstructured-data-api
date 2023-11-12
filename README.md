# k8s-unstructured-data-api

## Description
an API for a social network web applications where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Videos](#walkthrough-videos)
- [Resources](#resources)
- [License](#license)

## User Story
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Videos
The following animations show examples of the application's API routes being tested in Insomnia. 

This first animation demonstrates how to start the application's server: 

[Click here to view video of `npm run start`](https://drive.google.com/file/d/1UhoAA9C9XPy6Gqkp7HLaaGUIur7E1pRa/view)



[Click to view GET route to return all users, GET route to return single user, POST route to create new user, PUT route to update user, DELETE route to delete user, GET route to return all thoughts, GET route to return singe thought, POST route to create a new thought for a specific user, PUT route to update a thought, and DELETE route to delete a thought](https://drive.google.com/file/d/14I0cMQmL3Cygn9j8E8X5gfEdRU6_sMny/view)

[Click to here to view POST route for adding a reaction to a thought, DELETE route for deleteing a reaction to a thought, POST route for adding a friend to a user's friend list, DELETE route for deleting friend from user's friend list.](https://drive.google.com/file/d/1l8ZqlTklPKmZUiTlJl8aClvjAtzLhfFu/view)


## Resources
Re-watching ALL the class material and borrowing code snipets from previous lessons. 

## License
![License](https://img.shields.io/badge/License-MIT%20License-brightgreen)  
[License](./LICENSE)
This application is covered under the [MIT License](./LICENSE) license.

