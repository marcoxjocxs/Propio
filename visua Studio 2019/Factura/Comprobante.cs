using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factura
{
    class Comprobante
    {
        protected string fecha;
        protected string direccion;
        protected string codigo;
        protected double montoTotal=0;
        protected List<Producto> productos=new List<Producto>();

        //Producto producto1= new Producto("Papitas Lays",5,10,"Bolsa de Papitas con 85% de aire");
        //Producto producto2 = new Producto("Sprite", 2, 10, "Gaseosa con sabor Limon y muchos gas");
        //Producto producto3 = new Producto("Nike de Vainilla",3, 10, "Galleta Wafer con relleno de vainilla");
        //Producto producto4 = new Producto("Tacos", 14, 10, "Tortila con relleno de carne,pollo,pavo,cerdo, junto con tomate,guacamole,cebolla,sarza,cremas,etc");
        
        public string Fecha { get => fecha; set => fecha = value; }
        public string Direccion { get => direccion; set => direccion = value; }
        public string Codigo { get => codigo; set => codigo = value; }
        public double MontoTotal { get => montoTotal; set => montoTotal = value; }
    }

    class Producto:Comprobante
    {
        public string nombreProducto;
        public double precio;
        public int cantidad;
        public string descripcion;
        public Producto()
        {
            Console.WriteLine("-------------------------Ingreso de DATOS del Producto-----------------------------");
            Console.WriteLine("Ingrese El nombre");
            nombreProducto = Console.ReadLine();
            do { Console.WriteLine("Ingrese el precio por unidad"); precio = int.Parse(Console.ReadLine()); } while (precio <=0);
            do { Console.WriteLine("Ingrese la cantidad"); cantidad = int.Parse(Console.ReadLine()); } while (cantidad <= 0);
            do { Console.WriteLine("Ingrese la Descripcion"); descripcion = Console.ReadLine(); } while (descripcion == "");
            
            Console.WriteLine("-----------------------------------------------------------------------------------");
            Console.WriteLine();
        }
        public void MostrarProducto()
        {
            Console.WriteLine("******************Productos******************");
            Console.WriteLine($"* Nombre       : {nombreProducto}");
            Console.WriteLine($"* Precio/U     : {precio}");
            Console.WriteLine($"* Cantidad     : {cantidad}");
            Console.WriteLine($"* Descripcion  : {descripcion}");
            Console.WriteLine($"* Total        : {precio *cantidad}");
        }

    }
    class Factura : Comprobante
    {
        string razonSocial;
        string ruc;
        string nombreCliente;
        int codigo = 00000;
        Producto producto1;
        public Factura()
        {
            Console.Clear();
            Console.WriteLine("--------------------------------Ingreso de DATOS------------------------------------");
            Console.WriteLine("Ingrese El nombre");
            nombreCliente = Console.ReadLine();
            do { Console.WriteLine("Ingrese el numero de RUC"); ruc = Console.ReadLine(); } while (ruc == "");
            do { Console.WriteLine("Ingrese el numero de razonSocial"); razonSocial = Console.ReadLine(); } while (razonSocial == "");
            do { Console.WriteLine("Ingrese la fecha"); fecha = Console.ReadLine(); } while (fecha == "");
            do { Console.WriteLine("Ingrese la Direccion"); direccion = Console.ReadLine(); } while (ruc == "");
            Console.WriteLine("-----------------------------------------------------------------------------------");
            Console.WriteLine("Ingrese cuantos productos desea colocar");
            int variable = int.Parse(Console.ReadLine());
            for (int i = 0; i < variable; i++)
            {
                producto1 = new Producto();
                montoTotal =montoTotal+ (producto1.cantidad * producto1.precio);
                productos.Add(producto1);
            }
            Console.WriteLine();
        }

        public void MostrarFactura()
        {
            Console.WriteLine("******************FACTURA********************");
            Console.WriteLine($"* Codigo       :    {codigo=+1}                       *");
            Console.WriteLine($"* Nombre       :    {nombreCliente}                   *");
            Console.WriteLine($"* RUC          :    {ruc}                *");
            Console.WriteLine($"* razonSocial  :    {razonSocial}                    *");
            foreach (var item in productos)
            {
                item.MostrarProducto();
            }
            Console.WriteLine("");
            Console.WriteLine($"* Monto Total  :    {montoTotal}                     *");

        }

    }

    class Boleta : Comprobante
    {
        string nombre;
        double precio;
    }
    class NotaDeCredito:Comprobante
    {
        string nombre;
        double precio;
    }
}
