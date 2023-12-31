const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({path: './config/.env'});

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

const date = new Date();

// var utcDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
// date.getUTCDate(), date.getUTCHours(),
// date.getUTCMinutes(), date.getUTCSeconds());

// utcDate = new Date(utcDate);
// console.log(new Date(utcDate));





app.get('/',  (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
});

app.get('/api', (req, res, next) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    let day = weekday[date.getDay()];
    const github = "https://github.com/Awe-Elizabeth/hng-task1/blob/main/server.js";
    const repo = "https://github.com/Awe-Elizabeth/hng-task1";

  
    const now = new Date();

    const uyear = now.getUTCFullYear();
    const month = now.getUTCMonth()+1;
    const uday = now.getUTCDate();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    //const milliseconds = now.getUTCMilliseconds();

    utcDate = `${uyear}-0${month}-${uday}T${hours}:${minutes}:${seconds}Z`;
    //console.log(utcDate);

    res.status(200).json({
        slack_name: req.query.slack_name,
        current_day: day,
        utc_time: utcDate,
        track: req.query.track,
        github_file_url: github,
        github_repo_url: repo,
        status_code: 200
    });
})