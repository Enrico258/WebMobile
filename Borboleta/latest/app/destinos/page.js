import Destino from "../components/destino/Destino";
import styles from "./destinos.module.css";

const destinos = [
  {
    id: "forense",
    nome: "Engenharia estrutural forense",
    caminhoImg: "/imagens/forense.jpg",
  },
  {
    id: "construcoes",
    nome: "Novas construções",
    caminhoImg: "/imagens/construcoes.jpg",
  },
  {
    id: "reformas",
    nome: "Reformas",
    caminhoImg: "/imagens/reformas.jpg",
  },
  {
    id: "predios",
    nome: "Prédios comerciais e residenciais",
    caminhoImg: "/imagens/predios.jpg",
  },
];

export default function DestinosPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Serviços</h1>

      <div className={styles.listaDestinos}>
        {destinos.map((destino) => (
          <Destino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}