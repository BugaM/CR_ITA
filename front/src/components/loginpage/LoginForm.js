import styles from "./LoginForm.module.css"
import {Link} from 'react-router-dom';

function LoginForm(){
  function loginUser(e){
    e.preventDefault()
    console.log("Login")
  }
    return (
        <div className={styles.LoginContainer}>
            <div />

            <div style={{borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
              <form onSubmit={loginUser}>
                <div style={{fontSize : "xx-large"}}> Usuário </div>
                <input type="text"></input>
                <div style={{fontSize : "xx-large"}}> Senha </div>
                <input type="text"></input>
                <div> <input type="submit"></input> </div>
              </form>

              

              <div /> 
               Não possui cadastro? 
               <Link to = "/register" style={{textDecoration : "None", color :"lightblue"}}> 
                 Registrar 
               </Link>
              </div>

            <div /> 

            
               

                

            
        </div>
        )
}

export default LoginForm