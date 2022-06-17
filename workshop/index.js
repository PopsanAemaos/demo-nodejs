require("dotenv").config();

const server = require("./server");
// const newman = require("newman");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server is started at localhost:${PORT}`)
);

// newman.run(
//   {
//     collection: require("./postman/test.json"),
//     reporters: "cli",
//   },
//   function (err) {
//     console.log(err);
//     if (err) {
//       throw err;
//     }
//     console.log("collection run complete!");
//   }
// );