import styles from "./ContactForm.module.css"
import React, { useState } from 'react';

function ContactForm(){


  const [writtenText, setWrittenText] = useState('');
  const [writtenName, setWrittenName] = useState('');


      
  const updateName = (event) => {
      setWrittenName(event.target.value)
  };

  const updateText = (event) => {
    setWrittenText(event.target.value)
  };
  
  async function sendMessage (){
    let contact = {
      name: writtenName,
      text: writtenText
    }
    alert("Mensagem enviada! Agradecemos o contato")
    fetch('http://127.0.0.1:8000/core_api/contact/', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
  }

    return (
        <div className={styles.ContactContainer}>
          <div />
            <div style={{borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
              <form onSubmit={sendMessage}>
                <div style={{fontSize : "xx-large"}}> Remetente: </div>
                <input type="text" onChange={updateName} style = {{width : "300px", textAlign : "left"}}></input>
                <div style={{fontSize : "xx-large"}}> Mensagem: </div>
                <textarea type="text" onChange={updateText} style = {{height : "200px", width : "300px", textAlign : "left"}}></textarea>
                <div> <input type="submit"></input> </div>
              </form>
            </div>
          <div /> 
        </div>
        )
}

export default ContactForm