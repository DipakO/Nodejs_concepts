const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  console.log("Request from backend");
  //   res.write("Hello this is backend data");
  if (url == "/Add") {
    res.end("Add");
  } else {
    res.end("Hello this is backend data");
  }
});

server.listen(3000, () => {
  console.log("server Started");
});
