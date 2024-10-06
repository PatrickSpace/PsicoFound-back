const horarioDomain = require("../domains/horario.domain");

module.exports = {
  create: async function (req, res) {
    try {
      const item = req.body;
      const itemsaved = await horarioDomain.createHorario(item);
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
      const psicologosaved = await horarioDomain.updateHorario(
        req.params.id,
        item
      );
      res.status(200).json({
        msg: "Horario actualizado satisfactoriamente",
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
      const psicologosaved = await horarioDomain.deleteHorario(req.params.id);
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
      const lista = await horarioDomain.getHorarios();
      res.status(200).json({ items: lista });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar" });
    }
  },
  findById: async function (req, res) {
    try {
      const objeto = await horarioDomain.getHorarioById(req.params.id);
      res.status(200).json({ item: objeto });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar" });
    }
  },
};
