import "./App.css";

const githubProfile = "https://github.com/biondipedro388-lang";
const footballStatsUrl = "https://football-stats-fdff1.web.app/";
const footballStatsRepo =
  "https://github.com/biondipedro388-lang/football-stats";

const email = "biondipedro388@gmail.com";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a href="#inicio" className="logo" aria-label="Voltar ao início">
          PB<span>.</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="header-button"
          href={githubProfile}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">
              PORTFÓLIO DE DESENVOLVIMENTO
            </span>

            <h1>
              Transformando ideias em
              <span> projetos reais.</span>
            </h1>

            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas
              na Fatec Matão e desenvolvedor em evolução. Aprendo
              construindo projetos e colocando meus conhecimentos em prática.
            </p>

            <div className="hero-location">
              <span>⌖</span> Matão, SP
            </div>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Ver projetos <span>↗</span>
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Meu GitHub
              </a>
            </div>

            <div className="hero-status">
              <span className="status-dot"></span>
              Aprendendo e desenvolvendo projetos
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span>PROJETO EM DESTAQUE</span>
              <span className="card-number">01</span>
            </div>

            <div className="football-icon">⚽</div>

            <h2>FootballStats</h2>

            <p>
              Aplicação web para registrar carreiras de jogadores e
              técnicos, temporadas, estatísticas e títulos do futebol.
            </p>

            <div className="tech-list">
              <span>React</span>
              <span>Vite</span>
              <span>Firebase</span>
            </div>

            <a
              href={footballStatsUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Explorar projeto <span>↗</span>
            </a>
          </div>

          <div className="hero-decoration"></div>
        </section>

        <section className="about section" id="sobre">
          <div className="section-heading">
            <span className="eyebrow">01 — SOBRE MIM</span>
            <h2>Aprendendo na prática.</h2>
          </div>

          <div className="about-content">
            <p className="about-text">
              Sou estudante de Análise e Desenvolvimento de Sistemas
              na Fatec Matão. Meu objetivo é continuar evoluindo na área
              de tecnologia por meio da prática, da criação de aplicações
              e do aprendizado contínuo.
            </p>

            <p className="about-text">
              O FootballStats é um dos projetos em que aplico meus
              conhecimentos de desenvolvimento web, trabalhando com
              interface, organização de dados e integração com Firebase.
            </p>
          </div>

          <div className="about-details">
            <div>
              <span className="detail-label">FORMAÇÃO</span>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span>Fatec Matão</span>
            </div>

            <div>
              <span className="detail-label">LOCALIZAÇÃO</span>
              <strong>Matão, São Paulo</strong>
              <span>Brasil</span>
            </div>

            <div>
              <span className="detail-label">FOCO ATUAL</span>
              <strong>Desenvolvimento web</strong>
              <span>Projetos práticos e aprendizado</span>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="habilidades">
          <div className="section-heading">
            <span className="eyebrow">02 — TECNOLOGIAS</span>
            <h2>Ferramentas que utilizo.</h2>
            <p>
              Tecnologias e ferramentas que já fazem parte dos meus
              estudos e projetos.
            </p>
          </div>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Vite</span>
            <span>Firebase</span>
            <span>Cloud Firestore</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-heading">
            <span className="eyebrow">03 — PROJETOS</span>
            <h2>O que estou construindo.</h2>
            <p>
              Projetos em que aplico conhecimentos e desenvolvo
              minha experiência em programação.
            </p>
          </div>

          <article className="project-card">
            <div className="project-card-top">
              <span className="project-tag">APLICAÇÃO WEB</span>
              <span className="project-index">01 / 01</span>
            </div>

            <div className="project-preview">
              <img
                src="/footballstats.png"
                alt="Captura de tela da aplicação FootballStats"
              />
            </div>

            <h3>FootballStats</h3>

            <p>
              Aplicação web voltada ao acompanhamento de carreiras
              no futebol. Permite organizar jogadores, técnicos,
              temporadas e estatísticas.
            </p>

            <div className="tech-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>Firebase</span>
              <span>Firestore</span>
            </div>

            <div className="project-actions">
              <a
                href={footballStatsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver aplicação ↗
              </a>

              <a
                href={footballStatsRepo}
                target="_blank"
                rel="noreferrer"
              >
                Ver código-fonte ↗
              </a>
            </div>
          </article>
        </section>

        <section className="contact section" id="contato">
          <span className="eyebrow">04 — CONTATO</span>
          <h2>Vamos conversar?</h2>

          <p>
            Estou construindo minha experiência em desenvolvimento
            de software e aberto a conhecer oportunidades na área.
          </p>

          <div className="contact-buttons">
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <span>Meu GitHub ↗</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="secondary-button"
            >
              {email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          PB<span>.</span>
        </a>

        <span>Portfólio pessoal · 2026</span>

        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;