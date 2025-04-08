require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database");
const vehiclesRouter = require("./src/routes/vehicle.routes");
const authRouter = require("./src/routes/auth.routes");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", vehiclesRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
