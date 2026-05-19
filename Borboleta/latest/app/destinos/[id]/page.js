import Image from "next/image";
import styles from "../destinos.module.css";
import { notFound } from "next/navigation";
import Destino from "../../components/destino/Destino";
import Link from "next/link";

export default async function DestinoPage({ params }) {

    const { id } = await params;

    const dadosDestino = {
        forense: {
            nome: 'Engenharia estrutural forense',
            descricao: 'Atuamos na análise técnica de estruturas com foco na identificação de falhas, patologias e causas de danos em edificações, oferecendo diagnósticos precisos e soluções seguras. Utilizamos metodologias modernas de inspeção, ensaios e modelagens para avaliar riscos e propor intervenções eficazes, sempre em conformidade com normas técnicas. Já prestamos serviços para clientes como Condomínio Residencial Jardim das Torres, Indústria Metal Forte e o Centro Empresarial Nova Era, contribuindo para a segurança e a durabilidade das estruturas analisadas.',
            caminhoImg: '/imagens/forense.png'
        },
        construcoes: {
            nome: 'Novas contruções',
            descricao: 'Executamos projetos de novas construções com planejamento estratégico, controle rigoroso de qualidade e gestão eficiente de recursos, garantindo obras seguras, funcionais e dentro do prazo. Desde a concepção até a entrega final, nossa equipe acompanha cada etapa com foco em inovação e excelência construtiva. Entre nossos clientes, destacam-se projetos realizados para a Construtora Horizonte Sul, a rede comercial Prime Center e residências personalizadas de médio e alto padrão, sempre entregando resultados que aliam estética, desempenho e valorização do investimento.',
            caminhoImg: '/imagens/construcoes.png'
        },
        reformas: {
            nome: 'Reformas',
            descricao: 'Oferecemos serviços completos de reforma, combinando planejamento técnico, execução precisa e acabamento de alto padrão para transformar imóveis residenciais e comerciais com eficiência e segurança. Atuamos desde pequenas modernizações até reestruturações completas, sempre com acompanhamento profissional em todas as etapas, cumprimento de prazos e transparência nos custos. Ao longo dos anos, já atendemos clientes como residências particulares de alto padrão, redes de escritórios corporativos e estabelecimentos comerciais — incluindo projetos realizados para empresas como Clínica Vida+, Escritório Almeida & Souza e a rede de lojas Espaço Urbano — entregando soluções personalizadas que valorizam cada espaço e atendem às necessidades específicas de cada cliente.',
            caminhoImg: '/imagens/reformas.png'
        },
        predios: {
            nome: 'Prédios comeciais e residênciais',
            descricao: 'Somos especializados na construção de edifícios residenciais e comerciais, desenvolvendo empreendimentos que atendem às demandas do mercado moderno, com soluções arquitetônicas eficientes e infraestrutura de alta qualidade. Nossos projetos priorizam conforto, segurança, sustentabilidade e valorização imobiliária. Já entregamos obras para clientes como o Edifício Vista Bela, o Complexo Empresarial Tower Business e o Residencial Parque Central, consolidando nossa atuação no desenvolvimento de empreendimentos sólidos e competitivos.',
            caminhoImg: '/imagens/predios.png'
        }
    }

    const destino = dadosDestino[id];

    if (!destino) {
        notFound();
    }
    const chaves = Object.keys(dadosDestino);

    const indexAtual = chaves.indexOf(id);

    const anterior =
        indexAtual === 0
            ? chaves[chaves.length - 1]
            : chaves[indexAtual - 1];

    const proximo =
        indexAtual === chaves.length - 1
            ? chaves[0]
            : chaves[indexAtual + 1];

    return (
        <>
            <header>
                <section className={styles.container_header}>
                    <img src="/imagens/logo.png" alt="Logo" />
                    <nav>
                        <Link href="#Serv">Sobre nós</Link>
                        <Link href="">Projetos</Link>
                        <Link href="/destinos/forense">Serviços</Link>
                        <Link href="#" className={`${styles.btn_box} abrirModal`}>
                            Faça seu orçamento
                        </Link>
                    </nav>
                </section>
            </header>
            <section className={styles.sectionMain}>
                <h2 className={styles.titulo}>{destino.nome}</h2>


                <div className={styles.conteudo_servicos}>
                    {/* seta esquerda */}
                    <Link
                        href={`/destinos/${anterior}`}
                        className={styles.seta}
                    >
                        ❮
                    </Link>
                    <div>
                        <Image
                            className={styles.imagem}
                            src={destino.caminhoImg}
                            alt={destino.nome}
                            width={500}
                            height={350}
                        />
                    </div>
                    <section className={styles.texto}>
                        <p className={styles.descricao}>{destino.descricao}</p>
                        <a href="#contato" className={`${styles.btn_contato} abrirModal`}>
                            Fale conosco
                            <img src="/imagens/Vector.png" />
                        </a>
                    </section>
                    {/* seta esquerda */}
                    <Link
                        href={`/destinos/${anterior}`}
                        className={styles.seta}
                    >
                        ❯
                    </Link>
                </div>

            </section>
        </>
    );
}