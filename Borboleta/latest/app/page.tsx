"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Destino from "./components/destino/Destino";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { icone: "🏢", texto: "Prédios comerciais e residenciais", url: "predios" },
    { icone: "🏗", texto: "Engenharia Estrutural Forense", url: "forense" },
    { icone: "🏠", texto: "Reformas", url: "reformas"},
    { icone: "📐", texto: "Novas construções", url: "construcoes"}
  ];

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const modal = document.getElementById("modal");
    const botoesAbrir = document.querySelectorAll(".abrirModal");
    const fechar = document.getElementById("fecharModal");

    if (modal) {

      botoesAbrir.forEach(botao => {
        botao.addEventListener("click", function (e) {
          e.preventDefault();
          modal.classList.add(styles.ativo);
        });
      });

      fechar?.addEventListener("click", function () {
        modal.classList.remove(styles.ativo);
      });

      window.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.classList.remove(styles.ativo);
        }
      });
    }
  }, []);

  return (
    <>
      <header>
        <section className={styles.container_header}>
          <img src="imagens/logo.png" alt="Logo" />
          <nav>
            <Link href="#Serv">Sobre nós</Link>
            <Link href="/destinos/forense">Serviços</Link>
            <Link href="#" className={`${styles.btn_box} abrirModal`}>
              Faça seu orçamento
            </Link>
          </nav>
        </section>
      </header>

      <main>

        <section className={styles.banner}>
          <article className={styles.banner_esquerda}>
            <span>Construções, reformas, consultoria e muito mais...</span>
            <a href="#contato" className={`${styles.btn_contato} abrirModal`}>
              Fale conosco
              <img src="imagens/Vector.png" />
            </a>
          </article>

          <article className={styles.banner_direita}>
            <section className={styles.card_banner}>
              <img src="imagens/tabler_brand-unity.png" />
              <p>100% de clientes satisfeitos</p>
            </section>

            <section className={styles.card_banner}>
              <img src="imagens/tabler_brand-office.png" />
              <p>Melhores profissionais</p>
            </section>

            <section className={styles.card_banner}>
              <img src="imagens/tabler_brand-appstore.png" />
              <p>Inovação e criatividade</p>
            </section>
          </article>
        </section>

        <section className={styles.servicos}>

          <h2 className={styles.titulo} id="Serv">Serviços e sobre nós</h2>

          <div id="myCarousel" className={`carousel slide ${styles.mobile_only}`}>
            <div className={styles.carousel_inner}>
              {slides.map((slide, index) => (
                <section
                  key={index}
                  className={`${styles.item} ${index === currentSlide ? styles.active : ""}`}
                >
                  <Link href={"/destinos/" + slide.url}>
                    <section className={styles.card}>
                      <div className={styles.icone}>{slide.icone}</div>
                      <p>{slide.texto}</p>
                    </section>
                  </Link>
                </section>
              ))}
            </div>

            {/* Botões de Controle acionando as funções do React */}
            <a className={styles.carousel_control_left} href="#myCarousel" role="button" onClick={prevSlide}>
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true">❮</span>
              <span className="sr-only">Anterior</span>
            </a>

            <a className={styles.carousel_control_right} href="#myCarousel" role="button" onClick={nextSlide}>
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true">❯</span>
              <span className="sr-only">Próximo</span>
            </a>
          </div>

          <div className={styles.cards_servicos}>
            <Link href="/destinos/forense">
              <section className={styles.card}>
                <div className={styles.icone}>🏗</div>
                <p>Engenharia Estrutural Forense</p>
              </section>
            </Link>

            <Link href="/destinos/reformas">
              <section className={styles.card}>
                <div className={styles.icone}>🏠</div>
                <p>Reformas</p>
              </section>
            </Link>

            <Link href="/destinos/construcoes">
              <section className={styles.card}>
                <div className={styles.icone}>📐</div>
                <p>Novas construções</p>
              </section>
            </Link>


            <Link href="/destinos/predios">
              <section className={styles.card}>
                <div className={styles.icone}>🏢</div>
                <p>Prédios comerciais e residenciais</p>
              </section>
            </Link>
          </div>

          <div className={styles.conteudo_servicos}>
            <section className={styles.texto}>
              <p>
                A Nossa Engenharia é uma construtora comprometida com qualidade, eficiência e confiança em cada
                projeto realizado. Atuamos no mercado oferecendo soluções completas em construção civil, sempre
                priorizando a satisfação dos nossos clientes e o cumprimento rigoroso de prazos.
                Contamos com uma equipe de profissionais qualificados e experientes, preparados para transformar
                ideias em projetos concretos, com segurança, inovação e alto padrão de acabamento.
                Oferecemos uma ampla gama de serviços para atender diferentes necessidades:
                Construção de imóveis residenciais e comerciais,
                Reformas e ampliações,
                Consultoria técnica e planejamento de obras,
                Gerenciamento e acompanhamento de projetos,
                Regularização e adequação de imóveis. Nosso compromisso é entregar resultados que aliam
                qualidade, durabilidade e excelência, garantindo que cada obra seja executada com
                responsabilidade e atenção aos detalhes.
              </p>
            </section>

            <div className={styles.imagem}>
              <img src="imagens/engenheiro.jpeg" />
            </div>
          </div>

        </section>

        <section className={styles.galeria}>
          <h2 className={styles.titulo}>Galeria</h2>

          <div className={styles.gal_imagens}>
            <img src="imagens/Frame 61.png" />
            <img src="imagens/Frame 62.png" />
            <img src="imagens/Frame 63.png" />
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>© 2026 NossaEngenharia. Todos os direitos reservados.</p>
      </footer>

      <div id="modal" className={styles.modal}>
        <div className={styles.modal_content}>
          <span id="fecharModal" className={styles.close}>&times;</span>

          <h2>Solicitar Orçamento</h2>

          <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefone" />
            <textarea placeholder="Descreva seu projeto"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}