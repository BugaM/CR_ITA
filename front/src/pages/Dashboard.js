import BasicInfos from '../components/dashboard/BasicInfos';
import Elective from '../components/dashboard/Elective';
import Grades from '../components/dashboard/Grades';
import React, { useState } from 'react';
  
function Dashboard() {
    const [curso, setCurso] = useState('-');
    async function handleSubmission() {
      
      let response =  await (await fetch('http://127.0.0.1:8000/core_api/get_data/')).json()
    
      // setEletivas (response.total_eletivas)
      setCurso (response.curso)
    };
    
    return (
      <div>
        <BasicInfos curso = {curso} key={curso} handleSub = {handleSubmission}/> 
        <Elective horasatuais = "12" horasnecessarias = "15" />
        <Grades nota = "9.9" conceito = "L" cr = "9.8"/>
      </div> 
    );
  }

  export default Dashboard