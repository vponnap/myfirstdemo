# myfirstdemo

## Prerequisits 
* maven, npm and java, mysql. 

## Getting started
First, create a spring boot project with https://start.spring.io. Add the `Web` dependency. Set the groupId and
artifactId to whatever you want. Here we set it to `spring.example` and `myfirstdemo`

Generate the project and unzip it into your project directory. You probably want to initialize git, add a .gitignore and make your initial commit at this point.
You should now have build.gradle file if you've selected a gradle project or pom.xml if it is maven.

Next step is to make sure you have all your dependencies, here we are using JPA, mysql connecter and jdbc. You can checkout `build.gradle` file for configuration details. 


## Adding React

Creating the frontend of the application 

```
$ npx create-react-app frontend

Creating a new React app in \myfirstdemo\frontend

Next step is th add the Components for the respective services.

```
$ cd frontend
$ npm start

[...] 

Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.16.25.84:3000/





