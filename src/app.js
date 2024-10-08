const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./infrastructure/http/routes/index.routes");
const app = express();

const originDomains = ["http://localhost:3000", "http://127.0.0.1:3000"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || originDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

module.exports = app;
