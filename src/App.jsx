import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio Salud Mental UBB">
          <span className="brand-dot" aria-hidden="true"></span>
          Salud Mental UBB
        </a>
        <nav className="top-nav" aria-label="Principal">
          <a href="#programas">Programas</a>
          <a href="#acompanamiento">Acompanamiento</a>
          <a href="#recursos">Recursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn-ghost" href="#agenda">Agendar orientacion</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <p className="eyebrow">Intranet UBB | Bienestar y Comunidad</p>
          <h1>
            Cuidar tu salud mental
            <br />
            tambien es avanzar en tu carrera.
          </h1>
          <p className="hero-copy">
            Un espacio centralizado para estudiantes, academicos y funcionarios con
            acceso a apoyo psicologico, talleres preventivos, rutas de derivacion y
            herramientas de autocuidado.
          </p>
          <div className="hero-actions" id="agenda">
            <a className="btn btn-primary" href="#contacto">
              Solicitar hora ahora
            </a>
            <a className="btn btn-secondary" href="#recursos">
              Ver recursos digitales
            </a>
          </div>
          <div className="hero-kpis" aria-label="Indicadores de la seccion">
            <article>
              <strong>+1.200</strong>
              <span>atenciones anuales</span>
            </article>
            <article>
              <strong>24/7</strong>
              <span>contenido de apoyo</span>
            </article>
            <article>
              <strong>3 campus</strong>
              <span>cobertura institucional</span>
            </article>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="pulse"></div>
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="signal-card">
              <p>Termometro de bienestar</p>
              <div className="signal-bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="programs" id="programas">
          <div className="section-head">
            <p>Programas activos</p>
            <h2>Servicios que conectan prevencion, atencion y seguimiento</h2>
          </div>
          <div className="program-grid">
            <article className="program-card">
              <h3>Atencion psicologica individual</h3>
              <p>
                Evaluacion inicial, sesiones breves y plan de acompanamiento
                adaptado a cada integrante de la comunidad UBB.
              </p>
            </article>
            <article className="program-card">
              <h3>Talleres y charlas</h3>
              <p>
                Estrategias de manejo del estres, ansiedad academica, habitos de
                sueno y habilidades socioemocionales.
              </p>
            </article>
            <article className="program-card">
              <h3>Ruta de crisis y derivacion</h3>
              <p>
                Protocolo claro para situaciones urgentes, articulado con redes
                internas y servicios externos especializados.
              </p>
            </article>
          </div>
        </section>

        <section className="pathway" id="acompanamiento">
          <div className="section-head">
            <p>Como funciona</p>
            <h2>Tu proceso en cuatro etapas</h2>
          </div>
          <ol className="pathway-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Solicitud en intranet</h3>
                <p>Completa un formulario breve y seguro en menos de 3 minutos.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Primer contacto profesional</h3>
                <p>
                  Recibes orientacion inicial y priorizacion segun necesidad.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Plan personalizado</h3>
                <p>
                  Definimos objetivos de acompanamiento y recursos complementarios.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Seguimiento y cierre</h3>
                <p>
                  Evaluamos avances y activamos continuidad cuando sea necesaria.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="resources" id="recursos">
          <div className="section-head">
            <p>Biblioteca digital</p>
            <h2>Recursos para actuar antes de llegar al limite</h2>
          </div>
          <div className="resource-grid">
            <article>
              <h3>Guias descargables</h3>
              <p>
                Materiales practicos sobre regulacion emocional, enfoque en examenes
                y autocuidado diario.
              </p>
              <a href="#">Abrir coleccion</a>
            </article>
            <article>
              <h3>Capsulas audiovisuales</h3>
              <p>
                Videos breves con herramientas aplicables para crisis de ansiedad y
                organizacion saludable del tiempo.
              </p>
              <a href="#">Ver playlist</a>
            </article>
            <article>
              <h3>Directorio de apoyo</h3>
              <p>
                Contactos internos y externos, lineas de ayuda y canales de atencion
                disponibles por campus.
              </p>
              <a href="#">Consultar directorio</a>
            </article>
          </div>
        </section>

        <section className="cta" id="contacto">
          <p>Seccion de Salud Mental UBB</p>
          <h2>
            Si lo necesitas, no esperes a que empeore.
            <br />
            Estamos para acompanarte.
          </h2>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:saludmental@ubb.cl">
              Escribir a saludmental@ubb.cl
            </a>
            <a className="btn btn-ghost" href="tel:+56412221234">
              Llamar a mesa de ayuda
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Universidad del Bio-Bio | Intranet institucional</p>
        <small>Confidencialidad, respeto y acceso oportuno para toda la comunidad.</small>
      </footer>
    </>
  )
}

export default App
