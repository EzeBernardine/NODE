# module
  Every file in a node application in considered a module
  A module is a containing say file  with units of code, which can be exported, 

  To cereate a module could simply mean creating a file with related code in it

# Path
 console.log(__filename)--this will give the path to the file.
 console.log(__dirname)--while this will give the path to the directory name.

# Loading a built in module/core module
require('module-name')

# Loading a user-file module
require('file-path')

# Loading a node_module
require('installed node module')

# Steps required go through before require any file
_file or folder
_node_module
_core module

# Semantic Versioning
Eg. "yargs": "^12.0.2" === major.minor.patch versions
_*patch* version tells the version when a bug is fixed*
_*minor* version is used fr adding new features thatdon't break the existing api
_*major* version is used to fix feautures that depend on the  current verion

# Middle wear function
It is a function that take your request onject and either returns a response to a client or passes control to another middle ware function.
--Eg route handlers
--morgan()

# How to use middle wares function
app.use(the middle ware())

# Environment variable
You set this using 
__export Variable name=value
eg___export NODE_ENV=production

# The builtin middle wares function in express include
```js
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static())
//  Static contents are served from the root of the site 
```
#
_WITH CURT_
#
# Dynamic and Static webpage
## 1. Dynamic Web Pages
 These are sites that are compiled on the sever side where the server is pulling together or constructing a web page before it is sent back as a responce
It is a page that displays different content (HTML, CSS and Javascript) each time it is viewed
There of two types
### Client-side scripting
This is seen as the changes that occur in response of an action on the page like mouse or keyboard action. 
  * Note: It generates client-side content which is content generated on the user's computer rather than on the server. Javascript enables client-side scripting
### Server-side scripting
These ar the changes that occur  when a user visits or load a web page.
  * It serves server-side content which are content generated when a web page is loaded. Eg a login page which changes as a reult of an action taken like clicking. PHP does server-side scripting

## 2. Static Web Pages
They display the same content each time a user visites the page. The sma eHTML, CSS and Javascript content each time
1. Does not reuire a datebaase design. 
2. It is simply done using HTMl and publishing it on a web server.
3. It contains fixed code unelse updated by the webmaster
4. High speed
5. Reliability
6. Security
7. Low hosting price

#
* My stack

This simply tells the framework and language you use for your software development. Like

_Node, the framework will be express databse will be mongoDB_

# POSTMAN
 It is an API Testing tool used by developers and Testers to perform API Testing with lots of different features like Global variables, mock request, Environment and monitoring of APIs.

It helps view http and get responces. It is for developers to help understand ow things are working and help debug something if the data i not coming back the exact way you are expecting it. It is used for texting API endpoint
* For more info, learn more. https://www.quora.com/How-do-I-do-API-testing-using-Postman/answer/ItsTechmode?ch=10&share=4f173494&srid=tFAc

## Main Features of Postman:
1. Managing API collections, environments, tests and sharing
2. Import & export API collections
3. Extensive team collaboration tools
4. Maintain history of API requests
5. Extended API documentation & monitoring features

# NODE SERVER
A Node.js server provides the mechanisms for connecting to a service and sending/receiving data.

 <li>Server generally has two meanings:</li>

*  A piece of software that listens for network requests and then responds to them
*  A computer running such a piece of software

# NPM : 
  Developers that use NodeJS highly depend on NPM packages. NPM packages are modules that provide additional functionality that is not available out of the box or just saves time. Think of those modules as libraries.

  npm uses
  * **first**, it is an online repository for the publishing of open-source Node.js projects; 
  * **second**, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. 
  * **Thirdly** Another important use for npm is dependency management. When you have a node project with a package.json file, you can run npm install from the project root and npm will install all the dependencies listed in the package.json.

# Framework and Libries
One could say a framework is a collection of libraries, but the idea is different.
A library is just another module or function which is exposed to be used outside
## Inversion of control
**libray:** When you use a library you have the control over your code. Whenever you need something from the library you simply call it,

**Framework:** On the other hand, when using a framework, the framework is doing most of the work and there are particular places where you insert your code (for ex: In react you put your html (jsx) inside the render function). Framework usually owns the “main” function. In case of react render() is the main function.

So whenever the framework needs the application specific code it calls your code. So here the control is “inverted” from you to the framework. This is called inversion of control.

## ***<li>Note: </li>***
 Library gives you a set of functions/modules/APIs which you can use to solve a certain problem, but it doesn’t change your code on the structural or architectural level. On the other hand, frameworks also give you a set of functions/modules/APIs but it does change your code on the structural or architectural level. Library - you call it, Framework - it calls you.







# NODE
Node is a javascript runtime, built on Chrome's V8 javascript engine

### **V8 engine:**  
V8 is a powerful open source javascript engine built by Google
### **Javscript engine:** 
It is a program that converts javascript code inot lower level or machine language
### **The Chrome V8 engine :**
* The V8 engine is written in C++ and used in Chrome and Nodejs.
* It implements ECMAScript as specified in ECMA-262.
* The V8 engine can run standalone we can embed it with our own C++ program.

There are different JavaScript engines including Rhino, JavaScriptCore, and SpiderMonkey. These engines follow the ECMAScript Standards. ECMAScript defines the standard for the scripting language. JavaScript is based on ECMAScript standards. These standards define how the language should work and what features it should have  

## Framesworks to be used
### Express
It is Fast, unopinionated, minimalist web framework for Node.js

* Unopinionated frameworks, have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used. They make it easier for developers to use the most suitable tools to complete a particular task, albeit at the cost that you need to find those components yourself.

Express is unopinionated (flexible). You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!

## Routing
Routing refers to how an application’s endpoints (URIs) respond to client requests

A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), an URL path/pattern, and a function that is called to handle that pattern.
<!-- 
Node
https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964

https://v8.dev/

https://flaviocopes.com/v8/ 
-->













# Table of Content
1. Dynamics webpage
2. Static web page
3. Postman
4. Node server'
5. NPM
6. Frameworks and libriries

. Node