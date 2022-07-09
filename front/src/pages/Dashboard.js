import BasicInfos from '../components/dashboard/BasicInfos';
import Elective from '../components/dashboard/Elective';
import Grades from '../components/dashboard/Grades';
import React, { useState } from 'react';
  
function Dashboard() {
    const [curso, setCurso] = useState('-');
    const [total_eletivas, setEletivas] = useState(0);
    const [cr, setCr] = useState(0);
    const [media_simples, setMedia] = useState(0);
    const [conceito, setConceito] = useState('-');

    async function handleSubmission() {
      
      let response =  await (await fetch('http://127.0.0.1:8000/core_api/get_data/')).json()
    
      // setEletivas (response.total_eletivas)
      setCurso (response.curso)
      setEletivas(parseFloat(response.total_eletivas).toFixed(1))
      setMedia(parseFloat(response.media_simples).toFixed(2))
      setCr(parseFloat(response.cr).toFixed(2))
      let grade_fixed = parseFloat(response.cr).toFixed(1);
      if (grade_fixed >= 9.5){
        setConceito('L');
      } else if (grade_fixed >= 8.5){
        setConceito('MB');
      } else if (grade_fixed >= 7.5){
        setConceito('B');
      } else if (grade_fixed >= 6.5){
        setConceito('R');
      } else if (grade_fixed >= 5.5){
        setConceito('I');
      } else setConceito('D');
    };

    return (
      <div>
        <BasicInfos curso = {curso} key={curso} handleSub = {handleSubmission}/> 
        <Elective horasatuais = {total_eletivas} horasnecessarias = "15" />
        <Grades nota = {media_simples} conceito = {conceito} cr = {cr}/>
      </div> 
    );
  }

  export default Dashboard