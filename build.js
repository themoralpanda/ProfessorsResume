//Importing useful modules
const fs = require('fs')//File system api.
const readLine = require('readline')//Reading input (eg from stdin)
const jsonFile = require('jsonfile')//For reading and writing jsonfiles
const async = require('async')//For async module
const path = require('path')

module.exports = function(){

  var loc//path for the directory
  if(__dirname.includes("MySite")){
    //We are inside MySite directory
    path = "./"
  }else {
    //We are not inside MySite directory
    if(fs.existsSync("./MySite"))
      path = path.resolve'./MySite/'
  }
  /*

  var jsonReadTasks = {} //list of task to read in parallel using async.

  //contact task to read the contact.json as object
  if(fs.existsSync('./MySite/Data/contact.json'))
    jsonReadTasks.contact = function(callback){
        jsonFile.readFile('./MySite/Data/contact.json', function(err,obj){
          if(err)
            callback(err,null)
          else {
            callback(null, obj)
          }
        })
    }

  //education task to read the education.json as object
  if(fs.existsSync('./MySite/Data/education.json'))
    jsonReadTasks.education = function(callback){
        jsonFile.readFile('./MySite/Data/education.json', function(err,obj){
          if(err)
            callback(err,null)
          else {
            callback(null, obj)
          }
        })
    }

  //experience task to read the experience.json as object
  if(fs.existsSync('./MySite/Data/experience.json'))
    jsonReadTasks.experience = function(callback){
        jsonFile.readFile('./MySite/Data/experience.json', function(err,obj){
          if(err)
            callback(err,null)
          else {
            callback(null, obj)
          }
        })
    }

  //projects task to read the projects.json as object
  if(fs.existsSync('./MySite/Data/projects.json'))
    jsonReadTasks.projects = function(callback){
        jsonFile.readFile('./MySite/Data/projects.json', function(err,obj){
          if(err)
            callback(err,null)
          else {
            callback(null, obj)
          }
        })
    }


  if(Object.keys(jsonReadTasks).length > 0)
    async.parallel(jsonReadTasks,function(err,data){
      if(err)
        console.log(err)
      else {
        console.log(data)
        build_html()
        process.exit()


      }
    })
  else{
      process.exit()
    }

  function build_html(data){
    var header = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="./Style/index.css">
      </head>

      <body>
        <header>
          <h4>${data.contact.name}</h4>
          <span>${data.contact.motto}</span>
          <span>
        </header>
      </body>
    `
    console.log("compiled and run successfully")
  }

*/
}
