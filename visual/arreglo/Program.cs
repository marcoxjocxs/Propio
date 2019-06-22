using System;

namespace Arreglos
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] arreglosEnteros;
            int[] arreglo = { 1, 2, 3, 4, 5 };
            Console.WriteLine(arreglo[4]);
            int[] arre = new int[10];
            Console.WriteLine(arre[5]);
            arre[0] = 10;
            arre[1] = 32332;
            arre[5] = 999;
            //for (int i = 0; i < arre.Length; i++)
            //{
            //    arre[i] = int.Parse(Console.ReadLine());
            //}
            //for (int i = 0; i < arre.Length; i++)
            //{
            //    Console.Write($" {arre[i]},");
            //}
            //foreach es para leer todos valores del arreglo
            //foreach (int item in arre)
            //{
            //    Console.Write(item + " ");
            //    suma = suma + item;
            //}
            //Console.WriteLine($" La suma es de : {suma}");
            //int tam = int.Parse(Console.ReadLine());
            //int[] arreglocontamaño = new int[tam];
            //for(int i = 0; i < arreglocontamaño.Length; i++)
            //{
            //    arreglocontamaño[i] = int.Parse(Console.ReadLine());
            //}
            //foreach(int elemento in arreglocontamaño)
            //{
            //    Console.Write(elemento + " ");
            //}
            //int suma = 0;
            //Console.WriteLine("Ingresa el tamaño ");
            //int tam = int.Parse(Console.ReadLine());
            //int[] ejer = new int[tam];
            //for (int i = 0; i < ejer.Length; i++)
            //{
            //    ejer[i] = int.Parse(Console.ReadLine());

            //}

            //for (int i = 0; i < ejer.Length; i++)
            //{
            //    if (ejer[i] % 2 == 0)
            //    {
            //        Console.Write(ejer[i] + " ");
            //    }
            //}
            int[] ejer = new int[100];

            int cinco = 0, siete = 0, juntos = 0;
            for (int i = 0; i < 100; i++)
            {
                ejer[i] = i + 1;
            }
            foreach (int elemen in ejer)
            {
                if (elemen % 5 == 0)
                    cinco++;
                if (elemen % 7 == 0)
                    siete++;
                if (elemen % 5 == 0 && elemen % 7 == 0)
                    juntos++;
            }
            Console.WriteLine("Son los totales");
            Console.WriteLine($"{cinco}");
            Console.WriteLine($"{siete}");
            Console.WriteLine($"{juntos}");
            int[] arre5 = new int[cinco];
            int[] arre7 = new int[siete];
            int[] arrej = new int[juntos];
            bool bandera = false;

            for (int j = 0; j < arre5.Length; j++)
            {
                bandera = false;
                for (int i = 1; i < 101; i++)
                {
                    if(i%5==0)
                    {
                        arre5[j] = i;
                        bandera = true;
                    }
                    if (bandera)
                    {
                        i = i + 4;
                        continue;
                    }
                        
                    

                }
            }
            Console.WriteLine("El ARREGLO DE LOS MULTIPLOS DE ");
            foreach (int element in arre5)
            {
                Console.Write($"{element}  ");
            }






        }
    }
}
