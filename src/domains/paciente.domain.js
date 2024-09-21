const Paciente = require("../models/Paciente");

const paienteDomain = {
  // Función para crear un nuevo paciente
  createPaciente: (data) => {
    try {
      const nuevoPaciente = new Paciente(data);
      nuevoPaciente.save();
      return nuevoPaciente;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para obtener un paciente por su ID
  getPacienteById: (id) => {
    try {
      const paciente = Paciente.findById(id);
      return paciente;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para actualizar un paciente
  updatePaciente: (id, data) => {
    try {
      const paciente = Paciente.findById(id);
      paciente.nombre = data.nombre;
      paciente.edad = data.edad;
      paciente.genero = data.genero;
      paciente.fechaNacimiento = data.fechaNacimiento;
      paciente.direccion = data.direccion;
      paciente.telefono = data.telefono;
      paciente.email = data.email;
      paciente.antecedentes = data.antecedentes;

      paciente.save();
      return paciente;
    } catch (error) {
      console.error(error);
    }
  },

  // Función para eliminar un paciente
  deletePaciente: (id) => {
    try {
      const paciente = Paciente.findByIdAndDelete(id);
      return paciente;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = pacienteDomain;
