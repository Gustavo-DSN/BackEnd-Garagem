const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

const register = async ({ name, email, password }) => {
	try {
		const userExists = await User.findOne({ email });
		if (userExists) throw new Error("Usuário já existe");

		const hash = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hash });

		return { name: user.name, email: user.email };
	} catch (error) {
		throw new Error(`Erro ao registrar: ${error.message}`);
	}
};

const login = async ({ email, password }) => {
	try {
		const user = await User.findOne({ email });
		if (!user) throw new Error("Usuário não encontrado");

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) throw new Error("Senha incorreta");

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		return {
			token,
			user: { name: user.name, email: user.email },
		};
	} catch (error) {
		throw new Error(`Erro no login: ${error.message}`);
	}
};

module.exports = { register, login };
