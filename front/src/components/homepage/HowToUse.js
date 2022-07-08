import styles from "./HowToUse.module.css"

function HowToUse(props){
    return (
        <div className={styles.HowToUseContainer}>

            <img src = {require("../../images/internship.png")} width = "385" alt = "internship" style={{ borderRadius: "20px"}}></img>

            <div style={{    borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
                <div className={styles.HowToUseTitle}> Como usar </div>
                <div className={styles.HowToUseText}> 
                    Para utilizar a CalculadorITA basta ir na página de Dashboard e upar seu boletim escolar do ITA, o cálculo do CR e de 
                    outras métricas do aluno são feito automaticamente a partir de um banco de dados que o website possui. Caso queira manter
                    o boletim no site, você pode utilizar a página Login/Registro para se cadastrar e para recuperar seus dados da última ssssão.

                </div> 
            </div>
 
        </div>
        )
}

export default HowToUse