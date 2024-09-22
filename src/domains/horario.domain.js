const Horario = require("../models/Horario");

const HorarioDomain = {
  // Función para crear un nuevo Horario
  createHorario: (data) => {
    try {
      const nuevaHorario = new Horario(data);
      nuevaHorario.save();
      return nuevaHorario;
    } catch (error) {
      console.error(error);
    }
  },
  getHorarios: () => {
    try {
      const Horarios = Horario.find();
      return Horarios;
    } catch (error) {
      console.error(error);
    }
  },
  // Función para obtener un Horario por su ID
  getHorarioById: (id) => {
    try {
      const horario = Horario.findById(id);
      return horario;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para actualizar un Horario
  updateHorario: (id, data) => {
    try {
      const horario = Horario.findById(id);
      horario.nombres = data.nombres;
      horario.apellidos = data.apellidos;
      horario.genero = data.genero;
      horario.fechaNacimiento = data.fechaNacimiento;
      horario.direccion = data.direccion;
      horario.telefono = data.telefono;
      horario.correo = data.email;

      horario.save();
      return horario;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para eliminar un Horario
  deleteHorario: (id) => {
    try {
      const horario = Horario.findByIdAndDelete(id);
      return horario;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = HorarioDomain;
