const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.get("/api", async (req, res) => {
  try {
    await fetch(`https://restcountries.com/v3.1/name/${req.query.country}`)
      .then((res) => res.json())
      .then((data) => res.send(data));
  } catch (error) {
    res.status(500);
    res.send({ status: 500, message: "Unexpected server error" });
    console.error("Unexpected error:", error);
  }
});
app.get("/api/country-border", async (req, res) => {
  try {
    await fetch(
      `https://restcountries.com/v3.1/alpha/${req.query.countryBorder}`
    )
      .then((res) => res.json())
      .then((data) => res.send(data));
  } catch (error) {
    res.status(500);
    res.send({ status: 500, message: "Unexpected server error" });
    console.error("Unexpected error:", error);
  }
});

app.listen(4000, () => console.log("Server started"));
