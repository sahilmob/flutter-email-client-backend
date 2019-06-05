const express = require("express");
const cors = require("cors");

const contacts = require("./contacts.json");

const PORT = process.env.PORT || 4000;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Flutter email app");
});

app.get("/contacts", async ({ query }, res) => {
	const { q } = query;
	let response = contacts;

	console.log(`backend hit with: ${q}`);

	if (q) {
		if (q === "le") await delay(2000);

		response = contacts.filter(({ name }) => name.match(q));
	}

	res.json(response);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
