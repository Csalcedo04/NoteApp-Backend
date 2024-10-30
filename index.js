import express from "express";
import cors from "cors";
import { db } from "./Database/dbconection.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

db.connect();

const root = "/noteapp";

app.get(root, async (req, res) => {
  try {
    const result = await db.query(`SELECT id,title, content FROM notes`);
    const datas = result.rows;
    res.status(200).json(datas);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post(root, async (req, res) => {
  const { id, title, content } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO notes (id, title, content) VALUES ($1, $2, $3) RETURNING *`,
      [id, title, content]
    );
    res.status(201).json({
      mensaje: "Usuario creado exitosamente",
      note: result.rows[0],
    });
  } catch (e) {
    //MUST DELETE
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete(`${root}/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Internal server error" });
    }
    res.status(200).json({
      message: "Nota deleted",
      notaEliminada: result.rows[0],
    });
  } catch (error) {
    console.error("Error al eliminar la nota:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
