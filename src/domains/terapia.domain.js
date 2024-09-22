const Terapia = require("../models/Terapia");

const terapiaDomain = {
  // Función para crear un nuevo Terapia
  createTerapia: (data) => {
    try {
      const nuevaTerapia = new Terapia(data);
      nuevaTerapia.save();
      return nuevaTerapia;
    } catch (error) {
      console.error(error);
    }
  },
  getTerapias: () => {
    try {
      const terapias = Terapia.find();
      return terapias;
    } catch (error) {
      console.error(error);
    }
  },
  // Función para obtener un Terapia por su ID
  getTerapiaById: (id) => {
    try {
      const terapia = Terapia.findById(id);
      return terapia;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para actualizar un Terapia
  updateTerapia: (id, data) => {
    try {
      const terapia = Terapia.findById(id);
      terapia.nombres = data.nombres;
      terapia.apellidos = data.apellidos;
      terapia.genero = data.genero;
      terapia.fechaNacimiento = data.fechaNacimiento;
      terapia.direccion = data.direccion;
      terapia.telefono = data.telefono;
      terapia.correo = data.email;

      terapia.save();
      return terapia;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para eliminar un Terapia
  deleteTerapia: (id) => {
    try {
      const terapia = Terapia.findByIdAndDelete(id);
      return terapia;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = terapiaDomain;
