'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../destinos.module.css";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";

export default function DestinoPage() {

    const [modalAberto, setModalAberto] = useState(false);

    // No 'use client', pegamos os params através do hook useParams()
    const params = useParams();
    const id = params?.id;

    const [dadosDestino, setDadosDestino] = useState(null);
    const [loading, setLoading] = useState(true);

    // Chamada para a API local
    useEffect(() => {
        async function carregarDados() {
            try {
                const res = await fetch('/api/destinos');
                if (!res.ok) throw new Error('Erro ao buscar dados');
                const dados = await res.json();
                setDadosDestino(dados);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        carregarDados();
            
    }, [])

    // Enquanto a API não responde
    if (loading) {
        return <div className={styles.loading}>Carregando...</div>;
    }

    // Se carregou e o ID digitado na URL não existe no JSON
    if (!dadosDestino || !dadosDestino[id]) {
        notFound();
    }

    const destino = dadosDestino[id];
    const chaves = Object.keys(dadosDestino);
    const indexAtual = chaves.indexOf(id);

    const anterior = indexAtual === 0
        ? chaves[chaves.length - 1]
        : chaves[indexAtual - 1];

    const proximo = indexAtual === chaves.length - 1
        ? chaves[0]
        : chaves[indexAtual + 1];

    return (
        <>
            <header>
                <section className={styles.container_header}>
                    <Link href="/">
                        <img src="/imagens/logo.png" alt="Logo" />
                    </Link>
                    <nav>

                        
                        <Link href="/#sobre-nos">Sobre nós</Link>
                        <Link href="/projetos">Projetos</Link>
                        <Link href="/destinos/forense">Serviços</Link>
                        <Link
                            href="#"
                            className={styles.btn_box}
                            onClick={(e) => {
                                e.preventDefault();
                                setModalAberto(true);
                            }}
                        >
                            Faça seu orçamento
                        </Link>
                    </nav>
                </section>
            </header>

            <section className={styles.sectionMain}>
                <h2 className={styles.titulo}>{destino.nome}</h2>

                <div className={styles.conteudo_servicos}>
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
                            priority
                        />
                    </div>

                    <section className={styles.texto}>
                        <p className={styles.descricao}>{destino.descricao}</p>
                        <a
                            href="#contato"
                            className={styles.btn_contato}
                            onClick={(e) => {
                                e.preventDefault();
                                setModalAberto(true);
                            }}
                        >
                            Fale conosco
                            <img src="/imagens/Vector.png" alt="Seta" />
                        </a>
                    </section>
                    <Link
                        href={`/destinos/${proximo}`}
                        className={styles.seta}
                    >
                        ❯
                    </Link>
                </div>
            </section>

            <div
                id="modal"
                className={`${styles.modal} ${modalAberto ? styles.ativo : ""}`}
            >
                <div className={styles.modal_content}>
                    <span className={styles.close} onClick={() => setModalAberto(false)}>
                        &times;
                    </span>

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
