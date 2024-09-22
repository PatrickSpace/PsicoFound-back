const Sesion = require("../models/Sesion");

const sesionDomain = {
  // Función para crear un nuevo sesion
  createsesion: (data) => {
    try {
      const nuevaSesion = new Sesion(data);
      nuevaSesion.save();
      return nuevaSesion;
    } catch (error) {
      console.error(error);
    }
  },
  getsesions: () => {
    try {
      const sesiones = Sesion.find();
      return sesiones;
    } catch (error) {
      console.error(error);
    }
  },
  // Función para obtener un sesion por su ID
  getsesionById: (id) => {
    try {
      const sesion = Sesion.findById(id);
      return sesion;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para actualizar un sesion
  updatesesion: (id, data) => {
    try {
      const sesion = Sesion.findById(id);
      sesion.nombres = data.nombres;
      sesion.apellidos = data.apellidos;
      sesion.genero = data.genero;
      sesion.fechaNacimiento = data.fechaNacimiento;
      sesion.direccion = data.direccion;
      sesion.telefono = data.telefono;
      sesion.correo = data.email;

      sesion.save();
      return sesion;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para eliminar un sesion
  deletesesion: (id) => {
    try {
      const sesion = Sesion.findByIdAndDelete(id);
      return sesion;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = sesionDomain;
