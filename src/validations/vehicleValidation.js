const Joi = require("joi");

const vehicleSchema = Joi.object({
	brand: Joi.string().trim().required(),
	model: Joi.string().trim().required(),
	year: Joi.number()
		.integer()
		.min(1900)
		.max(new Date().getFullYear())
		.required(),
	price: Joi.number().min(0).required(),
	fuelType: Joi.string()
		.valid("gasolina", "álcool", "diesel", "flex", "elétrico")
		.required(),
	transmission: Joi.string().valid("manual", "automático").required(),
	mileage: Joi.number().min(0).required(),
	color: Joi.string().required(),
	isUsed: Joi.boolean().optional(),
	description: Joi.string().trim().allow("").optional(),
});

const vehicleUpdateSchema = Joi.object({
	brand: Joi.string().trim(),
	model: Joi.string().trim(),
	year: Joi.number().integer().min(1900).max(new Date().getFullYear()),
	price: Joi.number().min(0),
	fuelType: Joi.string().valid(
		"gasolina",
		"álcool",
		"diesel",
		"flex",
		"elétrico"
	),
	transmission: Joi.string().valid("manual", "automático"),
	mileage: Joi.number().min(0),
	color: Joi.string(),
	isUsed: Joi.boolean(),
	description: Joi.string().trim().allow(""),
}).min(1);

module.exports = { vehicleSchema, vehicleUpdateSchema };
