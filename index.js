const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesControlller = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;
const localhost = "127.0.0.1";

app.use((req, res, next) => {
  console.log(`${req.method}, 
  ${req.url}`);
  next();
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
    <ul>
        <li>
            <a href="/friends">Friends</a>
        </li>
    </ul>`);
});

app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${localhost}:${PORT}`);
});
