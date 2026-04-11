import './App.css'

const characteristics = [
  {
    item: 'Experiencia en el problema',
    level: 'Medio',
    description:
      'Conocimiento de la infraestructura UBB, aunque se requiere un diagnostico profundo de la totalidad de subdominios activos.',
  },
  {
    item: 'Tamano del problema',
    level: 'Medio',
    description:
      'Involucra multiples departamentos y sedes de la FACE, pero con un alcance delimitado a la facultad.',
  },
  {
    item: 'Complejidad del problema',
    level: 'Alto',
    description:
      'Requiere la unificacion de criterios tecnicos de seguridad de servidores con criterios comunicacionales y editoriales.',
  },
  {
    item: 'Tamano del software',
    level: 'Medio',
    description:
      'Desarrollo modular que incluye nucleo generador, motor de plantillas y gestion de contenidos.',
  },
  {
    item: 'Complejidad del software',
    level: 'Medio',
    description:
      'Implementacion de un stack moderno basado en Node.js para asegurar un sistema liviano, seguro y desacoplado.',
  },
  {
    item: 'Experiencia en el software',
    level: 'Medio/Bajo',
    description:
      'Se poseen bases solidas en programacion y desarrollo web general. El diseno de un generador estatico institucional implica una nueva curva de aprendizaje enfocada en seguridad y escalabilidad.',
  },
  {
    item: 'Modularidad',
    level: 'Alto',
    description:
      'El sistema permite desarrollar de manera independiente la logica de generacion, las plantillas y la gestion de activos.',
  },
]

const activitiesByObjective = [
  {
    objective: 'Objetivo Especifico 1: Diagnostico de infraestructura y seguridad',
    tasks: [
      'Investigacion y auditoria de subdominios activos FACE bajo ubiobio.cl para detectar obsolescencia tecnologica.',
      'Escaneo de vulnerabilidades criticas en instalaciones WordPress con historial de riesgo para la infraestructura institucional.',
      'Evaluacion de capacidades de hosting en servidores de Concepcion y Chillan administrados por Direccion de Informatica.',
    ],
  },
  {
    objective: 'Objetivo Especifico 2: Requisitos y estandares institucionales',
    tasks: [
      'Definicion de lineamientos graficos: paleta, tipografias y logos oficiales junto a RR.PP. de FACE.',
      'Especificacion de parametros de red y DNS para compatibilidad con la infraestructura administrada por Victor Ramirez.',
      'Levantamiento de necesidades editoriales con secretarias y coordinadores para sitios academicos y congresos.',
    ],
  },
  {
    objective: 'Objetivo Especifico 3: Diseno de arquitectura estatica',
    tasks: [
      'Modelamiento de la logica de pre-renderizado en Node.js para eliminar dependencia de base de datos en frontend.',
      'Diseno de prototipos UI/UX de alta fidelidad alineados al estandar visual de la facultad.',
      'Estructuracion del esquema de datos modular para desplegar perfiles de magister, doctorado y eventos de forma independiente.',
    ],
  },
  {
    objective: 'Objetivo Especifico 4: Desarrollo del generador y modulos',
    tasks: [
      'Construccion del nucleo del software para generacion estatica sobre stack desacoplado.',
      'Desarrollo del motor de plantillas maestras con componentes reutilizables y coherencia institucional.',
      'Integracion de modulo de noticias y archivos para preservacion historica y gestion multimedia.',
    ],
  },
  {
    objective: 'Objetivo Especifico 5: Validacion, piloto y sostenibilidad',
    tasks: [
      'Despliegue de plan piloto institucional para revivir o actualizar un sitio critico.',
      'Ejecucion de pruebas de estres y SEO para validar rendimiento de carga e indexacion.',
      'Elaboracion de manuales y protocolos para continuidad operativa por futuros alumnos en practica.',
    ],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#titulo" aria-label="Proyecto de Titulo FACE-UBB">
          Proyecto de Titulo FACE-UBB
        </a>
        <nav className="top-nav" aria-label="Navegacion principal">
          <a href="#titulo">3.1</a>
          <a href="#problematica">3.3</a>
          <a href="#propuesta">3.4</a>
          <a href="#objetivos">3.7</a>
          <a href="#metodologia">4</a>
          <a href="#plan">5</a>
        </nav>
        <a className="btn btn-outline" href="#plan">
          Ver plan de trabajo
        </a>
      </header>

      <main>
        <section className="hero" id="titulo">
          <p className="eyebrow">3. Proyecto de Titulo</p>
          <h1>
            Sistema automatizado de generacion y gestion
            <br />
            de sitios web institucionales para FACE-UBB
          </h1>
          <p>
            Actividad de titulacion orientada a consolidar seguridad, identidad
            visual y mantenibilidad en portales de la Facultad de Ciencias
            Empresariales de la Universidad del Bio-Bio.
          </p>

          <div className="modality" aria-label="Modalidad de la propuesta">
            <h2>3.2 Modalidad de la propuesta</h2>
            <ul>
              <li>Desarrollo de Software: no seleccionado</li>
              <li>Investigacion: no seleccionado</li>
              <li>Investigacion/Desarrollo de Software: seleccionado</li>
            </ul>
          </div>

          <div className="hero-kpis" aria-label="Indicadores del proyecto">
            <article>
              <strong>Stack Node.js</strong>
              <span>generacion estatica segura</span>
            </article>
            <article>
              <strong>2 sedes</strong>
              <span>Concepcion y Chillan</span>
            </article>
            <article>
              <strong>15 actividades</strong>
              <span>plan de trabajo completo</span>
            </article>
          </div>
        </section>

        <section className="content-block" id="problematica">
          <div className="section-head">
            <p>3.3 Presentacion del area y su problematica</p>
            <h2>Contexto institucional y brechas actuales</h2>
          </div>

          <div className="card-grid">
            <article className="detail-card">
              <h3>3.3.1 Presentacion de la empresa</h3>
              <p>
                La Facultad de Ciencias Empresariales (FACE) de la Universidad del
                Bio-Bio es una unidad academica distribuida en Concepcion y
                Chillan. Su infraestructura digital depende de hosts
                institucionales bajo el dominio ubiobio.cl, alojados fisicamente
                en diversos servidores universitarios.
              </p>
            </article>

            <article className="detail-card">
              <h3>3.3.2 Procesos del ambito del proyecto</h3>
              <p>
                El despliegue web comienza con una solicitud manual a servicios
                computacionales. Luego, cada unidad levanta su propio sitio,
                mayoritariamente en WordPress, con gestion autonoma.
              </p>
              <ul>
                <li>
                  Administrador de Host (Victor Ramirez): estabilidad de maquinas
                  fisicas y cumplimiento de hostings institucionales.
                </li>
                <li>
                  Encargada de RR.PP.: definicion de linea grafica institucional.
                </li>
                <li>
                  Secretarias y academicos: actualizacion de contenidos y noticias.
                </li>
              </ul>
            </article>

            <article className="detail-card">
              <h3>3.3.3 Problema y oportunidades de mejora</h3>
              <ul>
                <li>
                  Vulnerabilidad critica de seguridad por WordPress desactualizado,
                  con impacto en caidas de servidores institucionales.
                </li>
                <li>
                  Obsolescencia y castigo de indexadores por sitios abandonados y
                  contenido generico.
                </li>
                <li>
                  Falta de identidad visual por plantillas independientes entre
                  subdominios.
                </li>
                <li>
                  Dificultad de mantenimiento por brecha tecnica en personal editor.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-block" id="propuesta">
          <div className="section-head">
            <p>3.4 Propuesta</p>
            <h2>Generador de sitios modulares desacoplado y seguro</h2>
          </div>
          <div className="pillar-grid">
            <article>
              <h3>Arquitectura de generacion estatica</h3>
              <p>
                Pre-renderizado de sitios para eliminar base de datos en frontend y
                reducir superficie de ataque frente a inyecciones o ejecucion
                maliciosa.
              </p>
            </article>
            <article>
              <h3>Motor de plantillas estandarizado</h3>
              <p>
                Componentes UI/UX validados por RR.PP. que garanticen cumplimiento
                automatico de identidad visual en todos los sitios.
              </p>
            </article>
            <article>
              <h3>Mantenibilidad evolutiva</h3>
              <p>
                Enfoque de codigo abierto interno para integrar evolucion y soporte
                tecnico al curriculum de practicas profesionales.
              </p>
            </article>
            <article>
              <h3>Gestion de activos academicos</h3>
              <p>
                Modulos para preservar informacion historica y trazabilidad del
                curriculum academico sin comprometer seguridad del servidor.
              </p>
            </article>
          </div>
        </section>

        <section className="content-block">
          <div className="section-head">
            <p>3.5 Analisis de trabajos previos</p>
            <h2>Aprendizajes frente a CMS tradicionales</h2>
          </div>
          <p className="single-copy">
            Se analizaron herramientas como WordPress y CMS libres. Aunque ofrecen
            flexibilidad, presentan riesgo alto en seguridad y permiten romper la
            linea editorial cuando el control de plantillas es bajo. La propuesta
            de este proyecto prioriza integridad de imagen institucional y
            seguridad del servidor mediante plantillas controladas.
          </p>
        </section>

        <section className="content-block">
          <div className="section-head">
            <p>3.6 Justificacion del proyecto</p>
            <h2>Impacto esperado en seguridad, SEO y continuidad academica</h2>
          </div>
          <p className="single-copy">
            El modelo actual de gestion manual y descentralizada de sitios web en
            FACE presenta deficiencias criticas en seguridad y visibilidad
            institucional.
          </p>
          <ul className="benefit-list">
            <li>
              Minimizar riesgos de ciberseguridad mediante transicion desde CMS
              dinamicos a generacion estatica.
            </li>
            <li>
              Optimizar posicionamiento organico con limpieza de contenido residual
              y mejora de tiempos de carga.
            </li>
            <li>
              Garantizar continuidad y visibilidad academica de congresos y
              registros historicos en el tiempo.
            </li>
          </ul>
        </section>

        <section className="content-block" id="objetivos">
          <div className="section-head">
            <p>3.7 Objetivos</p>
            <h2>Direccion estrategica del proyecto y del software</h2>
          </div>

          <article className="objective-card">
            <h3>3.7.1 Objetivo general del proyecto</h3>
            <p>
              Desarrollar una plataforma de generacion de software que unifique y
              asegure la presencia web de la FACE, automatizando el cumplimiento de
              estandares graficos y eliminando vulnerabilidades tecnologicas
              mediante un stack moderno y mantenible.
            </p>
          </article>

          <article className="objective-card">
            <h3>3.7.2 Objetivos especificos del proyecto</h3>
            <ol>
              <li>
                Diagnosticar situacion actual y vulnerabilidades de subdominios
                FACE para identificar brechas de seguridad y obsolescencia.
              </li>
              <li>
                Establecer estandares graficos y requerimientos de hosting junto a
                RR.PP. e Informatica para identidad unificada.
              </li>
              <li>
                Disenar arquitectura basada en generacion estatica con Node.js para
                minimizar ataque y mejorar respuesta.
              </li>
              <li>
                Construir plataforma generadora y modulos de plantillas para sitios
                academicos y difusion institucional.
              </li>
              <li>
                Evaluar desempeno y sostenibilidad mediante plan piloto real,
                midiendo eficiencia de mantenimiento y seguridad.
              </li>
            </ol>
          </article>

          <article className="objective-card">
            <h3>3.7.3 Objetivo general del software</h3>
            <p>
              El software, mediante generacion automatizada y plantillas
              controladas, permite a la Facultad de Ciencias Empresariales reducir
              riesgos de seguridad informatica, eliminar dispersion estetica y
              aumentar eficiencia en el despliegue de nuevos portales academicos.
            </p>
          </article>
        </section>

        <section className="content-block" id="metodologia">
          <div className="section-head">
            <p>4. Metodologia a utilizar</p>
            <h2>Enfoque agil con prototipado evolutivo</h2>
          </div>

          <p className="single-copy">
            Se selecciona Metodologia Agil con enfoque en Prototipado Evolutivo por
            su alta dependencia de validacion visual y editorial por parte de
            RR.PP. El enfoque incremental permite validar temprano la compatibilidad
            tecnica con servidores y mejorar usabilidad con personal administrativo.
          </p>

          <div className="table-wrap" role="region" aria-label="Tabla de caracteristicas del proyecto">
            <table>
              <caption>Tabla 1: Caracteristicas del proyecto</caption>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Nivel</th>
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {characteristics.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td>{row.level}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="validation-grid">
            <article>
              <h3>Validacion tecnica</h3>
              <p>
                Asegurar compatibilidad con servidores administrados en Chillan
                desde etapas tempranas.
              </p>
            </article>
            <article>
              <h3>Validacion de usabilidad</h3>
              <p>
                Refinar interfaces de carga de contenido con personal
                administrativo antes del despliegue final.
              </p>
            </article>
            <article>
              <h3>Reduccion de incertidumbre</h3>
              <p>
                Mitigar riesgos de seguridad con ciclos cortos de pruebas de estres
                en cada modulo desarrollado.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block" id="plan">
          <div className="section-head">
            <p>5. Plan de trabajo a desarrollar</p>
            <h2>Actividades para cumplir los objetivos especificos</h2>
          </div>
          <div className="workplan-grid">
            {activitiesByObjective.map((block, index) => (
              <article key={block.objective} className="workplan-card">
                <h3>
                  {index + 1}. {block.objective}
                </h3>
                <ol>
                  {block.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>FACE - Universidad del Bio-Bio</p>
        <small>
          Documento base de proyecto: Seguridad, estandarizacion editorial y
          sostenibilidad para portales institucionales.
        </small>
      </footer>
    </div>
  )
}

export default App
