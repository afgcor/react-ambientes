import styles from "./cadastro.module.css";

export function Cadastro() {
    return (
        <div className={styles.container}>
            <p className={styles.titulo}>Cadastro</p>
            <div className={styles.containerFormulario}>
            <form>
                <div className={styles.info}>
                    <p>Nome:</p>
                    <input type="text" placeholder="Nome" className={styles.input} />
                </div>
                <div className={styles.info}>
                    <p>E-mail:</p>
                    <input type="email" placeholder="E-mail" className={styles.input} />
                </div>
                <div className={styles.info}>
                    <p>Data de nascimento:</p>
                    <input type="date" placeholder="DD/MM/AAAA" className={styles.input} />
                </div>
                <div className={styles.info}>
                    <p>Confirme seu e-mail:</p>
                    <input type="email" placeholder="Confirme seu e-mail:" className={styles.input} />
                </div>
                <div className={styles.info}>
                    <p>CPF:</p>
                    <input type="text" placeholder="CPF" className={styles.input} />
                </div>
                <div className={styles.info}>
                    <p>Senha:</p>
                    <input type="password" placeholder="Senha" className={styles.input} />
                </div>
                <button className={styles.button}>Finalizar cadastro</button>
            </form>
            </div>
        </div>
    )
}