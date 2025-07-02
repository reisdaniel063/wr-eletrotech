import './styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Soluções Elétricas Completas para sua Casa, Comércio ou Indústria</h1>
        <p>
          Experiência e qualidade em serviços elétricos personalizados para residências,
          comércios e indústrias.
        </p>
        <a
          href="https://wa.me/5515988282952?text=Olá!%20Gostaria%20de%20um%20orçamento."
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Chame no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;
