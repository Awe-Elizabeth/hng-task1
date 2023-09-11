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


app.get('/', (req, res, next) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date();
    let day = weekday[date.getDay()];

    res.status(200).json({
        slack_name: 'Elizabeth',
        current_day: day,
        utc_time: date,
        track: "backend",
    });
})