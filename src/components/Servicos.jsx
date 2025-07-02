// src/components/Servicos.jsx
import './styles/Servicos.css';

function Servicos() {
  const servicos = [
    {
      imagem: "/assets/imagemResidencia.jpg",
      titulo: "Elétrica Residencial",
      descricao:
        "Instalações e reparos em geral. Conserto de máquinas de lavar, troca de chuveiros, instalação de tomadas e modernos relés Wi-Fi para sua casa inteligente."
    },
    {
      imagem: "/assets/imagemComercio.jpg",
      titulo: "Elétrica Comercial",
      descricao:
        "Soluções para lojas e escritórios. Manutenção preventiva, projetos de iluminação, dimensionamento de carga e infraestrutura elétrica para o seu negócio não parar."
    },
    {
      imagem: "/assets/imagemIndustria.png",
      titulo: "Elétrica Industrial",
      descricao:
        "Manutenção corretiva e preventiva em maquinário pesado, painéis de controle e fornos industriais. Garantimos a continuidade e segurança da sua produção."
    }
  ];

  return (
    <section className="servicos" id="servicos">
      <h2>Contrate um Técnico Eletricista</h2>
      <div className="servicos-grid">
        {servicos.map((servico, index) => (
          <div key={index} className="servico-card">
            <img src={servico.imagem} alt={servico.titulo} />
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
