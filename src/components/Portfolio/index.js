import React, { PureComponent } from 'react';
import { Image } from 'semantic-ui-react';

import './Portfolio.css';

import vicod from '../../assets/screen_vicod.jpg';
import me from '../../assets/screen_me.png';
import sattv from '../../assets/screen_sattv.png';
import recastai from '../../assets/screen_recast.jpg';
import allbikestore from '../../assets/screen_allbikestore.png';
import backend from '../../assets/screen_backend.png';

const projects = [
  {
    title: 'Vicod',
    year: 2020,
    image: vicod,
    description: (
      <>
        Android / iOS application prototype to digitize bartender customers book
        <br />
        The application won&apos;t launched because the french government has announced they will include this feature in the &quot;Tous Anti-Covid&quot; application
      </>
    ),
    showInFirst: true,
  },
  {
    title: 'marianandre.fr',
    year: 2020,
    image: me,
    description: 'My own website made with ReactJS',
  },
  {
    title: 'Eutelsat SAT.TV',
    year: 2020,
    image: sattv,
    description: 'Internal management platform of the SAT.TV service',
  },
  {
    title: 'Recast.AI',
    year: 2017,
    image: recastai,
    description: 'Natural Language Processing AI and chatbots platform',
  },
  {
    title: 'Allbikestore.fr',
    year: 2014,
    image: allbikestore,
    description: 'Ecommerce website for cycling products',
  },
  {
    title: 'Backend',
    image: backend,
    description: 'And many backend and script projects usefull anytime in companies',
  },
];

class Portfolio extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentProjectId: projects.findIndex((p) => p.showInFirst) || 0,
    };
  }

  changeProject(currentProjectId) {
    this.setState({ currentProjectId });
  }

  render() {
    const { currentProjectId } = this.state;

    const rowProjects = projects.reduce((acc, cur, index) => {
      const rowIndex = Math.floor(index / 2);

      if (acc.length === rowIndex) {
        acc.push([[], []]);
      }

      acc[rowIndex][index % 2] = cur;

      return acc;
    }, []);

    const currentProject = projects[currentProjectId];

    return (
      <div id="portfolio">
        <div className="row mb1 title-l">Portfolio</div>
        <div className="row mt2">
          <div className="column protfolio-projects-list mx4">
            {rowProjects.map((p, idx1) => (
              <div key={idx1} className="row portoflio-projects">
                {p.map((project, idx2) => (
                  <div
                    key={`${idx1}-${idx2}`}
                    className={`portoflio-project ${!project || !project.image ? 'empty-project' : ''} ${idx1 * 2 + idx2 === currentProjectId ? 'current-portfolio' : ''}`}
                    onClick={() => this.changeProject(idx1 * 2 + idx2)}
                  >
                    {project && project.image && (
                      <>
                        <Image src={project.image} ui={false} className="profolio-image" />
                        <div className="project-title">{project.title}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="protfolio-project-detail column mr8">
            <div className="row title-m">{`${currentProject.title}${currentProject.year ? ` - ${currentProject.year}` : ''}`}</div>
            <div className="row mt1">
              <Image src={currentProject.image} ui={false} className="profolio-image-detail" />
            </div>
            <div className="row mt1 title-xs title-caption">{currentProject.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
