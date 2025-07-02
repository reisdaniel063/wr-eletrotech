// src/components/Clientes.jsx
import './styles/Clientes.css';
import { useState, useEffect } from 'react';

function Clientes() {
  const imagensClientes = [
    "/assets/clientes/iguatemi.png",
    "/assets/clientes/patioCiane.jpg",
    "/assets/clientes/shoppingCidade.jpg",
    "/assets/clientes/ibitiReserva.jpg",
    "/assets/clientes/sodieDoces.jpg",
    "/assets/clientes/clinicaBarros.jpg",
    "/assets/clientes/weizur.jpg",
    "/assets/clientes/panelaDeBarro.jpg",
    "/assets/clientes/mtf.png"
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(3);

  useEffect(() => {
    const ajustarQuantidade = () => {
      setQuantidadeVisivel(window.innerWidth <= 768 ? 1 : 3);
    };

    ajustarQuantidade();
    window.addEventListener('resize', ajustarQuantidade);

    return () => window.removeEventListener('resize', ajustarQuantidade);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setStartIndex((prev) => (prev + quantidadeVisivel) % imagensClientes.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [quantidadeVisivel]);

  const imagensVisiveis = [];
  for (let i = 0; i < quantidadeVisivel; i++) {
    imagensVisiveis.push(imagensClientes[(startIndex + i) % imagensClientes.length]);
  }

  return (
    <section className="clientes">
      <h2>CLIENTES QUE CONFIAM EM NOSSO TRABALHO</h2>
      <div className="clientes-grid">
        {imagensVisiveis.map((src, index) => (
          <div key={index} className="cliente-card">
            <img src={src} alt={`Cliente ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clientes;
