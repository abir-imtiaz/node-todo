const path = require("path");
const express = require("express");

const logger = require("./middleware/logger");

const app = express();

// init middleware
app.use(logger);

// default express middleware
app.use(express.json);

app.use(express.urlencoded({ extended: false }));

// users api
app.use("/api/users", require("./routes/api/users"));

//static routes
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
