const sesionDomain = require("../domains/sesion.domain");

module.exports = {
  create: async function (req, res) {
    try {
      const item = req.body;
      const itemsaved = await sesionDomain.createsesion(item);
      res.status(200).json({
        msg: "Agregado satisfactoriamente",
        id: itemsaved._id,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar" });
    }
  },
  updated: async function (req, res) {
    try {
      const item = req.body;
      const psicologosaved = await sesionDomain.updatesesion(
        req.params.id,
        item
      );
      res.status(200).json({
        msg: "Sesion actualizada satisfactoriamente",
      });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ msg: "Ocurrión un error al actualizar la información" });
    }
  },
  delete: async function (req, res) {
    try {
      const psicologosaved = await sesionDomain.deletesesion(req.params.id);
      res.status(200).json({
        msg: "Sesion eliminada satisfactoriamente",
      });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ msg: "Ocurrión un error al borrar la información" });
    }
  },
  findall: async function (req, res) {
    try {
      const lista = await sesionDomain.getsesions();
      res.status(200).json({ items: lista });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar" });
    }
  },
  findById: async function (req, res) {
    try {
      const objeto = await sesionDomain.getsesionById(req.params.id);
      res.status(200).json({ item: objeto });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar" });
    }
  },
};
