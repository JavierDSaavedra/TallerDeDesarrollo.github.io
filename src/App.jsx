import './App.css'
import escudoUbb from './assets/escudo-ubb-fondo-oscuro-400x247.png'

function App() {
  const smoothScrollTo = (targetY, duration = 1100) => {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const step = (time) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * eased)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const handleNavScroll = (event, id) => {
    event.preventDefault()

    const section = document.getElementById(id)
    if (!section) {
      return
    }

    const headerOffset = 92
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset

    smoothScrollTo(top)
  }

  return (
    <div className="landing">
      <header className="site-header">
        <a className="brand" href="#problema" aria-label="Proyecto FACE-UBB">
          <img src={escudoUbb} alt="Escudo UBB" />
          <span>FACE-UBB</span>
        </a>
        <nav className="top-nav" aria-label="Navegacion principal simple">
          <a href="#problema" onClick={(event) => handleNavScroll(event, 'problema')}>Problema</a>
          <a href="#solucion" onClick={(event) => handleNavScroll(event, 'solucion')}>Solucion</a>
          <a href="#objetivos" onClick={(event) => handleNavScroll(event, 'objetivos')}>Objetivos</a>
        </nav>
      </header>

      <main>
        <section className="problem-showcase section-problema" id="problema">
          <article className="problem-copy">
            <p className="section-label">Seccion Problema</p>
            <p className="eyebrow">Diagnostico institucional</p>
            <h1>Problematica actual en la presencia web de FACE-UBB</h1>
            <p>
              La gestion web descentralizada y el uso de WordPress desactualizado
              han generado vulnerabilidades, dispersion visual y dificultad de
              mantenimiento en los portales de la facultad.
            </p>
            <div className="problem-tags" aria-label="Brechas identificadas">
              <span>Seguridad comprometida</span>
              <span>Imagen inconsistente</span>
              <span>Alta carga operativa</span>
            </div>
          </article>

          <aside className="terminal-card" aria-label="Resumen tecnico de la problematica">
            <p className="terminal-title">auditoria-face.sh</p>
            <p><span>$</span> scan --portales face-ubb</p>
            <p><span>{'>'}</span> plugins obsoletos detectados: 17</p>
            <p><span>{'>'}</span> plantillas distintas en produccion: 9</p>
            <p><span>{'>'}</span> tiempo promedio de publicacion: alto</p>
            <p><span>#</span> estado: requiere arquitectura unificada</p>
          </aside>

          <section className="trust-strip" aria-label="Pilares institucionales UBB">
            <article>
              <strong>FACE-UBB</strong>
              <span>Comunicacion institucional coherente</span>
            </article>
            <article>
              <strong>Seguridad operativa</strong>
              <span>Menor superficie de ataque en portales publicos</span>
            </article>
            <article>
              <strong>Escalabilidad</strong>
              <span>Base comun para nuevas unidades academicas</span>
            </article>
          </section>
        </section>

        <section className="block section-solucion" id="solucion">
          <div className="section-head">
            <p className="section-label">Seccion Solucion</p>
            <h2>Solucion propuesta</h2>
            <p>
              Plataforma basada en Node.js para generar sitios estaticos seguros,
              rapidos y visualmente consistentes con la identidad UBB.
            </p>
          </div>

          <div className="solution-layout">
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
                <h3>Flujo modular</h3>
                <p>Facilita mantenimiento, evolucion tecnica y continuidad operativa.</p>
              </article>
            </div>

            <article className="support-card">
              <h3>Arquitectura operativa</h3>
              <ul>
                <li>Repositorio central con componentes institucionales.</li>
                <li>Versionado para trazabilidad de cambios y auditoria.</li>
                <li>Despliegue automatizado por ambientes controlados.</li>
                <li>Documentacion comun para continuidad del equipo FACE.</li>
              </ul>
            </article>
          </div>

          <section className="workspace" aria-label="Flujo de trabajo propuesto">
            <article className="workspace-panel">
              <h3>Publicacion estandarizada</h3>
              <ul>
                <li>Plantilla unica para unidades FACE.</li>
                <li>Contenido administrado por bloques reutilizables.</li>
                <li>Versionado y despliegue con pipeline simple.</li>
              </ul>
            </article>
            <article className="workspace-panel">
              <h3>Control tecnico centralizado</h3>
              <ul>
                <li>Checklist de seguridad previo a publicacion.</li>
                <li>Actualizaciones coordinadas por entorno.</li>
                <li>Monitoreo de continuidad academica y comunicacional.</li>
              </ul>
            </article>
          </section>
        </section>

        <section className="block section-objetivos" id="objetivos">
          <div className="section-head">
            <p className="section-label">Seccion Objetivos</p>
            <h2>Objetivos clave</h2>
            <p>
              Objetivos orientados a seguridad, estandarizacion institucional y
              validacion real en unidades academicas FACE-UBB.
            </p>
          </div>

          <div className="objetivos-layout">
            <article className="objetivos-panel">
              <h3>Objetivos estrategicos</h3>
              <ul>
                <li>Diagnosticar brechas de seguridad y obsolescencia.</li>
                <li>Definir estandares graficos y tecnicos institucionales.</li>
                <li>Construir y validar un generador estatico con plan piloto real.</li>
              </ul>
            </article>

            <article className="objetivos-panel roadmap">
              <h3>Hitos del piloto</h3>
              <ol>
                <li>Levantamiento de requerimientos en unidades FACE.</li>
                <li>Implementacion de plantilla institucional base.</li>
                <li>Pruebas de seguridad, rendimiento y mantenibilidad.</li>
                <li>Despliegue controlado y evaluacion de resultados.</li>
              </ol>
            </article>

            <article className="objetivos-panel objetivos-resultado" id="contacto">
              <h3>Resultado esperado</h3>
              <p>
                Una presencia web unificada, segura y mantenible para FACE-UBB,
                reduciendo riesgos operativos y mejorando la visibilidad institucional.
              </p>
              <ul>
                <li>Seguridad reforzada</li>
                <li>Mejor rendimiento SEO</li>
                <li>Continuidad academica</li>
              </ul>
            </article>
          </div>
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
