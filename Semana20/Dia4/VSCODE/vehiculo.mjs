export class Vehiculo{

    constructor(tipo,marca)
    {
        this.tipo=tipo;
        this.marca=marca;
    }

    imprimir(){
        console.log(`Es un tipo ${this.tipo} de marca ${this.marca}`);
    }
}     

export class Avion extends Vehiculo{
    constructor(){
        super('Boeing 747','Boeing');
    }
}

export class Burro extends Vehiculo{
    constructor(){
        super('What','Burro');
    }
}