using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factura
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Factura> listaFacturas = new List<Factura>();
            int opc;
            do
            {
                
                Console.WriteLine("Bienvenido al sistema de Facturacion");
                Console.WriteLine("Ingrese una de las siguientes Opciones");
                Console.WriteLine("1:Agregar Comprobante");
                Console.WriteLine("2:Reportes");
                Console.WriteLine("3:Salir");
                Console.WriteLine("ingresa una opcion Perrroooo");
                opc = int.Parse(Console.ReadLine());
                int opc2;
                switch (opc)
                {
                    case 1:
                        {
                            do
                            {
                                Console.WriteLine("Bienvenido al menu de AGREGAR COMPROBANTE");
                                Console.WriteLine("ingrese una de las opciones");
                                Console.WriteLine("1:Agregar Factura");
                                Console.WriteLine("2:Agregar Boleta");
                                Console.WriteLine("3:Agregar Nota de Credito");
                                Console.WriteLine("4:Atras");
                                opc2 = int.Parse(Console.ReadLine());
                                switch (opc2)
                                {
                                    case 1:
                                        {     
                                            Factura miFactura= new Factura();
                                            listaFacturas.Add(miFactura);
                                            miFactura.MostrarFactura();
                                            break;
                                        }
                                    case 2:
                                        {
                                            break;
                                        }
                                }
                            } while (opc2<1 && opc>3);
                            break;
                        }
                    case 2:
                        {
                            do
                            {
                                Console.WriteLine("Bienvenido al menu de Reportes");
                                Console.WriteLine("ingrese una de las opciones");
                                Console.WriteLine("1:Reporte Factura");
                                Console.WriteLine("2:Reporte Boleta");
                                Console.WriteLine("3:Reporte Nota de Credito");
                                Console.WriteLine("4:Atras");
                                opc2 = int.Parse(Console.ReadLine());
                                switch (opc2)
                                {
                                    case 1:
                                        {
                                           
                                            break;
                                        }
                                }
                            } while (opc2 < 1 || opc2 > 4);
                            break;
                     
                        }
                }
            } while (opc!=3);
        }
    }
}
