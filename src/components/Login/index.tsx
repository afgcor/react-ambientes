import styles from "./login.module.css";
/* import { BookOpenText } from "@phosphor-icons/react"; */

export function Login() {
    return (
        <div className={styles.container}>
            <form>
                <p className={styles.titulo}>Login</p>
                <input type="text" placeholder="E-mail" className={styles.input} />
                <input type="password" placeholder="Senha" className={styles.input} />
                <button className={styles.button}>Entrar</button>
                <p className={styles.linkCadastro}><a href="">Cadastre-se</a></p>
            </form>
            {/* <p>Conheça nosso acervo! <BookOpenText size={24} /></p> */}
        </div>
    );
}