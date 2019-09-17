var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("holi " + texto);
        };
        target.prototype.anio = new Date().getFullYear();
    };
}
var Promocion = /** @class */ (function () {
    function Promocion(integrantes, nombre) {
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    //saludar()
    //{
    //  
    //}
    Promocion.prototype.imprimirIntegrantes = function () {
        this.integrantes.forEach(function (integrante) {
            console.log(integrante);
        });
    };
    Promocion = __decorate([
        decorador("Como estan :D")
    ], Promocion);
    return Promocion;
}());
var codigo6 = new Promocion(["Marco", "Lia", "Luca", "Nicole", "Willy", "Jannet", "Sofia"], "TheTeamRetard");
codigo6.saludar();
console.log(codigo6.anio);
codigo6.imprimirIntegrantes();
