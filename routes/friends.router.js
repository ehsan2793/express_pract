const express = require("express");

const friendController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.post("/", friendController.postFriend);
friendsRouter.get("/", friendController.getAllFriends);
friendsRouter.get("/:friendId", friendController.getFriend);

module.exports = friendsRouter;
