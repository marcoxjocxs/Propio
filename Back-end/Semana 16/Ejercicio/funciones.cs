using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercicioSabado
{
    class funciones
    {
        Conexion con = new Conexion();
        SqlCommand cmd;

        public bool Ingresar(string nombre,string contrasenia)
        {
            bool bandera = false;
            cmd = new SqlCommand($"SELECT count(*) FROM Usuario where nombre= '{nombre}' and contrasena = '{contrasenia}'",con.GetConexion());
            con.AbrirConexion();
            if (Convert.ToInt32(cmd.ExecuteScalar())!= 0)
            {
                Console.WriteLine($"Bienvenido Usuario '{nombre}'");
                bandera = true;
                con.CerrarConexion();
                return bandera; 
            }
            else
            {
                Console.WriteLine("ERROR NO EXISTE Usuario");
                con.CerrarConexion();
                return bandera;
               
            }
        }
        public bool privilegios(string nombre)
        {
            cmd = new SqlCommand($"SELECT count(*) FROM Usuario where nombre= '{nombre}' and privilegios = '{1}'", con.GetConexion());
            con.AbrirConexion();
            if (Convert.ToInt32(cmd.ExecuteScalar()) != 0)
            {
                Console.WriteLine($"Posee privilegios de Administrador : '{nombre}'");
                return true;
                con.CerrarConexion();
            }
            else
            {
                Console.WriteLine("No Posee privilegios de Administrador");
                return false;
                con.CerrarConexion();
            }
        }
        public void crearUsuario(Usuarios usuario)
        {
            cmd = new SqlCommand
               ($"INSERT INTO USUARIOS (nombre, contrasena,correo,fecha,privilegios) " +
               $"VALUES ('{usuario.Nombre}', '{usuario.Contrasenia}','{usuario.Correo}','{usuario.Fecha}','{usuario.Privilegios}')",
               con.GetConexion()); 
            con.AbrirConexion();  
            cmd.ExecuteNonQuery();  
            con.CerrarConexion();
        }

        public void CambiarContraseña(string nombre,string contrasenia)
        {
            cmd = new SqlCommand
               ($"UPDATE USUARIOS SET contrasena = '{contrasenia}' " +
               $"WHERE NOMBRE = '{nombre}'", con.GetConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        public void BorrarUsuario()
        {
            Console.WriteLine("Ingresar nombre de usuario");
            string nombre = Console.ReadLine();

            cmd = new SqlCommand
               ($"DELETE FROM USUARIOS " +
               $"WHERE NOMBRE = '{nombre}'", con.GetConexion());
            cmd.ExecuteNonQuery();
        }

    }
}
