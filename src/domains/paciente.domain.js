const Paciente = require("../models/Paciente");

const pacienteDomain = {
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
  getPacientes: () => {
    try {
      const pacientes = Paciente.find();
      return pacientes;
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
      paciente.nombres = data.nombres;
      paciente.apellidos = data.apellidos;
      paciente.genero = data.genero;
      paciente.fechaNacimiento = data.fechaNacimiento;
      paciente.direccion = data.direccion;
      paciente.telefono = data.telefono;
      paciente.correo = data.email;
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
