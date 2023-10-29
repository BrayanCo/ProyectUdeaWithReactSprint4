// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const server = express();
// const PORT = 3000;

// server.use(express.json()); 

// server.get("/", (req, res) =>{
//     res.send("./logup")
// });


// server.post("/file", (req, res) =>{
//     fs.writeFile(req.body.)
// });

// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // Puedes usar el puerto que desees

app.use(bodyParser.json());

// Manejar la solicitud POST
app.post('/logup', (req, res) => {
  const data = req.body; // Los datos del formulario se encuentran en req.body
  // Realiza la lógica de registro aquí y, si es exitosa, envía una respuesta adecuada
  // Por ejemplo, puedes guardar los datos en una base de datos
  // y enviar una respuesta de éxito
  console.log('Datos recibidos:', data);
  res.json({ message: 'Registro exitoso' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
