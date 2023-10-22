const { defineConfig } = require("cypress");
const mysql = require("mysql");
function sub(a,b){
  return a-b
}
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
module.exports = defineConfig({
  env:{
  "db": {
    "host": "127.0.0.1",
    "user": "root",
    "password": "neo32110"
  }},
  e2e: {
    chromeWebSecurity:false,
    video:false,
    includeShadowDom:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        log(message){
          console.log(message)
          return null
        }
      })
      on('task',{
        add({a,b}){
          return a+b
        }
      })
      on('task',{
        subS({a,b}){
          return sub(a,b)
        }
      })
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
    },
  },
});
