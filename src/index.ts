import express from "express";
import http from "http";
import rootDir from "app-root-path";

import cors from "./modules/cors";

/********** use **********/
const app = express();
app.use("/static", express.static(rootDir + "/dist/public/"));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cors);
app.get("*", function (req, res, next) {
  const protocol = req.headers["x-forwarded-proto"];
  const hostname = req.hostname;
  if (protocol != "https" && hostname !== "localhost")
    res.redirect(process.env.DOMAIN + req.url);
  else next();
});

app.get("/", (req, res) => {
  return res.status(200).json({ test: "test" });
});

/********** listen **********/
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Success Connected Server : ${port}`);
});

/********** default **********/
export default app;