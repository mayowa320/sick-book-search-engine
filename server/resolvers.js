const fake_users = require("./fake_users.json");
let token = "nnbyhug45ugthbghdjfjverbrhjhrbfhdjbfghjdfgjhdg";
console.log(fake_users[0]);

const resolvers = {
  Query: {
    me: () => fake_users[0],
  },
  Mutation: {
    login: (email, password) => {
      let user = fake_users.find(
        (user) => user.email === email && user.password === password
      );
      return { token, user };
    },
    saveBook: (authors, description, title, bookId, image, link) => {
      me.savedBooks.push({ authors, description, title, bookId, image, link });
      return me;
    },
    addUser: (username, password, email) => {
      let newUser = {
        username,
        password,
        email,
        _id: fake_users.length,
        bookCount: 0,
        savedBooks: [],
      };
      fake_users.push(newUser);
      return { token, newUser };
    },
    removeBook: (bookId) => {
      let indexOfBookToDelete = me.savedBooks.findIndex(
        (book) => book.bookId === bookId
      );
      me.savedBooks.splice(indexOfBookToDelete, 1);
      return me;
    },
  },
};
module.exports = resolvers;
