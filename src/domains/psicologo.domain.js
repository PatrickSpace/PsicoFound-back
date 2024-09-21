const Psicologo = require("../models/Psicologo");

const psicologoDomain = {
  // Función para crear un nuevo psicologo
  createPsicologo: (data) => {
    try {
      const nuevoPsicologo = new Psicologo(data);
      nuevoPsicologo.save();
      return nuevoPsicologo;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para obtener un psicologo por su ID
  getPsicologoById: (id) => {
    try {
      const psicologo = Psicologo.findById(id);
      return psicologo;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para actualizar un psicologo
  updatePsicologo: (id, data) => {
    try {
      const psicologo = Psicologo.findById(id);
      psicologo.nombre = data.nombre;
      psicologo.especialidad = data.especialidad;
      psicologo.edad = data.edad;
      psicologo.enfoque = data.enfoque;
      psicologo.color = data.color;

      psicologo.save();
      return psicologo;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para eliminar un psicologo
  deletePsicologo: (id) => {
    try {
      const psicologo = Psicologo.findByIdAndDelete(id);
      return psicologo;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = psicologoDomain;
