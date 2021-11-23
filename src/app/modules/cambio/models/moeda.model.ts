export class Moeda {
    constructor(
        public moedaID?: number,
        public nome?: string,
        public codISO?: string,
        public cotacao?: number
    ) { }
}