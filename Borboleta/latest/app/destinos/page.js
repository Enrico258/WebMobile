import Image from "next/image";
import styles from "./destinos.module.css";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        forense: {
            nome: 'Engenharia estrutural forense',
            descricao: 'Atuamos na análise técnica de estruturas com foco na identificação de falhas, patologias e causas de danos em edificações, oferecendo diagnósticos precisos e soluções seguras. Utilizamos metodologias modernas de inspeção, ensaios e modelagens para avaliar riscos e propor intervenções eficazes, sempre em conformidade com normas técnicas. Já prestamos serviços para clientes como Condomínio Residencial Jardim das Torres, Indústria Metal Forte e o Centro Empresarial Nova Era, contribuindo para a segurança e a durabilidade das estruturas analisadas.',
            caminhoImg: '/imagens/forense.jpg'
        },
        construcoes: {
            nome: 'Novas contruções',
            descricao: 'Executamos projetos de novas construções com planejamento estratégico, controle rigoroso de qualidade e gestão eficiente de recursos, garantindo obras seguras, funcionais e dentro do prazo. Desde a concepção até a entrega final, nossa equipe acompanha cada etapa com foco em inovação e excelência construtiva. Entre nossos clientes, destacam-se projetos realizados para a Construtora Horizonte Sul, a rede comercial Prime Center e residências personalizadas de médio e alto padrão, sempre entregando resultados que aliam estética, desempenho e valorização do investimento.',
            caminhoImg: '/imagens/construcoes.jpg'
        },
        reformas: {
            nome: 'Reformas',
            descricao: 'Oferecemos serviços completos de reforma, combinando planejamento técnico, execução precisa e acabamento de alto padrão para transformar imóveis residenciais e comerciais com eficiência e segurança. Atuamos desde pequenas modernizações até reestruturações completas, sempre com acompanhamento profissional em todas as etapas, cumprimento de prazos e transparência nos custos. Ao longo dos anos, já atendemos clientes como residências particulares de alto padrão, redes de escritórios corporativos e estabelecimentos comerciais — incluindo projetos realizados para empresas como Clínica Vida+, Escritório Almeida & Souza e a rede de lojas Espaço Urbano — entregando soluções personalizadas que valorizam cada espaço e atendem às necessidades específicas de cada cliente.',
            caminhoImg: '/imagens/reformas.jpg'
        },
        predios: {
            nome: 'Prédios comeciais e residênciais',
            descricao: 'Somos especializados na construção de edifícios residenciais e comerciais, desenvolvendo empreendimentos que atendem às demandas do mercado moderno, com soluções arquitetônicas eficientes e infraestrutura de alta qualidade. Nossos projetos priorizam conforto, segurança, sustentabilidade e valorização imobiliária. Já entregamos obras para clientes como o Edifício Vista Bela, o Complexo Empresarial Tower Business e o Residencial Parque Central, consolidando nossa atuação no desenvolvimento de empreendimentos sólidos e competitivos.',
            caminhoImg: '/imagens/predios.jpg'
        }
    }

    const destino = dadosDestino[params.id];

    return (
        <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image className={styles.imagem} src={destino.caminhoImg} alt={destino.descricao} width={500} height={350}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        </section>
    )
}