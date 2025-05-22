const Vehicle = require("../models/vehicle.models");
const queryBuilder = require("../utils/buildVehicleQuery");

const createOneVehicle = async (data) => {
	try {
		const newVehicle = await Vehicle.create(data);

		return `Novo veiculo salvo com sucesso, ${newVehicle}`;
	} catch (error) {
		throw new Error(
			`Erro ao tentar criar um novo anúncio de veículo. ${error.message}`
		);
	}
};

const getVehicleByFilter = async (filters) => {
	try {
		const query = queryBuilder(filters);
		const vehicle = await Vehicle.find(query);

		return vehicle;
	} catch (error) {
		throw new Error(`Erro ao tentar buscar o veículo. ${error.message}`);
	}
};

const deleteOneVehicleById = async (id) => {
	try {
		if (!id) {
			throw new Error("Id precisa obrigatoriamente ser inserido.");
		}

		const deletedVehicle = await Vehicle.findByIdAndDelete(id);

		if (!deletedVehicle) {
			throw new Error("Veículo não encontrado para deletar.");
		}

		return `Veículo com ID ${id} deletado com sucesso.`;
	} catch (error) {
		throw new Error(`Erro ao tentar deletar um veículo: ${error.message}`);
	}
};

const updateOneVehicleById = async (id, updateData) => {
	try {
		if (!id) {
			throw new Error("Id precisa obrigatoriamente ser inserido.");
		}

		const updatedVehicle = await Vehicle.findByIdAndUpdate(id, updateData, {
			new: true,
		});

		if (!updatedVehicle) {
			throw new Error("Veículo não encontrado para atualizar.");
		}

		return `Veículo com ID ${id} atualizado com sucesso.`;
	} catch (error) {
		throw new Error(`Erro ao tentar atualizar o veículo: ${error.message}`);
	}
};

module.exports = {
	createOneVehicle,
	getVehicleByFilter,
	deleteOneVehicleById,
	updateOneVehicleById,
};
