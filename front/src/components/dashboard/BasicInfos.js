import React, {useState} from "react"
import axios from 'axios'
import styles from "./BasicInfos.module.css"

function BasicInfos(props){


	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);


    
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


    // const handleSubmission = () => {
    //     fetch('http://127.0.0.1:8000/core_api/get_data/')
    //     .then(response => response.json())
    //     .then(results => {console.log('Success:', results);});
	// };
    // var response = {total_eletivas:2, curso: "-", }
    // async function handleSubmission() {
    //     response =  await (await fetch('http://127.0.0.1:8000/core_api/get_data/')).json()
    //     console.log(response.curso)
    //     setEletivas (response.total_eletivas)
	// };

    return (
        <div className={styles.BasicInfosContainer}>
            <div className={styles.BasicInfosName}>
                Nome: Marcelo
            </div>

            <div className={styles.BasicInfosEng} key={props.curso}>
                Curso: {props.curso}
            </div>
            
            <div className={styles.BasicInfosPDF}>
                <div> Boletim: </div>
                <div style = {{alignSelf: "center", height:"100%"}}>
                    <input type="file" name="pdf" onChange={changeHandler} style ={{color : "green", width : "290px"}}/>
                </div>  
                <div onClick={props.handleSub} style = {{cursor : "pointer", color : "green"}}> Enviar </div>
            </div>  

        </div>
        )
}

export default BasicInfos