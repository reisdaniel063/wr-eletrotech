// src/components/Footer.jsx
import './styles/Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {anoAtual} - Eletricista WR EletroTech Sorocaba - Todos os direitos reservados.</p>
      <p>
        Contato: <a href="mailto:wreletrotech@gmail.com">wreletrotech@gmail.com</a> | (15) 98828-2952
      </p>
    </footer>
  );
}

export default Footer;
