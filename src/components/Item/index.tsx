import styles from "./item.module.css";
import { User } from "@phosphor-icons/react";

export function Item() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.titulo}>Informações</p>
                <p className={styles.usuario}><User size={28} />[nome do usuário logado]</p>
            </div>
            <div className={styles.containerItem}>
                <div className={styles.capa}>[imagem da capa]</div>
                <div className={styles.dados}>
                    <p className={styles.tituloItem}>[título do item]</p>
                    <p className={styles.autor}>[nome do autor]</p>
                    <div className={styles.dadosAdicionais}>
                        <p>[quantidade de páginas]</p>
                        <p>[edição, editora]</p>
                        <p>[ISBN]</p>
                    </div>
                    <div className={styles.containerGenero}>
                        <p className={styles.genero}>Gênero:</p>
                        <a href="">terror</a> <a href="">ficção científica</a>
                    </div>
                    <div className={styles.containerDescricao}>
                        <p className={styles.descricao}>Sinopse:</p>
                        <p>[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus auctor est ut pretium. Vestibulum varius, enim eget venenatis finibus, nulla purus venenatis augue, eu lacinia nulla est at mauris. Suspendisse euismod rhoncus metus. Etiam hendrerit augue id auctor eleifend. Sed nec justo eget sapien finibus dapibus. Suspendisse ultrices sem non ligula gravida, eu porta magna porta. Nunc sodales lorem nulla, vitae bibendum orci consectetur in. Maecenas porttitor arcu et porta ultrices. Donec tempus dui vitae risus vulputate consequat. Proin sagittis tortor et lectus fermentum congue. Integer molestie vehicula turpis.]</p>
                    </div>
                </div>
            </div>
            <div className={styles.containerExemplares}>
                <p className={styles.exemplares}>Exemplares disponíveis: 0<button className={styles.button}>Reservar</button></p>
            </div>
        </div>
    )
}