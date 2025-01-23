const express = require("express");
const cors = require("cors");
const { pool, makeQuery } = require("./database");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server is on localhost:${port}`));

// GET ANNOUNCEMENTS FROM POSTGRES TO FRONTEND
app.get("/info", async (req, res) => {
  try {
    const query = await makeQuery("SELECT * FROM announcements");
    console.log("server.js query: " + query);
    const all_announcements = query.map((item) => ({
      date: item.date,
      title: item.title,
      body: item.body,
    }));
    res.status(200).json({ info: all_announcements });
  } catch (error) {
    console.error("Error fetching announcements:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Serve the React app for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// SEND ANNOUNCEMENTS FROM FRONTEND TO POSTGRES
app.post("/", (req, res) => {
  let title = "need a field for title";
  let new_announcement = req.body.parcel;
  let current_date = new Date().toLocaleString("en-US");

  const insertSTMT = `INSERT INTO announcements ( date, title, body ) VALUES ( '${current_date}', '${title}', '${new_announcement}');`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("data saved");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response received: " + req.body);
});
