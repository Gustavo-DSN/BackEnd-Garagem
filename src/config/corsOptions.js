const allowedOrigins = ["http://localhost:5173", undefined];

const corsOptions = {
	origin: function (origin, callback) {
		if (allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

module.exports = corsOptions;
