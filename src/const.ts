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
  lang: "pt-br",
} as const;

export const HOME_PAGE: Link = {
  page: "/",
  content: "BaixoNível",
  title: "BaixoNível Blog",
  description:
    "A materialização escrita de pensamentos, aprendizados e testes de um curioso qualquer sobre os mais variados assuntos de baixo e alto nível. C, C++, ESP32, Arduino, Javascript, Godot, Flutter e muito mais, em um único lugar.",
  link_description:
    "Página inicial do Blog Baixo Nível, um portal para curiosos de hardware e programação em geral.",
  thumb: {
    description: "Thumbnail da Página Inicial do Blog Baixo Nível.",
  },
} as const;

export const ORGANIZATIONAL_PAGES: Link[] = [
  {
    page: "/sobre-nos",
    content: "Sobre Nós",
    title: "BaixoNível: Sobre Nós",
    description:
      "As aspirações de um sonhador e a trajetória para a criação do Blog BaixoNível, um espaço para compartilhar as mais variadas ideias sobre tecnologia de baixo e alto nível.",
    link_description:
      "Todas as ideias e objetivos por trás do Blog BaixoNível.",
  },
  {
    page: "/fale-conosco",
    content: "Fale Conosco",
    title: "BaixoNível: Fale Conosco",
    description:
      "A página de contato do Blog BaixoNível fornece um e-mail ou formulário para contato, visando parcerias, esclarecer dúvidas, obter sugestões, reclamações e elogios.",
    link_description:
      "Entre em contato conosco para parcerias, ideias, sugestões, reclamações, dúvidas e muito mais.",
  },
  {
    page: "/politica-de-privacidade",
    content: "Política de Privacidade",
    title: "BaixoNível: Política de Privacidade",
    description:
      "A política de privacidade do Blog BaixoNível visa esclarecer como os dados pessoais dos visitantes são processados pelo site e por serviços de terceiros.",
    link_description:
      "Informações sobre os dados coletados ao visitar o Blog BaixoNível e como eles são processados.",
  },
] as const;
