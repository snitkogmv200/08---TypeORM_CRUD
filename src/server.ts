import express from "express";
import "dotenv/config.js";
import router from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(router);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
