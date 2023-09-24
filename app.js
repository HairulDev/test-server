var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fileUpload = require("express-fileupload");
const helper = require("#lib/response");

var cors = require("cors");

const router = express.Router();

const api = require("./routes/api");

var app = express();

app.use(express.static('public')); // set folder upload public
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors({ origin: "*" }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());


app.use(router);
router.use("/api", api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// error handler
app.use(function (err, req, res, next) {
  if (res.headersSent) return;
  // render the error page
  res.status(err.status || 500);
  if (err.status == 503 || err.status == 404) {
    return res.json({ success: false, message: err.message });
  } else {
    return helper.errorHelper(req, res, 500, undefined, err);
  }
});

// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
