import Productos from './Productos.json'

export default function handler(req, res) {
  res.status(200).json(Productos)
}