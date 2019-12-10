
## Link to deployed page: https://calibrationapp.herokuapp.com/Home



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
