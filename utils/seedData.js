const faker = require('faker');

// Function to generate a random username
const getRandomUsername = () => faker.internet.userName();

// Function to generate a random email
const getRandomEmail = () => faker.internet.email();

// Function to generate random thoughts
const getRandomThoughts = (usernames) => {
  const thoughts = [];

  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    const thought = {
      published: Math.random() < 0.5,
      createdAt: faker.date.recent(),
      buildSuccess: Math.random() < 0.5,
      thoughtText: faker.lorem.sentence(),
      username: username,
      reactions: getRandomReactions(usernames, username),
    };

    thoughts.push(thought);
  }

  return thoughts;
};

// Function to generate random reactions for a thought
const getRandomReactions = (usernames, currentUsername) => {
  const reactions = [];
  const randomUsernames = getRandomUsernames(usernames, currentUsername);

  for (const username of randomUsernames) {
    const reaction = {
      reactionBody: faker.lorem.words(),
      username: username,
      createdAt: faker.date.recent(),
    };

    reactions.push(reaction);
  }

  return reactions;
};

// Function to get random usernames excluding the current one
const getRandomUsernames = (usernames, currentUsername) => {
  const filteredUsernames = usernames.filter(username => username !== currentUsername);
  const randomUsernames = faker.helpers.shuffle(filteredUsernames);
  const numReactions = Math.max(1, Math.floor(Math.random() * (randomUsernames.length + 1))); // Random number of reactions

  return randomUsernames.slice(0, numReactions);
};

// Function to generate random users
const getRandomUsers = (numUsers) => {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const user = {
      username: getRandomUsername(),
      email: getRandomEmail(),
      thoughts: [],
      friends: [],
    };

    users.push(user);
  }

  return users;
};

module.exports = { getRandomUsers, getRandomThoughts };