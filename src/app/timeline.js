import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(82, 82, 91)', color: '#FFF' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(82, 82, 91)'}}
              date="2023 - 2024"
              iconStyle={{ background: 'rgb(82, 82, 91)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBook} className="fas fa-check" style={{ color: "white" }}></FontAwesomeIcon>}
              
            >
              <h3 className="vertical-timeline-element-title">Estagiário em desenvolvimento de software</h3>
              <h4 className="vertical-timeline-element-subtitle">Jundiaí, SP</h4>
              <p>
              Atuava como desenvolvedor em diversos softwares empresariais aplicando novas ferramentas e melhorando as já existentes. Para essa vaga usei pricipalmente as seguintes linguagens
              de programação PHP, Python, C# e mysql
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(82, 82, 91)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(82, 82, 91)' }}
              date="2024 - present"
              iconStyle={{ background: 'rgb(82, 82, 91)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBook} className="fas fa-check" style={{ color: "white" }}></FontAwesomeIcon>}
            >
              <h3 className="vertical-timeline-element-title">Desenvolvedor</h3>
              <h4 className="vertical-timeline-element-subtitle">Várzea Paulista, SP</h4>
              <p>
                Atualmente estou prestando serviços autônomos, focando na área de automação de processos com Python, e o desenvolvimento de softwares e websites
              </p>
            </VerticalTimelineElement>
        </VerticalTimeline>  
    )
}

export default Timeline;