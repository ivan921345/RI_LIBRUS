const express = require("express");
const Librus = require("librus-api");

const client = new Librus();
const app = express();

app.get("/", (req, res) => {
  client.authorize("10890456u", "OsKaR228666").then(() => {
    client.calendar.getCalendar().then((data) => {
      console.log(client.calendar);
    });
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app is listening ${PORT}`);
});
