const path = require("path")

module.exports = {
	entry: "./ToDoApplication/js/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "/ToDoApplication/dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "/ToDoApplication/"),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	}
}