const pacienteDomain = require("../domains/paciente.domain");

module.exports = {
  create: async function (req, res) {
    try {
      const item = req.body;
      const itemsaved = await pacienteDomain.createPaciente(item);
      res.status(200).json({
        msg: "Agregado satisfactoriamente",
        id: itemsaved._id,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
  updated: async function (req, res) {
    try {
      const psicologo = req.body;
      const psicologosaved = await pacienteDomain.createPsicologo(
        req.params.id,
        psicologo
      );
      res.status(200).json({
        msg: "Psicologo actualizado satisfactoriamente",
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
      const psicologosaved = await pacienteDomain.deletePsicologo(
        req.params.id
      );
      res.status(200).json({
        msg: "Psicologo eliminado satisfactoriamente",
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
      const lista = await pacienteDomain.getPsicologos();
      res.status(200).json({ items: lista });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
  findById: async function (req, res) {
    try {
      const objeto = await pacienteDomain.getPsicologoById(req.params.id);
      res.status(200).json({ item: objeto });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
};
