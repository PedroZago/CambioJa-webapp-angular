export class Cambio {
    constructor(
        public cambioID?: number,
        public dataCambio?: Date,
        public valorOrigem?: number,
        public valorFinal?: number,
        public usuarioID?: number,
        public usuarioNome?: string,
        public moedaID?: number,
        public moedaNome?: string,
        public saldoMoeda?: number
    ) { }
}