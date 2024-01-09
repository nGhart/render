//"use strict";
import cors from "cors";
import express from "express";
import axios from "axios";
import { authMiddleware, passportJwtLogin } from "./helpers/auth_middleware.js";
import extendExpressMiddleware from "./helpers/express_middleware.js";
import UserController from "./controllers/users.js";
import LogController from "./controllers/logs.js";
import db from "./models/db.js";
import bodyParser from "body-parser";

const app = express();
const token = process.env.WHATSAPP_TOKEN;
const textMessage = () => {
  console.log("started");
};
const getBody = () => {
  console.log("how are you");
};

// const request = require("request"),
//const axios = require("axios").default;
// app = express().use(body_parser.json());

app.use(bodyParser.json());

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

app.post("/webhook", (req, res) => {
  let body = req.body;

  console.log(JSON.stringify(req.body, null, 2));

  if (req.body.object) {
    if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0]
    ) {
      let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
      let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload

      if (msg_body === "start wsh") {
        textMessage();
        getBody();
      } else {
        console.log("no");
      }
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v12.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: from,
          text: { body: "You sent: " + msg_body },
        },
        headers: { "Content-Type": "application/json" },
      });
    }
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    res.sendStatus(404);
  }
});

app.get("/webhook", (req, res) => {
  const verify_token = process.env.VERIFY_TOKEN;

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === verify_token) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

// db.sequelize.sync({ force: false }).then(() => {
//   console.log("Database synchronized");
// });

// const app = express();

let corsOptions = {};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Extending Express functionality with custom middleware
extendExpressMiddleware(app);

app.use(passportJwtLogin);

app.use("/api/users", UserController);
app.use("/api/logs", LogController);

// Setting up a default route for the root path
app.get("/", function (req, res) {
  res.send("Hello world");
});

// Handling 404 errors for undefined routes
app.get("*", function (req, res) {
  res.status(404).json("Page not found");
});

// Configuring the port and starting the Express server
//app.listen(process.env.PORT || 1337, () => console.log("webhook"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`webhook is listening on port ${port}.`);
});
