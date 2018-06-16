export class Contact {
    id: number;
    nome: String;
    nome_fonetico: String;
    sobrenome: String;
    sobrenome_fonetico: String;
    empresa: String;
    empresa_fonetico: String;
    telefones: { tipo: String, numero: String }[];
    urls: { tipo: String, url: String }[];
    enderecos: { tipo: String, endereco: String }[];
    data_de_nascimento: Date;
    redes_sociais: { rede: String; url: String }[];
    emails: { tipo: String, email: String }[];

    public constructor(init?: Partial<Contact>) {
        Object.assign(this, init);
    }

    public search(query: String, obj: any = this): boolean {

        for (var key in obj) {
            var value = obj[key];

            if (value instanceof Date) {
                value = value.toString();
            }

            if (typeof value === 'object' || value instanceof Array) {
                return this.search(query, value);
            }

            if (value && value.toString && value.toString().toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true;
            }

        }

        return false;

    }
}

