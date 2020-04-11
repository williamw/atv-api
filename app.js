const express = require("express")
const appletv = require("node-appletv")

const app = express()
const port = 5007

const uniqueIdentifier = "DCE4A505-B173-4A33-8DB9-6FF306E0BEEA"
const credentialString = "DCE4A505-B173-4A33-8DB9-6FF306E0BEEA:43393231324143382d303145462d343833332d413844372d363636444335424339314539:63303536636232632d656333622d346632632d396432642d323836653261306338303962:99557cc73f2418e4440810c644e1dc07138ec3382bb4adcc112cf53b8622eb05:887df52eb06c0ae8564480419577ace7e4cb1ffc39ac5392596c6eebc36124ba"

app.get(
	'/menu',
	(req, res) => {
		pressMenu()
	}
)

app.listen(port, () => {
	console.log("Apple TV server running on port " + port)
})

async function startConnection() {
	let credentials = parseCredentials(credentialsString)
	let devices = await scan(uniqueIdentifier)
	let device = devices[0]
	
	await device.openConnection(credentials)
	console.log("Connected to Apple TV")
}

async function pressMenu() {
	await device.sendKeyCommand(AppleTV.Key.Menu)
	console.log("Sent key: MENU")
	res.send("MENU")
}

startConnection()
