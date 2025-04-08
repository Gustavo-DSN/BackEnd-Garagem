const vehicleServices = require("../services/vehicle");
const {
	vehicleSchema,
	vehicleUpdateSchema,
} = require("../validations/vehicleValidation");

const getAllVehiclesInDb = async (req, res) => {
	try {
		const vehicles = await vehicleServices.getAllVehicles();

		console.log(vehicles[0]);

		res.status(200).json({
			vehicles,
		});
	} catch (error) {
		res.status(500).json({
			errorMessage: error,
		});
	}
};

const createVehicle = async (req, res) => {
	try {
		const { error } = vehicleSchema.validate(req.body, {
			abortEarly: false,
		});

		if (error) {
			return res.status(400).json({
				errorMessage: error.details.map((err) => err.message),
			});
		}

		const newVehicle = await vehicleServices.createOneVehicle(req.body);
		res.status(201).json({ message: newVehicle });
	} catch (error) {
		res.status(400).json({ errorMessage: error.message });
	}
};

const searchVehicleByFilters = async (req, res) => {
	try {
		const filters = req.query;

		const veiculo = await vehicleServices.getVehicleByFilter(filters);

		res.status(200).json(veiculo);
	} catch (error) {
		res.status(404).json({ mensagem: error.message });
	}
};

const deleteVehicle = async (req, res) => {
	try {
		const { id } = req.params;

		const message = await vehicleServices.deleteOneVehicleById(id);

		res.status(200).json({
			message: message,
		});
	} catch (error) {
		res.status(404).json({ errorMessage: error.message });
	}
};

const updateOneVehicle = async (req, res) => {
	try {
		const { id } = req.params;

		const { error } = vehicleUpdateSchema.validate(req.body, {
			abortEarly: false,
		});

		if (error) {
			return res.status(400).json({
				errorMessage: error.details.map((err) => err.message),
			});
		}

		const updatedVehicle = await vehicleServices.updateOneVehicleById(
			id,
			req.body
		);

		res.status(200).json({
			message: updatedVehicle,
		});
	} catch (error) {
		res.status(400).json({
			errorMessage: error.message,
		});
	}
};

module.exports = {
	getAllVehiclesInDb,
	createVehicle,
	searchVehicleByFilters,
	deleteVehicle,
	updateOneVehicle,
};
