import ApiUsuarios from "../service/usuarios.js";

class ControladorData {
  constructor() {
    this.apiUsuarios = new ApiUsuarios();
  }

  validarAdmin = async (req, res) => {
    const usuario = req.body;
    res.json(await this.apiUsuarios.validarAdm(usuario));
  };

  validarUsuario = async (req, res) => {
    const usuario = req.body;
    res.json(await this.apiUsuarios.validarUsuario(usuario));
  };

  getPeliculas = async (req, res) => {
    const { id } = req.params;
    res.json(await this.apiUsuarios.obtenerPeliculas(id));
  };

  getNomb = async (req, res) => {
    const { nombre } = req.params;
    res.json(await this.apiUsuarios.obtenerPorNombre(nombre));
  };

  getMenores = async (req, res) => {
    res.json(await this.apiUsuarios.obtenerMenores());
  };

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

  comprarPelicula = async (req, res) => {
    // const {id} = req.params
    // const peliculas = req.body

    const { _id } = req.body;
    const peliculas = req.body;

    res.json(await this.apiUsuarios.agregarPelicula(_id, peliculas));
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

  updateUsuario = async (req, res) => {
    const data = req.body;
    const {_id} = req.body;

    res.json(await this.apiUsuarios.editarUsuario(data, _id));
  };
}

export default ControladorData;
