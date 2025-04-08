const buildRegex = require("./regex");

const buildVehicleQuery = (filters) => {
	const query = {};

	if (filters.brand) query.brand = buildRegex(filters.brand);
	if (filters.model) query.model = buildRegex(filters.model);
	if (filters.color) query.color = buildRegex(filters.color);
	if (filters.description)
		query.description = buildRegex(filters.description);

	if (filters.year) query.year = Number(filters.year);
	if (filters.mileage) query.mileage = { $lte: Number(filters.mileage) };

	if (filters.priceMin || filters.priceMax) {
		query.price = {};
		if (filters.priceMin) query.price.$gte = Number(filters.priceMin);
		if (filters.priceMax) query.price.$lte = Number(filters.priceMax);
	}

	if (filters.fuelType) query.fuelType = filters.fuelType;
	if (filters.transmission) query.transmission = filters.transmission;

	if (filters.isUsed !== undefined) {
		query.isUsed = filters.isUsed === "true" || filters.isUsed === true;
	}

	return query;
};

module.exports = buildVehicleQuery;
