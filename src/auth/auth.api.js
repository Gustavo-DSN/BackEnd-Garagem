const authService = require("./serviceAuth");

const register = async (req, res) => {
	try {
		const user = await authService.register(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email e senha são obrigatórios." });
		}

		const result = await authService.login({ email, password });
		res.status(200).json(result);
	} catch (error) {
		res.status(401).json({ message: error.message });
	}
};

module.exports = { register, login };
