import getConnection from "../db/database.js"

const getProductos = async (req ,res) => {
  try {
    const connection =  await getConnection();
    const result  = await connection.query("SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado from productos")
    res.json(result);
  } catch (error) {
    console.error("ERROR 500");
  }

}

const updateProductos = async(req, res) => { 
  try {
    const {id} = req.params
    const {ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = (req.body);
    const producto = {
      ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado}
    const connection =  await getConnection();
    const result  = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?",[producto,id] )
    res.json(result)
 
  } catch (error) {
    console.error("ERROR 500");
  }
}

export const methodHTTP = {
    getProductos,
    updateProductos
}