"use strict"

const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 8080

app.get("/api/products", async (req, res) => {
	const response = await axios.get("https://fakestoreapi.com/products")

	res.status(200).send({ products: response.data })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
