// src/components/Catalogo.jsx
import './styles/Catalogo.css';

function Catalogo() {
  const servicosExtras = [
    {
      imagem: "/assets/cards/cardRetificadora.webp",
      titulo: "Manutenção em Retificador",
      descricao: "Serviço técnico especializado em manutenção e ajuste de máquinas retificadoras industriais."
    },
    {
      imagem: "/assets/cards/cardArCondicionado.png",
      titulo: "Manutenção/Instalação de Ar-Condicionado",
      descricao: "Instalação e manutenção preventiva e corretiva em sistemas de ar-condicionado split."
    },
    {
      imagem: "/assets/cards/cardPortao.jpg",
      titulo: "Portão Elétrico",
      descricao: "Instalação e conserto de motores, controle remoto e automatizadores de portão."
    },
    {
      imagem: "/assets/cards/torreDeResfriamento.png",
      titulo: "Manutenção de torre de resfriamento",
      descricao: "Verificação, limpeza e ajustes para garantir o funcionamento eficiente da torre de resfriamento."
    },
    {
      imagem: "/assets/cards/cardFiacao.jpg",
      titulo: "Fiação Elétrica (com Garantia de 5 anos)",
      descricao: "Troca ou instalação de toda a fiação elétrica com garantia e materiais de qualidade."
    },
    {
      imagem: "/assets/cards/cardMaquina.jpeg",
      titulo: "Manutenção de Máquina de Lavar",
      descricao: "Diagnóstico e conserto de lavadoras residenciais e semi-industriais."
    },
    {
      imagem: "/assets/cards/cardMicroondas.png",
      titulo: "Manutenção de Micro-ondas e Eletroeletrônicos",
      descricao: "Reparo técnico em micro-ondas, geladeiras e outros aparelhos domésticos."
    },
    {
      imagem: "/assets/cards/cardBombaPiscina.webp",
      titulo: "Bomba de Piscina",
      descricao: "Instalação, manutenção e troca de bombas para circulação e filtragem de piscinas."
    },
    {
      imagem: "/assets/cards/cardFornoIndustrial.png",
      titulo: "Manutenção de Forno Industrial",
      descricao: "Ajustes técnicos, troca de resistências e manutenção completa para fornos industriais."
    },
    {
      imagem: "/assets/cards/cardRele.jpeg",
      titulo: "Instalação e Configuração de Relé Wi-Fi",
      descricao: "Automatize sua casa com relés inteligentes para controle remoto via celular."
    },
    {
      imagem: "/assets/cards/cardLED.png",
      titulo: "Instalação de Luz de LED",
      descricao: "Instalação de fitas, spots e painéis de LED com economia e eficiência luminosa."
    },
    {
      imagem: "/assets/cards/cardPainel.jpg",
      titulo: "Montagem de painéis elétricos",
      descricao: "Montagem técnica de painéis elétricos sob medida, com segurança e organização profissional."
    }
  ];

  return (
    <section className="catalogo">
      <h2>SERVIÇOS OFERECIDOS</h2>
      <div className="catalogo-grid">
        {servicosExtras.map((item, index) => (
          <div key={index} className="catalogo-card">
            <img src={item.imagem} alt={item.titulo} />
            <div className="catalogo-content">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
