const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
	brand: { type: String, required: true, trim: true },
	model: { type: String, required: true, trim: true },
	year: {
		type: Number,
		required: true,
		min: 1900,
		max: new Date().getFullYear(),
	},
	price: { type: Number, required: true, min: 0 },
	fuelType: {
		type: String,
		enum: ["gasolina", "álcool", "diesel", "flex", "elétrico"],
		required: true,
	},
	transmission: {
		type: String,
		enum: ["manual", "automático"],
		required: true,
	},
	mileage: { type: Number, required: true, min: 0 },
	color: { type: String, required: true },
	isUsed: { type: Boolean, default: true },
	description: { type: String, trim: true },
	createdAt: { type: Date, default: Date.now },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
