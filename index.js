import express from "express";
import zonasRouter from "../TP2_FINAL_ZONAS/src/routes/zonas.routes.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", zonasRouter);

app.listen(PORT, ()=> console.log(`Server listening on: ${PORT}`));
app.on("error", (error)=> console.log(`ERROR: ${error}`));