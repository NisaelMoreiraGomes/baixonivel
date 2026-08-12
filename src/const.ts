export interface Link {
    readonly page: string;
    readonly content: string;
    readonly title: string;
    readonly description: string;
    readonly link_description: string;
    readonly thumb?: {
        readonly description: string;
    };
}

export const SITE_CONFIG = {
    name: "BaixoNível",
    url: "https://baixonivel.blog",
    lang: "pt-br"
} as const

export const HOME_PAGE: Link = {
    page: "/",
    content: "BaixoNível",
    title: "BaixoNível Blog",
    description: "A materialização escrita de pensamentos, aprendizados e testes de um curioso qualquer.",
    link_description: "Página inicial do Blog Baixo Nível, um portal para curiosos de hardware e programação em geral.",
    thumb: {
        description: "Thumbnail da Página Inicial do Blog Baixo Nível.",
    }
} as const

export const ORGANIZATIONAL_PAGES: Link[] = [
    {
        page: "/sobre-nos",
        content: "Sobre Nós",
        title: "BaixoNível: Sobre Nós",
        description: "",
        link_description: "Todas as ideias e objetivos por trás do Blog BaixoNível."
    },
    {
        page: "/fale-conosco",
        content: "Fale Conosco",
        title: "BaixoNível: Fale Conosco",
        description: "",
        link_description: "Entre em contato conosco para parcerias, ideias, sugestões, reclamações, dúvidas e muito mais."
    },
    {
        page: "/politica-de-privacidade",
        content: "Política de Privacidade",
        title: "BaixoNível: Política de Privacidade",
        description: "",
        link_description: "Informações sobre os dados coletados ao visitar o Blog BaixoNível e como eles são processados."
    }
] as const