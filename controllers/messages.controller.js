function getMessages(req, res) {
  res.send(`<li></li>`);
}

function postMessage(req, res) {
  console.log("posting");
}

module.exports = {
  getMessages,
  postMessage,
};
