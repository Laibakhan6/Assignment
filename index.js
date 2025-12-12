const express = require('express');
const app = express();
const port = 3000;

// ASSIGNMENTQUESTION NO: 01 TimeFunction //
function requestTimerLogger(req, res, next) {
    const currentTime = new Date().toLocaleString();
    req.requestTime = currentTime;
    console.log("Request Received Time at:", currentTime);
    next();
}
app.get("/time", requestTimerLogger, (req, res) => {
    res.send(`Current Time Received at ${req.requestTime}:`)
})

// ASSIGNMENT QUESTION NO.2 Authentication middleware
function checkAuth(req, res, next) {
    const key = req.query.key;

    if (key === '12345') {
        next();
    } else {
        res.json({
            success: false,
            message: "Unauthorized access"
        });
    }
}
app.get('/secure', checkAuth, (req, res) => {
    res.send("Welcome To The Secure Area....!");
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});



