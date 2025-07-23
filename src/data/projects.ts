export interface ProjectData {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    images: string[];
    imageLabels: string[];
    type: 'Mobile' | 'Web' | 'Desktop';
}

export const projectsData: ProjectData[] = [
    {
        title: "ZPonto",
        subtitle: "Controle de Ponto e Gestão de Colaboradores na Palma da Mão",
        description: "O app permite ao colaborador registrar entrada, intervalo e saída, com acesso ao histórico diário e espelho de ponto. Envia lembretes nos horários definidos e 5 minutos depois, evitando esquecimentos. Também facilita o envio de documentos atualizados, que podem ser avaliados pela empresa diretamente pelo sistema.",
        features: ["Geolocalização", "Foto", "Espelho de ponto", "Gestão de Documentos", "Lembretes de Ponto"],
        images: ["/zponto/clock-in-2.PNG", "/zponto/dashboard-2.PNG", "/zponto/profile-management-2.PNG"],
        imageLabels: ["Clock In", "Dashboard", "Document Management"],
        type: "Mobile"
    },
    {
        title: "ERP",
        subtitle: "Gestão Completa da Jornada de Trabalho",
        description: "Integrado ao ZPonto, este sistema foi desenvolvido para capturar, tratar e armazenar dados da jornada de trabalho e da documentação dos colaboradores de forma segura e eficiente. Indicado para empresas de todos os portes e também para pessoas físicas, contribui diretamente para a redução de riscos trabalhistas, oferecendo um controle preciso de ponto e centralização das informações do colaborador em um único lugar.",
        features: ["Gestão de ponto", "Gestão de colaboradores", "Gestão de documentos"],
        images: ["/erp-zellar/report-documents.jpg", "/erp-zellar/report.jpg", "/erp-zellar/stakeholder.jpg"],
        imageLabels: ["Report Documents", "Report", "Stakeholder Section"],
        type: "Web"
    },
    {
        title: "Workbetter",
        subtitle: "Gestão de Orçamentos, Clientes e Pagamentos",
        description: "Este sistema centraliza o controle de orçamentos, clientes, serviços, colaboradores e ordens de pagamento. Inclui fechamento de folha e envio de e-mails com PDFs no layout da empresa, garantindo agilidade e comunicação profissional. Projetado sob medida para o mercado norte-americano, une automação, escalabilidade e eficiência.",
        features: ["Gestão de orçamentos", "Gestão de clientes", "Gestão de pagamentos", "Gestão de colaboradores", "Gestão de serviços", "Fechamento de folha"],
        images: ["/workbetter/dashboard.png", "/workbetter/estimates.png", "/workbetter/payroll.png"],
        imageLabels: ["Dashboard", "Estimates", "Payroll"],
        type: "Web"
    }
];

export const sectionConfig = {
    title: "Projetos Realizados",
    description: "Confira alguns dos projetos que já desenvolvemos com foco em eficiência, inovação e resultados reais.",
    callToAction: {
        text: "Interessado em desenvolver algo similar?",
        buttonText: "Entre em Contato"
    }
}; 