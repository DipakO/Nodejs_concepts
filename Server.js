const formidable = require("formidable");
// const http = require("http");
// const { url } = require("inspector");
// const dt = require("./index");
// const server = http.createServer((req, res) => {
//   console.log("Request from backend");
//   //   res.write("Hello this is backend data");
//   // if (url === "/Add") {
//   //   res.end("Add");
//   // } else {
//   //   res.end("Hello this is backend data");
//   // }

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("Current Time And Date is " + dt.myDateTime);
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server Started");
// });

// var http = require("http");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

// const url = require("url");
// const adr = "http://localhost:8080/default.htm?year=2017&month=february";
// // PArse the url addrees
// const q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.hostname);
// console.log(q.href);
// console.log(q.path);
// console.log(q.pathname);
// console.log(q.port);
// console.log(q.protocol);
// console.log(q.query);
// console.log(q.query.month);
// console.log(q.search);
// console.log(q.slashes);

var http = require("http");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("File uploaded");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
