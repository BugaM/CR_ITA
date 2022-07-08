import BasicInfos from '../components/dashboard/BasicInfos';
import Elective from '../components/dashboard/Elective';
import Grades from '../components/dashboard/Grades';

function Dashboard() {
    return (
      <div>
        <BasicInfos nome = "Jack" curso = "Computacao" pdf = "Boletim"/> 
        <Elective horasatuais = "12" horasnecessarias = "15" />
        <Grades nota = "9.9" conceito = "L" cr = "9.8"/>
      </div> 
    );
  }

  export default Dashboard