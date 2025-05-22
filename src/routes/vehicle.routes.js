const express = require("express");
const vehiclesApi = require("../api/vehicle");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Veículos
 *   description: Endpoints para gerenciamento de veículos
 */

/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Busca veículos com filtros
 *     tags: [Veículos]
 *     parameters:
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *       - in: query
 *         name: model
 *         schema:
 *           type: string
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *       - in: query
 *         name: fuelType
 *         schema:
 *           type: string
 *       - in: query
 *         name: transmission
 *         schema:
 *           type: string
 *       - in: query
 *         name: isUsed
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Lista de veículos encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

router.get("/vehicles", vehiclesApi.searchVehicleByFilters);

/**
 * @swagger
 * /vehicle:
 *   post:
 *     summary: Cria um novo veículo
 *     tags: [Veículos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: integer
 *                 minimum: 1900
 *                 maximum: 2025
 *               price:
 *                 type: number
 *               fuelType:
 *                 type: string
 *                 enum: [gasolina, álcool, diesel, flex, elétrico]
 *               transmission:
 *                 type: string
 *                 enum: [manual, automático]
 *               mileage:
 *                 type: number
 *               color:
 *                 type: string
 *               isUsed:
 *                 type: boolean
 *               description:
 *                 type: string
 *             required:
 *               - brand
 *               - model
 *               - year
 *               - price
 *               - fuelType
 *               - transmission
 *               - mileage
 *               - color
 *     responses:
 *       201:
 *         description: Veículo criado com sucesso
 */
router.post("/vehicle", authMiddleware, vehiclesApi.createVehicle);

/**
 * @swagger
 * /vehicle/{id}:
 *   patch:
 *     summary: Atualiza dados de um veículo
 *     tags: [Veículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do veículo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: integer
 *               price:
 *                 type: number
 *               fuelType:
 *                 type: string
 *                 enum: [gasolina, álcool, diesel, flex, elétrico]
 *               transmission:
 *                 type: string
 *                 enum: [manual, automático]
 *               mileage:
 *                 type: number
 *               color:
 *                 type: string
 *               isUsed:
 *                 type: boolean
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Veículo atualizado com sucesso
 */

router.patch("/vehicle/:id", authMiddleware, vehiclesApi.updateOneVehicle);

/**
 * @swagger
 * /vehicle/{id}:
 *   delete:
 *     summary: Remove um veículo
 *     tags: [Veículos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do veículo
 *     responses:
 *       200:
 *         description: Veículo removido com sucesso
 */
router.delete("/vehicle/:id", authMiddleware, vehiclesApi.deleteVehicle);

module.exports = router;
