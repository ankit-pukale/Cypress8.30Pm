const { defineConfig } = require("cypress");
function sub(a,b){
  return a-b
}
module.exports = defineConfig({
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
    },
  },
});
