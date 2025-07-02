// src/components/ContatoCTA.jsx
import './styles/ContatoCTA.css';

function ContatoCTA() {
  return (
    <section className="cta-final" id="contato">
      <div className="cta-container">
        <h2>Pronto para resolver seu problema elétrico?</h2>
        <p>Não espere o problema se agravar. Entre em contato e solicite uma visita.</p>
        <a
          href="https://wa.me/5515988282952?text=Olá!%20Vi%20seu%20site%20e%20preciso%20de%20um%20eletricista."
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Falar com um Especialista
        </a>
      </div>
    </section>
  );
}

export default ContatoCTA;
