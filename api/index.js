// import app from "../src/server.js";
// module.exports = (req, res) => {
//   app(req, res);
// };
import app from "../src/server.js";

export default function handler(req, res) {
  app(req, res);
}
