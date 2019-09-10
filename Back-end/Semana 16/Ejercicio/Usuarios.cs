using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercicioSabado
{
    class Usuarios
    {
        string nombre;
        string contrasenia;
        string correo;
        DateTime fecha;
        bool privilegios;
        
        public Usuarios()
        {
            Console.WriteLine("Ingrese Nombre del Usuario");
            nombre = Console.ReadLine();
            Console.WriteLine("Ingrese la contrasena");
            contrasenia = Console.ReadLine(); ;
            Console.WriteLine("Ingrese su correo Electronico");
            correo = Console.ReadLine(); ;
            Console.WriteLine("Ingrese su fecha de nacimiento");
            fecha = DateTime.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese 1 si tiene privilegios y 0 si no");
            privilegios = bool.Parse(Console.ReadLine());      
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public string Contrasenia { get => contrasenia; set => contrasenia = value; }
        public string Correo { get => correo; set => correo = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
        public bool Privilegios { get => privilegios; set => privilegios = value; }
    }
}
