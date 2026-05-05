import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {

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
            <a href="#Serv">Sobre nós</a>
            <a href="">Projetos</a>
            <a href="">Serviços</a>
            <a href="#" className={`${styles.btn_box} abrirModal`}>
              Faça seu orçamento
            </a>
          </nav>
        </section>
      </header>

      <main>

        <section className={styles.banner_esquerda}>
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

          <h2 className="titulo" id="Serv">Serviços e sobre nós</h2>

          {/* Bootstrap mantém className normal */}
          <div id="myCarousel" className="carousel slide mobile-only" data-ride="carousel">

            <div className="carousel-inner">
              <section className="item active">
                <section className={styles.card}>
                  <div className={styles.icone}>🏢</div>
                  <p>Prédios comerciais e residenciais</p>
                </section>
              </section>

              <section className="item">
                <section className={styles.card}>
                  <div className={styles.icone}>🏗</div>
                  <p>Engenharia Estrutural Forense</p>
                </section>
              </section>

              <section className="item">
                <section className={styles.card}>
                  <div className={styles.icone}>📐</div>
                  <p>Novas construções</p>
                </section>
              </section>
            </div>
          </div>

          <div className={styles.cards_servicos}>
            <section className={styles.card}>
              <div className={styles.icone}>🏗</div>
              <p>Engenharia Estrutural Forense</p>
            </section>

            <section className={styles.card}>
              <div className={styles.icone}>🏠</div>
              <p>Reformas</p>
            </section>

            <section className={styles.card}>
              <div className={styles.icone}>📐</div>
              <p>Novas construções</p>
            </section>

            <section className={styles.card}>
              <div className={styles.icone}>🏢</div>
              <p>Prédios comerciais e residenciais</p>
            </section>
          </div>

          <div className={styles.conteudo_servicos}>
            <section className={styles.texto}>
              <p>
                A Nossa Engenharia é uma construtora comprometida...
              </p>
            </section>

            <div className={styles.imagem}>
              <img src="imagens/engenheiro.jpeg" />
            </div>
          </div>

        </section>

        <section className={styles.galeria}>
          <h2 className="titulo">Galeria</h2>

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