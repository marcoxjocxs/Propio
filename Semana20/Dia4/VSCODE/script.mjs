import * as Transportes from './vehiculo.mjs';
const Camioneta = new Transportes.Vehiculo('Camioneta 4x4','Hyundai');
const AvionComercial = new Transportes.Avion();
const BurroSherk = new Transportes.Burro();
Camioneta.imprimir();
AvionComercial.imprimir();
BurroSherk.imprimir();