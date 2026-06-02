"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./projetos.module.css"; 
import dynamic from "next/dynamic";

// Importação dinâmica para evitar erro de hidratação
const ImgComparisonSlider = dynamic(
  () => import('@img-comparison-slider/react').then((mod) => mod.ImgComparisonSlider),
  { ssr: false }
);

export default function ProjetosPage() {
  
  const listaDeProjetos = [
    { 
      id: 1, 
      titulo: "Residencial Jardim das Torres", 
      categoria: "Estrutural Forense / Planejamento", 
      descricao: "Análise técnica e desenvolvimento de planta executiva para reforço estrutural.",
      imagemAntes: "/imagens/planta_projeto.jpg", 
      imagemDepois: "/imagens/engenheiro.jpeg", 
      local: "São Paulo, SP",
      area: "3.500 m²",
      prazo: "6 meses",
      tipo: "slider"
    },
    { 
      id: 2, 
      titulo: "Complexo Empresarial Tower Business", 
      categoria: "Prédios Comerciais", 
      descricao: "Construção do zero com arquitetura moderna e foco em sustentabilidade.",
      imagem: "/imagens/predios.png",
      local: "Campinas, SP",
      area: "12.000 m²",
      prazo: "18 meses",
      tipo: "estatico"
    },
    { 
      id: 3, 
      titulo: "Clínica Vida+", 
      categoria: "Reformas de Alto Padrão", 
      descricao: "Reestruturação completa do espaço interno adequando às normas sanitárias.",
      imagem: "/imagens/reformas.png",
      local: "Santos, SP",
      area: "450 m²",
      prazo: "4 meses",
      tipo: "estatico"
    }
  ];

  return (
    <>
      
      <header className={styles.header_projetos}>
        <section className={styles.container_header}>
        
            <img src="/imagens/logo.png" alt="Logo tua engenharia" className={styles.logo_header} />
        
            <nav className={styles.nav_projetos}>
                <Link href="/#sobre-nos">Sobre nós</Link>
                <Link href="/projetos">Projetos</Link>
                <Link href="/destinos/forense">Serviços</Link>
                <Link href="#" className={styles.btn_box}>
                Faça seu orçamento
                </Link>
            </nav>
        </section>
    </header>
      <section className={styles.projetos_heroi}>
        <div className={styles.heroi_overlay}>
          <div className={styles.heroi_conteudo}>
            <h1 className={styles.titulo_heroi}>
              Nossos <span className={styles.destaque}>Projetos</span>
            </h1>
            <p className={styles.subtitulo_heroi}>
              Conheça como transformamos desafios técnicos em soluções de engenharia e arquitetura.
            </p>
          </div>
        </div>
      </section>

      <main className={styles.projetos_main}>
        <div className={styles.grid_projetos}>
          {listaDeProjetos.map((projeto) => (
            <div key={projeto.id} className={styles.card_projeto}>
              
              {projeto.tipo === "slider" ? (
                <div className={styles.imagem_container_slider}>
                  <ImgComparisonSlider hover="true" class={styles.slider_customizado}>
                    <img slot="first" src={projeto.imagemAntes} alt="Antes: Planta de Arquitetura" className={styles.imagem_obra_slider} />
                    <img slot="second" src={projeto.imagemDepois} alt="Depois: Execução em Obra" className={styles.imagem_obra_slider} />
                  </ImgComparisonSlider>
                  <span className={styles.badge_interativo}>Arraste: Planta vs Obra</span>
                </div>
              ) : (
                <div className={styles.imagem_container}>
                   <Image 
                      src={projeto.imagem} 
                      alt={`Foto da obra do projeto ${projeto.titulo}`} 
                      fill
                      className={styles.imagem_obra}
                   />
                </div>
              )}
              
              <div className={styles.conteudo_card}>
                <span className={styles.local_badge}>{projeto.local}</span>
                <span className={styles.categoria}>{projeto.categoria}</span>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                
                <div className={styles.ficha_tecnica}>
                  <div>
                    <span>Área</span>
                    <strong>{projeto.area}</strong>
                  </div>
                  <div>
                    <span>Prazo</span>
                    <strong>{projeto.prazo}</strong>
                  </div>
                </div>
                
                <Link href="#" className={styles.btn_detalhes}>
                    Ver Detalhes Técnicos →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}