import React, { useEffect } from 'react';
import emailjs from "emailjs-com";
import { useSelector } from 'react-redux';
import { topObserver } from '../../../utils/intersectionObserver';
import { ContactForm, ContactTitle, Container} from './ContactScreen.styles'

const ContactScreen = () => {
  const { contact } = useSelector(state => state.lang.pageContent);

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = 'Contact | José Hidalgo';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qolr05s",
        "template_0i2ngca",
        e.target,
        "user_Yf6LXEuWk6SKymIb5ESNz"
      )
      .then((result) => {
          alert('Email enviado correctamente!');
          document.querySelector("form").reset();
        },
        (error) => {
          // console.log(error.text);
          alert(error.text);
        }
      );
  }
  
  return (
    <>
      <ContactTitle id='top'>
        <Container className='container'>
          <h1>{contact.title}</h1>
          {contact.desc !== 'es'
            ? <p>Do you want to work or communicate with me? <br/> I recommend that you send me a direct message by <a className = 'email' target = '_ blank' rel = 'noreferrer' href = 'https: //www.linkedin.com/in/imjosehidalgo/'> linkedin</a> or any of my social networks so that I can respond more quickly . However, you can also complete the following form.</p>
            : <p>¿Quieres trabajar o comunicarte conmigo?<br/>Te recomiendo que me mandes un mensaje directo por <a className='email' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/imjosehidalgo/' >linkedin</a> o cualquiera de mis redes sociales para que pueda responderte con mayor rapidez. Sin embargo, tambien puedes completar el siguiente formulario.</p>
          }
        </Container>
      </ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Container className='container'>
          <input placeholder={contact.fname} required type="text" name="to_name"/>
          <input placeholder={contact.femail} required type="email" name="from_name"/>
          <input placeholder={contact.fsubject} required type="text" name="affair"/>
          <textarea placeholder={contact.ftext} required type="text" name="message"/>
          <button type='submit'>{contact.fbutton}</button>
        </Container>
      </ContactForm>
    </>
  )
}

export default ContactScreen
