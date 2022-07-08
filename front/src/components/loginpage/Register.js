import styles from "./BasicInfos.module.css"

function BasicInfos(props){
    return (
        <div className={styles.BasicInfosContainer}>

            <div className={styles.BasicInfosName}>
                Nome: {props.nome} 
            </div>

            <div className={styles.BasicInfosEng}>
                Curso: {props.curso}
            </div>

            <div className={styles.BasicInfosPDF}>
                Boletim: {props.pdf}
            </div>

        </div>
        )
}

export default BasicInfos