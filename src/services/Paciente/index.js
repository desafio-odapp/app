import api from '../api';


export default class PacienteService {
  static async getAll() {
    const { data } = await api.get('/api/pacientes');

    return data;
  }
}
