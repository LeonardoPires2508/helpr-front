export interface Cliente {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    perfil?: string;
    senha?: string;
    // ? quer dizer que não é obrigatório;
}
