import { Contact } from './contact';

let a = new Contact();

export const CONTACTS: Contact[] = [
    new Contact({
        nome: "Fernando",
        data_de_nascimento: new Date(1992, 7, 4),
        empresa: "Caesb",
        empresa_fonetico: "Caesb",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Brazlandia" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Aguas Claras" }
        ],
        nome_fonetico: "Fernando",
        redes_sociais: [
            {rede: "Facebook", url: "http://www.facebook.com/fferreira12"},
            {rede: "Twitter", url: "http://www.twitter.com/FernandoRodr"}
        ],
        sobrenome: "Ferreira",
        sobrenome_fonetico: "Ferreira",
        telefones: [
            {tipo: "Residencial", numero: "+5561012345678"},
            {tipo: "Trabalho", numero: "+556101234567"}
        ],
        urls: [
            {tipo: "Site Pessoal", url: "http://www.site.com"},
            {tipo: "Site Trabalho", url: "http://www.site2.com"}
        ],
        emails: [
            {tipo: "Pessoal", email: "fernando@gmail.com"},
            {tipo: "Trabalho", email: "fernando@trabalho.com"}
        ]
        
    }),
    new Contact({
        nome: "Lucas",
        data_de_nascimento: new Date(1995, 1, 1),
        empresa: "Ceub",
        empresa_fonetico: "Ceub",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Taguatinga" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Ceilandia" }
        ],
        nome_fonetico: "Lucas",
        redes_sociais: [
            {rede: "Facebook", url: "http://www.facebook.com/luis"},
            {rede: "Twitter", url: "http://www.twitter.com/luis"}
        ],
        sobrenome: "Silva",
        sobrenome_fonetico: "Silva",
        telefones: [
            {tipo: "Residencial", numero: "+5561012345678"},
            {tipo: "Trabalho", numero: "+556101234567"}
        ],
        urls: [
            {tipo: "Site Pessoal", url: "http://www.site.com"},
            {tipo: "Site Trabalho", url: "http://www.site2.com"}
        ],
        emails: [
            {tipo: "Pessoal", email: "Lucas@gmail.com"},
            {tipo: "Trabalho", email: "Lucas@trabalho.com"}
        ]
    }),
    new Contact({
        nome: "Alessandro",
        data_de_nascimento: new Date(1944, 1, 1),
        empresa: "Ceub",
        empresa_fonetico: "Ceub",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Taguatinga" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Ceilandia" }
        ],
        nome_fonetico: "Alessandro",
        redes_sociais: [
            {rede: "Facebook", url: "http://www.facebook.com/Alessandro"},
            {rede: "Twitter", url: "http://www.twitter.com/Alessandro"}
        ],
        sobrenome: "Viadinho",
        sobrenome_fonetico: "Viadinho",
        telefones: [
            {tipo: "Residencial", numero: "+5561012345678"},
            {tipo: "Trabalho", numero: "+556101234567"}
        ],
        urls: [
            {tipo: "Site Pessoal", url: "http://www.site.com"},
            {tipo: "Site Trabalho", url: "http://www.site2.com"}
        ],
        emails: [
            {tipo: "Pessoal", email: "Alessandro@gmail.com"},
            {tipo: "Trabalho", email: "Alessandro@trabalho.com"}
        ]
    })
];