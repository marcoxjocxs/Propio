using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
           for(int i = 1; i <= 10; i++)
            {
                for(int j=1;j<=10;j++)
                {
                    Console.Write($"{i * j}\t");
                }
                Console.WriteLine();
            }
            */
            /*
            Console.WriteLine("Ingrese tamaño de la matriz");
            int cant = int.Parse(Console.ReadLine());
            Console.WriteLine("Matriz");
            for (int i = 1; i <= cant; i++)
            {
                for (int j = 1; j <= cant; j++)
                {
                    if(i==j)
                    { Console.Write("1 ");
                        continue;
                    }
                    Console.Write("0 ");
                    
                }
                Console.WriteLine();
            }
            */
            Console.WriteLine("Ingrese tamaño de la matriz");
            int cant = int.Parse(Console.ReadLine());
            int n = 1;
            bool creciente = true;
            int columnas, filas;
            int altura = (cant * 2) - 1;
            Console.WriteLine("Matriz");
            for (filas = 1; filas <= altura; filas++)
            {
                for (columnas = 1; columnas <= n; j++)
                {
                    Console.Write($"{columnas} ");
                }
                if (cant == n)
                    creciente = false;
                if (creciente)
                    n++;
                else
                    n--;
                Console.WriteLine();

            }
            //////////////////////
            /*
            int num23 = int.Parse(Console.ReadLine());
            int resultado = 1;
            for(i = 1; i <= num; i++)
            {
                resultado = resultado * i;
            }
            */
        }
    }
}
