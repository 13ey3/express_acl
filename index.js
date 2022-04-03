import "dotenv/config";
import express from "express";
import route from "./src/routes";

const app = express();
const port = process.env.PORT;

route(app);

app.listen(port, () => {
  console.log(`App now is running at http://localhost:${port}`);
});
