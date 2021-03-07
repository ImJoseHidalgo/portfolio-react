import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { topObserver } from '../../../utils/intersectionObserver';
import { ContactForm, ContactTitle, Container } from './ContactScreen.styles'

const ContactScreen = () => {
  const { contact } = useSelector(state => state.lang.pageContent);

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = 'Contact | José Hidalgo';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Aun no tengo listas las validaciónes del formulario por lo cual no esta funcionando :D');
  }

  // const createMarkup = () => {
  //   return {__html: `${contact.desc}`};
  // }
  
  return (
    <>
      <ContactTitle id='top'>
        <Container className='container'>
          <h1>{contact.title}</h1>
          {contact.desc !== 'es'
            ? <p>Do you want to work or communicate with me? <br/> I recommend that you send me a <a className='email' href='mailto:josehidalgo990@gmail.com'> email </a> or a direct message by <a className = 'email' target = '_ blank' rel = 'noreferrer' href = 'https: //www.linkedin.com/in/imjosehidalgo/'> linkedin </a> or any of my social networks so that I can respond more quickly . However, you can also complete the following form.</p>
            : <p>¿Quieres trabajar o comunicarte conmigo?<br/>Te recomiendo que me mandes un <a className='email' href='mailto:josehidalgo990@gmail.com' >correo</a> o un mensaje directo por <a className='email' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/imjosehidalgo/' >linkedin</a> o cualquiera de mis redes sociales para que pueda responderte con mayor rapidez. Sin embargo tambien puedes completar el siguiente formulario.</p>
          }
          {/* <p dangerouslySetInnerHTML={createMarkup()} /> */}
        </Container>
      </ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <div className='container'>
          <input placeholder={contact.fname} type="text"/>
          <input placeholder={contact.femail} type="text"/>
          <input placeholder={contact.fsubject} type="text"/>
          <textarea placeholder={contact.ftext} type="text"/>
          <button type='submit'>{contact.fbutton}</button>
        </div>
      </ContactForm>
    </>
  )
}

export default ContactScreen
