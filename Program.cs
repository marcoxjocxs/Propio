using System;

namespace MyPrimerAplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            // int,string,float ,double,bool,decimal, char
            string nombre;
            Console.WriteLine("Ingresa tu nombre");
            nombre = Console.ReadLine();
            //Formas de imprimir por consola
            Console.WriteLine($"Hello ,What's up {nombre} !");
            Console.WriteLine("Hello ,What's up "+ nombre + "!");
            Console.WriteLine("Hello {0} !", nombre);
            Console.WriteLine("Ingrese Su edad");
            int x = int.Parse(Console.ReadLine());
            // char c = char.Parse(Console.ReadLine());
            // float f = float.Parse(Console.ReadLine());
            // \n  es salto de linea
            Console.Write("Texto\n");
            //Tabulacion
            Console.Write("Mas\tTexto");
            if(x>17)
            {
                Console.WriteLine($"Tienes {x} años , eres mayor .");
            }
            else
            {
                Console.WriteLine($"Tienes {x} años, eres un niño");
            }
            */

            //////////Ejercicio///////////////////////
            /*
            int num;
            Console.WriteLine("Ingrese un numero de 3 valores");
            num= int.Parse(Console.ReadLine());
            if((num >99 && num<1000) || (num<-99 && num>-1000))
            {
                Console.WriteLine("Es de tres cifras");
            }
            else
            {
                Console.WriteLine("No es de tres cifras");
            }*/
            /////////////Ejercicio2///////////////////
            /*
            Console.WriteLine("Ingrese 1 =Ripley ,2=Saga , 3=BCP Y SINO CUALQUIER OTRA");
            int tarjeta = int.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese Monto");
            float monto = float.Parse(Console.ReadLine());
            switch (tarjeta)
            {
                case 1:
                    {
                        Console.WriteLine("Esta pagando con Ripley tiene un 15%");
                        monto = monto -((monto*15)/100);
                        break;
                    }
                case 2:
                    {
                        Console.WriteLine("Esta pagando con Saga tiene un 20%");
                        monto = monto -( (monto * 20) / 100);
                        break;
                    }
                case 3:
                    {
                        Console.WriteLine("Esta pagando con BCP tiene 10 soles gratis ");
                        monto =monto-10;
                        break;
                    }
                default:
                    {
                        Console.WriteLine("No tiene tarjeta no se aplica descuento");
                    
                        break;
                    }
            }
            Console.WriteLine($"Monto a pagar es de {monto}");
            */
            /*
            Console.WriteLine("Calculadora");
            int num1 = int.Parse(Console.ReadLine());
            char signo = char.Parse(Console.ReadLine());
            int num2 = int.Parse(Console.ReadLine()); 
            int total=0;
            switch (signo)
            {
                case '+':
                    {
                        total = num1 + num2;
                        break;
                    }
                case '-':
                    {
                        total = num1 - num2;
                        break;
                    }
                case '*':
                    {
                        total = num1 * num2;
                        break;
                    }
                case '/':
                    {
                        if(num2 ==0)
                        {
                            Console.WriteLine("No se puede realizar una division entre 0");
                            
                        }
                        else
                        {
                            total = num1 / num2;
                        }
                        break;
                    }
                case '%':
                    {
                        total = num1 % num2;
                        break;
                    }
                default:
                    {
                        Console.WriteLine("NNo es un signo perrrrrrooooooo");
                        break;
                    }
            }
            Console.WriteLine($"{num1} {signo} {num2} = {total}");
            */
            /*
            Console.WriteLine("Numeros Impares");
            for(int i=1;i<40;i=i+2)
            {
                Console.Write($"{i},");
            }
            */
            Console.WriteLine("Numeros Impares");
            int cant = int.Parse(Console.ReadLine());
            int total = 0;
            int cont = 0;
            for (int i = 1; i < 999; i++)
            {
                
                if (i %3 == 0)
                {
                    total = total + i;
                    cont++;
                }
                if(cont == cant)
                {
                    break;
                }
            }
            Console.Write($"Total es : {total}");
        }

    }
}