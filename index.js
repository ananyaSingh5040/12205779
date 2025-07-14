const express = require("express");
const dotenv = require("dotenv");
const URL = require("./models/url.js");
const PORT = process.env.PORT || 8001;
const {connectDb} = require("./connect.js");
const app = express();
const urlRoutes = require("./routes/url.js");
dotenv.config();
connectDb(process.env.MONGO_URI).then(() =>
  console.log("MongoDB connected!")
);
app.use(express.json());
app.use("/shorturls",urlRoutes);
app.get("/:shortId", async (req, res) => {
  const shortID = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortCode: shortID,
    },
  );
  if (!entry) {
    return res.status(404).send("Short URL not found");
  }
  res.redirect(entry.url);
});
app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`)

})