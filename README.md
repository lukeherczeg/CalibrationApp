
## Link to deployed page: https://calibrationapp.herokuapp.com/Home



## Having Heroku errors? Look no further!
#### `Setup` - Read the "Heroku Instructions.txt" first
#### `Updating Heroku`- For now, heroku must be updated manually.
  - #### `First` - Sign into our heroku account through a web browser and look at the heroku deployments to get the most up-to-date one. As of 11/27/2019@2:40pm I'm using deployment shielded-garden-81870.
  - #### `Second` - Login to heroku through the command line.
  - #### `Third` - You'll need to find out how to switch that most up-to-date branch on the command line. When you find out, add that information here.
  - #### `Fourth` - To push your changes, "git add ." from the project directory to add everything, "git commit -m <your message here>", and git push heroku <your branch>:master.
    - #### `Errors` - If you have any errors pushing to the heroku branch, see "Heroku Instructions.txt" for directions. If you're absolutely sure of what you're doing, give git push the --force flag to overwrite any conflicts and force an update.
#### `Debugging` - Heroku CLI has several powerful tools I use to debug issues:
  - #### `BASH` - "heroku run bash". This drops you into a bash session on the heroku server. You only have very basic tools, but you can ls, cat, etc. I used this to see that my local changes weren't properly being pushed to heroku (you can check the date and times here).
  - #### `Heroku Logs` - "heroku logs". This will allow you to see the most recent logs. Npm errors will print here.
  - #### `Heroku Open` - "heroku open". Attempts to launch the website, but for me personally it throws an error message and prints the url.
  - #### `Heroku local` - "heroku local". Runs the server locally. Use this is you suspect the issue is with the Heroku server itself (slow response time, not deploying changes, etc).
