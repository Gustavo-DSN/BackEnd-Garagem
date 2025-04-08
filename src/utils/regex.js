const buildRegex = (value) => {
	if (!value) return undefined;

	return { $regex: value, $options: "i" }; //
};

module.exports = buildRegex;
