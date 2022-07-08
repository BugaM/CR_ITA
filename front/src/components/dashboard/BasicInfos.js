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

    const handleSubmission = () => {
        const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'http://127.0.0.1:8000/core_api/get_data/',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
	};


    return (
        <div className={styles.BasicInfosContainer}>
            <div className={styles.BasicInfosName}>
                Nome: {response.total_eletivas} 
            </div>

            <div className={styles.BasicInfosEng}>
                Curso: {response.curso}
            </div>
            
            <div className={styles.BasicInfosPDF}>
                <div> Boletim: </div>
                <div style = {{alignSelf: "center", height:"100%"}}>
                    <input type="file" name="pdf" onChange={changeHandler} style ={{color : "green", width : "290px"}}/>
                </div>  
                <div onClick={handleSubmission} style = {{cursor : "pointer", color : "green"}}> Enviar </div>
            </div>  

        </div>
        )
}

export default BasicInfos