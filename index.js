const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  6d807eea-f338-407b-9fa8-1db38437aca8
  return res.json({ username: username, secret: "mhs123..." });
});

app.listen(3001);

/*
1. create a s32-36 directory inside the batch folder

2. in the s32-36 folder...
		create "app.js"
		create "auth.js"
		create "models" folder
			create course.js and user.js inside it
		create "routes" folder
			create "courseRoutes.js" and "userRoutes.js" inside it
		create "controllers" folder
			create "courseController.js" and "userController.js" inside it
		create .gitignore file and edit it
				add the text "node_modules" inside the file and save it

3. initialize the directory to use npm tech by using the command "npm init -y"

4. install the following packages inside the directory using gitbash/terminal
	- express
	- mongoose
	- bcrypt
	- cors
	- jsonwebtoken

5. in package.json file, refactor the "script" object by adding "start": "nodemon app.js"
*/

// setting up dependencies
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// // const port = 4000;

// app.use(cors()); //allows all origins/domains to access the backend application
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(
//   "mongodb+srv://mhsalanga:Koykoy22222222@wdc028-course-booking.fogfn.mongodb.net/b170-course-booking?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection Error"));
// db.once("open", () => console.log("We're connected to the database"));

// // defines the routes where the CRUD operations will be executed on the users ("/api/users") and
// //courses ("/api/courses")
// app.use("/api/users", userRoutes);
// app.use("/api/courses", courseRoutes);

// app.listen(port, () => console.log(`API now online at port ${port}`));
//*******************************

//app.listen(process.env.PORT || port, () => console.log(`API now online at port ${process.env.PORT ||port}`))
//*******************************
// proces.env.PORT works if you are deploying the api in a host like Heroku. this  code allows the app to use
//the environment of that host (Heroku) in running the server
