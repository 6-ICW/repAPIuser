const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("server is actief op poort 3000");
});
