// src/components/WhatsAppButton.jsx
import './styles/WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5515988282952"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
