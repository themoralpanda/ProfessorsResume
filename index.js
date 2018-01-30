#! /usr/bin/env node

//Importing useful modules
const generate = require('./generate.js')
const debug = require('./debug.js')
const build = require('./build.js')





var args = process.argv.slice(2)
//coz the first argument is 'node'
//and the second argument is -location of this executable

if(args[0] === "-generate")
  generate();
else if (args[0] === "-debug" || args[0] === "-build") {
  global.debug = function(){
      console.log("Debug done")
    }
   if(args[0] === "-debug")
      debug()
   else {
      build()
   }
}else if (args[0] === "-help") {
  (global.help = function(){
      console.log("-generate  'Generates skeleton of the Static site'")
      console.log("-debug  'debugs the existing files and folders for error and compilation issues.'");
      console.log("-build  'Builds the static site and opens the Index.html'");
      console.log("-help  'Displays the help options'");
    })();
}else{
  console.error("No such command available.")
  console.log("Please use 'ProfessorsResume -help' for details")
}
console.log("\n")
