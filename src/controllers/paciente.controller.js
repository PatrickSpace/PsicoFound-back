function errormsg(res, msg) {
  const msg = res.status;
  (400).json({ message: msg });
}
function okmsg(res, msg) {
  const msg = res.status;
  (200).json({ message: msg });
}
function okreturnobj(res, obj) {
  const msg = res.status;
  (200).json({ message: msg });
}

const pacienteController = {
  findAll: function (req, res) {
    res.send("Lista de pacientes");
  },
};
