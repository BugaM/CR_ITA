import styles from "./Elective.module.css"

function Elective(props){
    return (
        <div className={styles.ElectiveContainer}>

            <div className={styles.ElectiveCurrentHours}>
                Créditos atuais em eletivas: {props.horasatuais} 
            </div>

            <div className={styles.ElectiveNeededHours}>
                Créditos necessárias em eletivas: {props.horasnecessarias}
            </div>

        </div>
        )
}

export default Elective