const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/quotes", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    console.log("Successfully fetched quote");

    res.json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.listen("3030", () => {
  console.log("Server started at http://localhost:3030");
});
