using System;

namespace MyPrimerAplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese un nummero a invertir");
            int numero=int.Parse(Console.ReadLine());
            int primernumero,segundonumero;
            int resultado;
            primernumero=numero/10;
            segundonumero=numero%10;
            resultado=segundonumero*10 +primernumero;
            Console.WriteLine($"El numero {numero} invertido es {resultado}");


            /////////////////////////////////////////////////////////////////////////////////////////
            Console.WriteLine("Ingrese cuantos numeros impares apartir del 100 quiere");
            int num=int.Parse(Console.ReadLine());
            int cien=99;
            for(int i=0;i<(num);i++)
            {
                Console.Write($"{num+2} ");
            }
        }
    }
}