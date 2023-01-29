# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup
```
npm install (this will install all of the external libaries needed for the backend)
```

### Before startup 
Setup a .env file with the following variables: Mongo_URL, PORT, Organization_Name, Decrypt

```
MONGO_URL = mongodb+srv://user:7QHBAbsJLmBbnPpc@cluster0.jg6ollk.mongodb.net/LZT_Winter2022     #this will be the db instance
PORT   #distinquishes what port the backend server is running on 
Organization_Name  # used to set up automatic organization entry of a user into the schema based db
Decrypt   # acts as the secret key, in which case should not be shared, but this is just a fun little project so there is no harm
```

### Compiles and hot-reloads for development
```
npm start   (command set up that acts as node start command)
```
