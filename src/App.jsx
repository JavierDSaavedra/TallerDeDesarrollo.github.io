import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Proyecto FACE-UBB">
          FACE-UBB
        </a>
        <nav className="top-nav" aria-label="Navegacion principal simple">
          <a href="#problema">Problema</a>
          <a href="#solucion">Solucion</a>
          <a href="#objetivos">Objetivos</a>
        </nav>
        <a className="btn" href="#contacto">
          Contacto
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <p className="eyebrow">Proyecto de Titulo</p>
          <h1>
            Sistema automatizado de generacion y gestion
            <br />
            de sitios web institucionales para FACE-UBB
          </h1>
          <p>
            Plataforma basada en Node.js para crear sitios institucionales
            seguros, rapidos y visualmente consistentes.
          </p>

          <div className="hero-kpis" aria-label="Indicadores del proyecto">
            <article>
              <strong>Seguridad</strong>
              <span>menos riesgo que CMS dinamicos</span>
            </article>
            <article>
              <strong>Identidad visual</strong>
              <span>plantillas estandarizadas FACE</span>
            </article>
            <article>
              <strong>Mantenibilidad</strong>
              <span>despliegue simple y escalable</span>
            </article>
          </div>
        </section>

        <section className="block" id="problema">
          <h2>Problema actual</h2>
          <p>
            La gestion web descentralizada y el uso de WordPress desactualizado han
            generado vulnerabilidades, dispersion visual y dificultad de
            mantenimiento en los portales de la facultad.
          </p>
        </section>

        <section className="block" id="solucion">
          <h2>Solucion propuesta</h2>
          <div className="simple-grid">
            <article>
              <h3>Generacion estatica</h3>
              <p>Reduce superficie de ataque y mejora tiempos de carga.</p>
            </article>
            <article>
              <h3>Plantillas oficiales</h3>
              <p>Asegura una imagen institucional consistente en todos los sitios.</p>
            </article>
            <article>
              <h3>Implementacion modular</h3>
              <p>Facilita mantenimiento, evolucion tecnica y continuidad operativa.</p>
            </article>
          </div>
        </section>

        <section className="block" id="objetivos">
          <h2>Objetivos clave</h2>
          <ul>
            <li>Diagnosticar brechas de seguridad y obsolescencia.</li>
            <li>Definir estandares graficos y tecnicos institucionales.</li>
            <li>Construir y validar un generador estatico con plan piloto real.</li>
          </ul>
        </section>

        <section className="block cta" id="contacto">
          <h2>Resultado esperado</h2>
          <p>
            Una presencia web unificada, segura y mantenible para FACE-UBB,
            reduciendo riesgos operativos y mejorando la visibilidad institucional.
          </p>
          <ul>
            <li>
              Seguridad reforzada
            </li>
            <li>
              Mejor rendimiento SEO
            </li>
            <li>
              Continuidad academica
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>FACE - Universidad del Bio-Bio</p>
        <small>Landing simplificada del proyecto de titulacion.</small>
      </footer>
    </div>
  )
}

export default App
