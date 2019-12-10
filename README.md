# Welcome to the Calibration File Updating App!
- ## Our web app: https://calibrationapp.herokuapp.com
_______________________________________________________________________________________________________________________________________
# Features Implemented: 

### •	Full, protected and hashed user registration and login through MongoDB:
![image](https://i.imgur.com/inKLkQn.png)
![image](https://i.imgur.com/O3DjfLm.png)
![image](https://i.imgur.com/dbnesUI.png)
### • Allows for entry of UUID, which is stored and used as a folder to encase files:
![image](https://i.imgur.com/sGbGn2I.png)
### •	File restriction to .png, .yml, .ROS:
![image](https://i.imgur.com/LF7puBS.png)
### •	File upload functionality to Amazon S3 Bucket,
### •	Fully functional viewing of previous files in a given UUID:
![image](https://i.imgur.com/MHVjZmC.png)
### •	A protected route for the upload page that requires users to be logged in:
![image](https://i.imgur.com/MFYP9UQ.png)
### •	Logout button returns user to home screen and refreshes session:
![image](https://i.imgur.com/oVuVVAz.png)
### •	Fully deployed, standalone website:
![image](https://i.imgur.com/QXwXkGh.png)

_______________________________________________________________________________________________________________________________________

## We were greatly helped by all of these wonderful tutorials and APIs :
  #### - `Creating File Upload:` https://malcoded.com/posts/react-file-upload/
  #### - `Connecting to database:` https://stackabuse.com/uploading-files-to-aws-s3-with-node-js/
  #### - `Pre-Signed URLs:` https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/s3-example-presigned-urls.html
  #### - `AWS S3:` https://medium.com/codebase/using-aws-s3-buckets-in-a-nodejs-app-74da2fc547a6
  #### - `Downloading with NodeJS/Express:` https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
  #### - `Linking for routing:` https://knowbody.github.io/react-router-docs/api/Link.html
  #### - `Creating a react app:` https://www.youtube.com/watch?v=DGtNLoY64ZQ&list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m
  #### - `Heroku Deployment:` https://daveceddia.com/deploy-react-express-app-heroku/
  #### - `Heroku Deployment:` https://devcenter.heroku.com/articles/config-vars
  #### - `NodeJS Tutorial:` https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp
  #### - `MongoDB Tutorial:` https://www.youtube.com/watch?v=GtD93tVZDX4&list=PLS1QulWo1RIZtR6bncmSaH8fB81oRl6MP
  #### - `Restrict Files:` https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
  #### - `User Authentication:` https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8091064?start=15#content
  #### - `User Authentication:` https://www.udemy.com/course/react-node-nextjs-fullstack-multi-user-blogging-platform-with-seo/learn/lecture/16312676?start=60#content
  #### - `User Authentication:` https://medium.com/swlh/css-for-beginners-what-is-css-and-how-to-use-it-in-web-development-5985afe53096
  #### - `User Authentication:` https://material.io/resources/
  #### - `User Authentication:` https://internetingishard.com/html-and-css/
  #### - `Bootstrap:` https://getbootstrap.com/
  #### - `Express:` https://expressjs.com/
  #### - `Nodemon:` https://www.npmjs.com/package/nodemon
  #### - `Mongoose:` https://mongoosejs.com/
  #### - `Crypto:` https://www.npmjs.com/package/crypto-js
  #### - `Cors:` https://expressjs.com/en/resources/middleware/cors.html
  #### - `Axios:` https://www.npmjs.com/package/axios
 
________________________________________________________________________________________________________________________________________
 
## Having Heroku errors? Look no further!

#### `Setup` - Read the "Heroku Instructions.txt" first
#### `Updating Heroku`- We now have Heroku configured to update automagically through this very GitHub repo! Simply push your changes to the master branch and wait for Heroku to reconfigure to see the changes live on the website. If you're having issues and would like to configure Heroku manually through the CLI, read the following:
  - #### `First` - Sign into our heroku account through a web browser and look at the heroku deployments to get the most up-to-date one. Our deployment is live on https://calibrationapp.herokuapp.com/.
  - #### `Second` - Login to heroku through the command line.
  - #### `Third` - "git remote add heroku <git repo here>" will point Heroku towards the correct remote database to maintain changes. Check our Heroku account online to get the git repo link.
  - #### `Fourth` - To push your changes, "git add ." from the project directory to add everything, "git commit -m <your message here>", and git push heroku <your branch>:master.
    - #### `Errors` - If you have any errors pushing to the heroku branch, see "Heroku Instructions.txt" for directions. If you're absolutely sure of what you're doing, give git push the --force flag to overwrite any conflicts and force an update.
#### `Debugging` - Heroku CLI has several powerful tools I use to debug issues:
  - #### `BASH` - "heroku run bash". This drops you into a bash session on the heroku server. You only have very basic tools, but you can ls, cat, etc. I used this to see that my local changes weren't properly being pushed to heroku (you can check the date and times here).
  - #### `Heroku Logs` - "heroku logs". This will allow you to see the most recent logs. Npm errors will print here.
  - #### `Heroku Open` - "heroku open". Attempts to launch the website, but for me personally it throws an error message and prints the url.
  - #### `Heroku local` - "heroku local". Runs the server locally. Use this is you suspect the issue is with the Heroku server itself (slow response time, not deploying changes, etc).
  
________________________________________________________________________________________________________________________________________
  
# Updating Databases:
  ## `Amazon S3 Bucket`
  - ### We store our files on Amazon S3, a file-based simple cloud storage device.
  - ### Your capacity is over 500 TB  it cost you $0.023 per GB for the first 50 TB, $0.022 per GB  for the next 450 TB, and $0.021 for anything over 500TB.
     - #### If you want to change your Amazon S3 username and password, visit https://console.aws.amazon.com/billing/home?#/account
     - #### If you want to review your account, visit https://s3.console.aws.amazon.com/s3/home?region=us-east-1
     - #### Should you want to rotate secret access keys (which allow access to the database), visit https://console.aws.amazon.com/iam/home?region=us-east-1#/users
  ## `MongoDB Atlas`
  - ### We store our hashed user information on MongoDB Atlas, a json-friendly database that meets our needs.
  - ### Atlas storage is free. And with user information stored in json, we won't run out of space.
    - #### If you want to change your Atlas username and password, visit https://cloud.mongodb.com/v2#/account
    - #### If you wish to update the database URI (which links the database to our app), visit https://cloud.mongodb.com/v2/5d729f5979358ee185a94774#clusters
 
  
