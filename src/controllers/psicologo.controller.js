const psicologoDomain = require("../domains/psicologo.domain");

module.exports = {
  create: async function (req, res) {
    try {
      const psicologo = req.body;
      const psicologosaved = await psicologoDomain.createPsicologo(psicologo);
      res.status(200).json({
        msg: "Psicologo agregado satisfactoriamente",
        id: psicologosaved._id,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
  updated: async function (req, res) {
    try {
      const psicologo = req.body;
      const psicologosaved = await psicologoDomain.createPsicologo(
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
      const psicologosaved = await psicologoDomain.deletePsicologo(
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
      const lista = await psicologoDomain.getPsicologos();
      res.status(200).json({ items: lista });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
  findById: async function (req, res) {
    try {
      const objeto = await psicologoDomain.getPsicologoById(req.params.id);
      res.status(200).json({ item: objeto });
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "Ocurrión un error al buscar psicologos" });
    }
  },
};
