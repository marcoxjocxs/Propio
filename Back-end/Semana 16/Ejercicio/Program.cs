using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercicioSabado
{
    class Program
    {
        static void Main(string[] args)
        {
            funciones funcion = new funciones();
           // Usuarios usuarionew = new Usuarios();
            int opc;
            Console.WriteLine("Bienvenido al sistemas de Usuarios");
            Console.WriteLine("1: Entrar como usuario");
            Console.WriteLine("2: Entrar como invitado");
            Console.WriteLine("3: Salir");
            Console.WriteLine("Ingrese una opc");
            do
            {
                opc = int.Parse(Console.ReadLine());
                int opc2;
                switch (opc)
                {
                    case 1:
                        {
                            bool banderaUsuario = false;
                            bool banderaprivi = false;
                            do
                            { 
                                Console.WriteLine("Bienvenido de vuelta Usuario");
                                string nombre, contrasenia;
                                Console.WriteLine("Ingrese nombre de Usuario");
                                nombre = Console.ReadLine();
                                Console.WriteLine("Ingrese contrasena");
                                contrasenia = Console.ReadLine();
                                banderaUsuario =funcion.Ingresar(nombre,contrasenia);
                                banderaprivi=funcion.privilegios(nombre);
                                if (banderaprivi == true)
                                {
                                    Console.WriteLine("------------------------------------------");
                                    do
                                    {
                                        Console.WriteLine("Bienvenido Al Menu Administrador");
                                        Console.WriteLine("1:Crear nuevo usuario");
                                        Console.WriteLine("2:Cambiar contrasena");
                                        Console.WriteLine("3:Borrar Usuario");
                                        Console.WriteLine("4:Listado de Usuarios");
                                        Console.WriteLine("5:Salir");
                                        opc2 = int.Parse(Console.ReadLine());
                                        switch (opc2)
                                        {
                                            case 1:
                                                {
                                                    Usuarios usuarionew = new Usuarios();
                                                    funcion.crearUsuario(usuarionew);
                                                    break;
                                                }
                                            case 2:
                                                {
                                                    funcion.CambiarContraseña(nombre);
                                                    break;
                                                }
                                            case 3:
                                                {
                                                    funcion.BorrarUsuario();
                                                    break;
                                                }
                                            case 4:
                                                {
                                                    funcion.mostrarUsuarios();
                                                    break;
                                                }
                                        }
                                    } while (opc != 5);
                                }
                                else
                                {
                                    do
                                    {
                                        Console.WriteLine("Bienvenido Al Menu Usuario");
                                        Console.WriteLine("1:Cambiar contrasena");
                                        Console.WriteLine("2:Listado de Usuarios");
                                        Console.WriteLine("3:Salir");
                                        opc2 = int.Parse(Console.ReadLine());
                                    } while (opc != 3);
                                }
                                

                            } while (banderaUsuario!=false);
                            break;
                        }
                    case 2:
                        {
                            break;
                        }
                    case 3:
                        {
                            Console.WriteLine("Gracias por usar el Sistema");
                            break;
                        }
                }

            } while (opc != 3);
        }
    }
}
