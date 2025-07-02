
import './styles/Diferenciais.css';

function Diferenciais() {
  const dados = [
    {
      icone: "fas fa-thumbs-up",
      titulo: "Garantia de Serviço",
      descricao: "Todos os serviços prestados possuem garantia e seguem as normas técnicas."
    },
    {
      icone: "fas fa-bolt",
      titulo: "Atendimento Rápido",
      descricao: "Agilidade para resolver seus problemas elétricos com eficiência e segurança."
    },
    {
      icone: "fas fa-wallet",
      titulo: "Orçamento Justo",
      descricao: "Preços competitivos e orçamento transparente, sem surpresas na conta."
    },
    {
      icone: "fas fa-map-marker-alt",
      titulo: "Atendimento em Sorocaba e Região",
      descricao: "Serviços disponíveis em Sorocaba, Votorantim, Araçoiaba e cidades vizinhas."
    }
  ];

  return (
    <section className="diferenciais" id="sobre">
      <h2>POR QUE ESCOLHER A WR ELETROTECH?</h2>
        <p className="descricao">
          Ofereço serviços especializados em projetos elétricos, desde a análise inicial até a execução completa. Atendo residências, comércios e indústrias, sempre priorizando segurança, eficiência e soluções personalizadas para cada cliente.
        </p>
      <div className="diferenciais-grid">
        {dados.map((item, index) => (
          <div key={index} className="diferencial-item">
            <i className={item.icone}></i>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;
