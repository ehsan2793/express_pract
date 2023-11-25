const express = require("express");

const app = express();
const PORT = 3000;
const localhost = "127.0.0.1";

const friends = [
  {
    id: 1,
    name: "Amir Gu",
  },
  {
    id: 2,
    name: "Nelson Thakur",
  },
  {
    id: 3,
    name: "Qing Guerrero",
  },
  {
    id: 4,
    name: "Mohan Islam",
  },
];

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
  const friend = friends[friendId - 1];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${localhost}:${PORT}`);
});
