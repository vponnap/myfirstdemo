# myfirstdemo

## Prerequisites 
* maven, npm and java, mysql. 

## Getting started
First, create a spring boot project with https://start.spring.io. Add the `Web` dependency. Set the groupId and
artifactId to whatever you want. Here we set it to `spring.example` and `myfirstdemo`

Generate the project and unzip it into your project directory. You probably want to initialize git, add a .gitignore and make your initial commit at this point.
You should now have build.gradle file if you've selected a gradle project or pom.xml if it is maven.

Next step is to make sure you have all your dependencies, here we are using JPA, mysql connecter and jdbc. You can checkout `build.gradle` file for configuration details. 

Create CrossOrigin with `http://localhost:3000`, in MyuserController.

Update `application.properties` file with the database credentials. Before that make sure you have created a `user` schema and `details` table in the database.  

Now build the application

```
$ gradlew clean build
```

Once you run, the application will start on your local on port 8090. 

Springboot application: http://localhost:8090

## Adding React

Creating the frontend of the application 

```
$ npx create-react-app frontend
```
Creating a new React app in \myfirstdemo\frontend

Next step is th add the Components for the respective services. Create UserService to call the REST API. Here we are using axios as a HTTP client.

Add `"proxy": "http://localhost:8090"` in `package.json`

```
$ cd frontend
$ npm start
```

You can now view frontend in the browser.

  Local:            http://localhost:3000/

  Home page: http://localhost:3000/AddUser

  View details: http://localhost:3000/retrieve (friontened)
                http://localhost:8090/users (backend)

  
