const express = require("express");
const vehiclesApi = require("../api/vehicle");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Rotas públicas
router.get("/vehicles", vehiclesApi.getAllVehiclesInDb);
router.get("/vehicle", vehiclesApi.searchVehicleByFilters);

// Rotas protegidas por authMiddleware
router.post("/vehicle", authMiddleware, vehiclesApi.createVehicle);
router.patch("/vehicle/:id", authMiddleware, vehiclesApi.updateOneVehicle);
router.delete("/vehicle/:id", authMiddleware, vehiclesApi.deleteVehicle);

module.exports = router;
