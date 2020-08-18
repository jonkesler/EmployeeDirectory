# EmployeeDirectory

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

![GitHub contributors](https://img.shields.io/github/contributors/jonkesler/budgetTracker)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jonkesler/budgetTracker?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/jonkesler/budgetTracker)

# Online / Offline Budget Tracker



## Description 
    
This Budget Tracker will allow you to lable and add or subtact transactions related to your budget.  It will keep a running total of your budget, show a graph of your budget and work on or off line.

This application uses a front end implemented with HTML/CSS and the backend implemented with Node.js, Express, a Mongo DB, and an indexedDb.

The user may enter any budget item and the app will track it.  Once the add of subtract button is clicked, the app adds the transaction to a Mongo database if online.  If offline the transaction will be stored locally in an indexedDb and once back online it will automatically update the Mongo database.
 
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
    
    
## Installation
    

To run the application locally, first clone this repository with the following command.

        git clone git@github.com:jonkesler/budgetTracker.git for the SSH Repository 
        or 
        git clone https://github.com/jonkesler/budgetTracker.git for the HTTPS Repository
        
Next, install the application dependencies.

        With Visual Studio, navigate to the budgetTracker directory created when you cloned the Repository.
        Right click on the server.js file and open a terminal.
        run npm install
     
Now, run the application in node.

        npm start
        
Finally, open the local application on port 3000 at the URL: `http://localhost:3000`.

**Happy budgeting!**


      
## Demo

A demo of the Online/Offline Budget Tracker application can be found [here](https://jkesleremployeedirectory.herokuapp.com/).



## License

This Project uses a MIT License License.


## Contributing
    
Jon Kesler
    
    
## Contact

If you would like to contribute to this project please contact: 
  Jon Kesler 
  Email:jkesler@hotmail.com   


Web URL: https://jkesleremployeedirectory.herokuapp.com/

GitHub URL: https://jonkesler.github.io/EmployeeDirectory/

Repository SSH:  git@github.com:jonkesler/EmployeeDirectory.git

Repository URL:  https://github.com/jonkesler/EmployeeDirectory.git
