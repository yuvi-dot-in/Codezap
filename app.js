const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 1337;

app.use("/", require("./routes"));

// error handler
app.use((err, req, res, next) => {
  return res.status(400).send({
    message: "an error occured",
  });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
