export class Contact {
    nome: String;
    nome_fonetico: String;
    sobrenome: String;
    sobrenome_fonetico: String;
    empresa: String;
    empresa_fonetico: String;
    telefones: {tipo: String, numero: String}[];
    urls: {tipo: String, url: String}[];
    enderecos: {tipo: String, endereco: String}[];
    data_de_nascimento: Date;
    redes_sociais: {rede: String; url: String}[];
    emails: {tipo: String, email: String}[];

    public constructor(init?:Partial<Contact>) {
        Object.assign(this, init);
    }

    public search (query: String, obj:any = this): boolean {

        for (var key in obj) {
            var value = this[key];
    
            if (typeof value === 'object') {
                this.search(query, value);
            }
    
            if (value && value.toString && value.toString().indexOf(query) >= 0) {
                return true;
            }
    
        }

        return false;
    
    }
}

