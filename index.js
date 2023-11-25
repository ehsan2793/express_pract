const express = require("express");

const app = express();
const PORT = 3000;
const localhost = "127.0.0.1";

const friends = [
  {
    id: 0,
    name: "Amir Gu",
  },
  {
    id: 1,
    name: "Nelson Thakur",
  },
  {
    id: 2,
    name: "Qing Guerrero",
  },
  {
    id: 3,
    name: "Mohan Islam",
  },
];

app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) return res.status(400).json(
    {error: "you suck"}
  );
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend)
  res.status(200).json(newFriend)
});
app.get("/", (req, res) => {
  res.send(`
    <ul>
        <li>
            <a href="/friends">Friends</a>
        </li>
    </ul>`);
});
app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${localhost}:${PORT}`);
});
