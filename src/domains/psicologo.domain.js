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
  getPsicologos: () => {
    try {
      const psicologos = Psicologo.find();
      return psicologos;
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
      psicologo.nombres = data.nombres;
      psicologo.apellidos = data.apellidos;
      psicologo.genero = data.genero;
      psicologo.fechaNacimiento = data.fechaNacimiento;
      psicologo.direccion = data.direccion;
      psicologo.telefono = data.telefono;
      psicologo.correo = data.email;

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
