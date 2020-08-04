import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/62670548?s=400&u=3894c156289f9f1789755d82e20b38e2388ae501&v=4" alt="Anderson Wiedemann"/>
      <div>
        <strong>Anderson Wiedemann</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
    Entusiasta das melhores tecnologias de química avançada.
    <br/><br/>
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80.00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;