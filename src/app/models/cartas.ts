export class Cartas {
    constructor(
        public valor: string,
        public naipe: string,
    
    ){

    }
    
    public get carta(): string {
        return `${this.valor}\\\\${this.naipe}\\\\${this.valor}`;
    }
}
