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
    // if(fs.existsSync("./MySite"))
    //   path = path.resolve'./MySite/'
  }


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
        build_html(data)
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
        <link rel="stylesheet" type="text/css" href="./main.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>

      <body>
        <!-- header content -->
        <div style="overflow:hidden">

          <span style="float:left">
            <img class='brdr' src="./vig.jpg" width=100px height=100px>
          </span>
          <span style="display:inline-block">
          <Span id="title">Vigneshwar Venkatachalapathi</Span><br/>
            &emsp;<span id="motto">Learn. Create. Solve. Repeat</span>
          </span>

          <span id="email"><u>Email:</u>
            <a href="mailto:haivicky@gmail.com">haivicky@gmail.com</a><br/>
            <u>Social Media:</u> @TheMoralPanda<br/>
            <a href="https://github.com/TheMoralPanda">github.com/TheMoralPanda</a><br/>
            <a href="https://linkedin.com/in/vickypathi">linkedin.com/in/vickypathi</a>
          </span>

        </div>
        <hr/>
        <!-- Experience content -->
        <div>
          <span>
              <ul>
                <li><i>Current - </i> MSc-IT student @<b>Hong Kong University of Science and Technology</b>
                <li><i>Previous - </i>Senior Software Systems Engineer @<b>Infosys</b> - (2013 - 2017)
              </ul>
          </span>
        </div>
        <hr/>
        <!-- Projects content -->
        <div>
          <span><u>Projects</u></span>
          <table>
            <tr>
              <td>
                <u>Extensions</u><br/>
                <li><a href="https://github.com/themoralpanda/Freeze_It">FreezeIt firefox extension</a><br/>
                <li><a href="https://github.com/themoralpanda/show-me-the-meaning"> VLC addon for synonyms</a><br/>
                <li><a href="http://infinitekural.net/#widget_container"> Html widgets for Thirukurral</a>
                <li><a href="https://github.com/themoralpanda/MS-Lync-Skype-Status-change-Alert-System">MS Lync/skype status change alert</a>
              </td>

              <td>
                <u>Games</u><br/>
                <li><a href="https://github.com/themoralpanda/Mangatha">Java Card game</a><br/>
                <li><a href="https://github.com/themoralpanda/RooneyVsDe-gea">RooneyVsDe-gea</a><br/>
                <li><a href="https://github.com/themoralpanda/Piano">Java Piano</a><br/>
                <li><a href="https://github.com/themoralpanda/HandCricket">HandCricket</a><br/>
              </td>

              <td>
                <u>Algorithms</u><br/>
                <li><a href="https://github.com/themoralpanda/String-Combinations-Generator">String-Combinations</a><br/>
                <li><a href="https://github.com/themoralpanda/GameOfLife">GameOfLife</a><br/>
              </td>

              <td>
                <u>Solutions</u><br/>
                <li><a href="https://github.com/themoralpanda/Assignments">Coursera-Princeton Univ Algms part1</a><br/>
              </td>

              <td>
                <u>APIs</u><br/>
                <li><a href="http://infinitekural.net/api">REST API for Thirukurral</a><br/>
              </td>

              <td>
                <u>Computer Vision</u><br/>
                <li><a href="https://github.com/themoralpanda/VirtualMusic">Virtual Music using hand waving</a><br/>
                <li><a href="https://github.com/themoralpanda/WebCamVideoFaceDetector">WebCamVideoFaceDetector</a><br/>
              </td>

              <td>
                <u>Tutorials</u><br/>
                <li><a href="https://github.com/themoralpanda/Quick-Programming-Docs">Quick-Programming-Docs</a><br/>
                <li><a href="https://github.com/themoralpanda/Computer-Vision/tree/master/Tutorials">Computer-Vision-techniques</a><br/>
              </td>

            </tr>
          </table>
        </div>
        <hr/>

        <!-- Extracurricular -->
        <div>
        <span><u>Extracurricular</u></span><br/><br/>
        <table>
          <tr>
            <td>
              <span><u>Blog</u></span>
              <li><a href="http://themoralpanda.in/">Personal Blog</a><br/>
                '<b>Caution</b>:So much Philosophy ahead'</li>
            </td>
            <td>
              <span><u>Music</u></span>
              <li>I create/mix music sometimes here <a href="https://soundcloud.com/vigneshwar-venkatachalapathi">Sound Cloud</a>

            </td>
        </table>
        <div>
        <hr/>
        <!-- footer -->
        <div id="footer">
          <span>
            Built using <a href="https://github.com/themoralpanda/SimpleSite">SimpleSite</a>
          </span>
        </div>



      </body>

    `
    console.log("compiled and run successfully")
    console.log(header)
  }


}
