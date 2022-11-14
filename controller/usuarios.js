import ApiUsuarios from "../service/usuarios.js";

class ControladorData {
  constructor() {
    this.apiUsuarios = new ApiUsuarios();
  }

  getMayores = async (req, res) => {
    res.json(await this.apiUsuarios.obtenerMayores());
  };

  getMejor = async (req, res) => {
    res.json(await this.apiUsuarios.obtenerMejor());
  };

  getData = async (req, res) => {
    const { id } = req.params;
    res.json(await this.apiUsuarios.obtenerUsuarios(id));
  };

  saveData = async (req, res) => {
    const data = req.body;
    res.json(await this.apiUsuarios.guardarUsuario(data));
    //res.redirect('/')
  };

  updateData = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    res.json(await this.apiUsuarios.actualizarUsuario(data, id));
  };

  deleteData = async (req, res) => {
    const { id } = req.params;

    res.json(await this.apiUsuarios.eliminarUsuario(id));
  };
}

export default ControladorData;
