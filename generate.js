//Importing useful modules
const fs = require('fs')//File system api.
const readLine = require('readline')//Reading input (eg from stdin)
const jsonFile = require('jsonfile')//For reading and writing jsonfiles
const build = require('./build.js')

const rl = readLine.createInterface({
  //specify the stdin/out as target
  input: process.stdin,
  output: process.stdout
})

module.exports = function(){
    if(fs.existsSync('./config.json') || fs.existsSync('./data') || fs.existsSync('./style') || fs.existsSync('./MySite')){
      console.log("Skeleton already available at the current directory.\n")
      rl.question("Do you want to build it? <yes/no>", function(answer){
        if(answer.toLowerCase() === "yes"){
          build()
          rl.close()
        }
        else
          rl.close()
      })
    }else {
      if(!fs.existsSync("./MySite")){
        rl.close()
        fs.mkdirSync("./MySite") // creating root project directory.
        var obj = { //content of the configuration file
          "name": "config.json",
          "version": "1.0.0",
          "description": "Main Configuration file for the application",
          "keywords":"config",
        }
        //Creating Config.json file
        jsonFile.writeFile("./MySite/config.json",obj,{spaces: 2, EOL: '\r\n'},function(err){
          if(err)
            console.log("Error creating Config file")
        })

        // Creating Style directory
        fs.mkdirSync("./MySite/Style/")
        obj = "/* One and only CSS file for this simple site */ \n"
        //Creating style.json file inside Style directory
        fs.writeFile("./MySite/Style/index.css",obj,'utf8', function(err){
          if(err)
            console.log("Error creating style.json file inside Style directory")
        })

        //Creating data directory
        fs.mkdirSync("./MySite/Data/")
        obj = { //Json data for Order.json
          "name": "ORDER.json",
          "version": "1.0.0",
          "description": "Maintains the order in which the components of the resume should be build",
          "order": [
            "contact", // Contact details
            "summary", // two line summary
            "education", //Education details
            "workExperience", //Work experience
            "projects" //Projects section
          ],
          "photoURL": ""//Place your photo inside data directory and give the name here. eg 'myPhoto.jpg'
        }

        //Creating order.json file inside data directory
        jsonFile.writeFile("./MySite/Data/ORDER.json",obj,{spaces: 2, EOL: '\r\n'}, function(err){
          if(err)
            console.log("Error creating oder.json file inside Data directory")
        })

        obj = {//Content for education.json file
          1: ["MSc","University Name","2017-2018"],
          2: ["BTech","University Name","2009-2013"]
        }

        //Creating education.json inside data directory
        jsonFile.writeFile("./MySite/Data/education.json",obj,{spaces: 2, EOL: '\r\n'},function(err){
          if(err)
            console.log("Error creating education.json file inside Data directory")
        })

        obj = {//Content for experience.json file
          1: ["Company name","Description","year1-year2"],
          2: ["Company name","Description","year1-year2"]
        }

        //Creating experience.json inside data directory
        jsonFile.writeFile("./MySite/Data/experience.json",obj,{spaces: 2, EOL: '\r\n'},function(err){
          if(err)
            console.log("Error creating experience.json file inside Data directory")
        })

        obj = {//Content for projects.json file
          1: ["title","Description","link"],
          2: ["title2","Description2","link2"]
        }

        //Creating projects.json inside data directory
        jsonFile.writeFile("./MySite/Data/projects.json",obj,{spaces: 2, EOL: '\r\n'},function(err){
          if(err)
            console.log("Error creating projects.json file inside Data directory")
        })

        //Creating contacts.json inside data directory.
        obj = {//Content for contact.json file
          'name': "Full Name",
          'shortName': "Short Name",
          'motto': "Talk less. Do more",
          'address': ["line1","line2"],
          'email':"email@provider.com",
          'phone':"",
          'socialMedia':""
        }

        //Creating contact.json inside data directory
        jsonFile.writeFile("./MySite/Data/contact.json",obj,{spaces: 2, EOL: '\r\n'},function(err){
          if(err)
            console.log("Error creating contact.json file inside Data directory")
        })

      }

    }


}
