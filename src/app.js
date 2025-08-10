require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// Inicialización de la app
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = (process.env.CORS_ORIGIN || "http://localhost:5173").split(
  ","
);

// Conexión a MongoDB
connectDB();

// Middlewares
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(morgan("dev"));

// Rutas de la API (src/routes/index.js debe exportar un Router)
const apiRouter = require("./routes");

// Rutas
app.use("/api", apiRouter); // monta todas las rutas bajo /api
app.get("/", (_req, res) =>
  res.json({
    // raíz informativa
    ok: true,
    service: "PsicoFound API",
  })
);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
