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
        Prototype d&apos;application visant à digitaliser les cahiers de rappel des restaurants et des bars.
        <br />
        L&apos;application ne sera pas lancée, le gouvernement français ayant annoncé inclure cette fonctionnalité dans l&apos;application &quot;Tous Anti-Covid&quot;.
      </>
    ),
    showInFirst: true,
  },
  {
    title: 'marianandre.fr',
    year: 2020,
    image: me,
    description: 'Mon site internet créé avec ReactJS',
  },
  {
    title: 'Eutelsat SAT.TV',
    year: 2020,
    image: sattv,
    description: 'Plateforme de gestion du service SAT.TV',
  },
  {
    title: 'Recast.AI',
    year: 2017,
    image: recastai,
    description: 'Inteligence artificielle en Natural Language Processing et plateforme permettant de créer des chatbots',
  },
  {
    title: 'Allbikestore.fr',
    year: 2014,
    image: allbikestore,
    description: 'Plateforme ecommerce de produits dédiés à la pratique du cyclisme',
  },
  {
    title: 'Backend',
    image: backend,
    description: 'Et plusieurs applications backend et scripts permettant d\'automatiser ou d\'accélerer le traitement de la donnée',
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
