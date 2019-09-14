using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace EjercicioSabado
{
    class Conexion
    {
        SqlConnection con;
        string cadenaConexion = "Data source = .\\SQLEXPRESS; " +
              "Initial catalog = Usuarios1;" +
              "Integrated security = true;";

        public Conexion()
        {
            con = new SqlConnection(cadenaConexion);
        }

        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se abrió la conexión");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo abrir la conexion.");
            }

        }
        public void CerrarConexion()
        {
            try
            {
                con.Close();
                // Console.WriteLine("Se cerró la conexión");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo cerrar la conexión");
            }
        }

        public SqlConnection GetConexion()
        {
            return con;
        }

    }
}
