export interface TecItem {
    title: string;
    description: string;
    image: string;
}

export const items: TecItem[] = [
    {
        title: "Apps Mobile",
        description: "Para empresas que precisam de um app para aparelhos móveis como : celulares e tablets.",
        image: "/app_mobile.svg"
    },
    {
        title: "Apps Web",
        description: "Sistema que executa em páginas web. Podendo ser utilizados em dispositivos mobile ou computador.",
        image: "/app_desktop.svg"
    },
    {
        title: "Gestão Tecnológica",
        description: "Contato direto para trazer previsibilidade , transparência e acompanhamento geral.",
        image: "/app_management.svg"
    }
];