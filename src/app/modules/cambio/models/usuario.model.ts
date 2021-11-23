export class Usuario {
    constructor(
        public usuarioID?: number,
        public nome?: string,
        public email?: string,
        public senha?: string,
        public sexo?: string,
        public dataCriacao?: Date
    ) { }
}