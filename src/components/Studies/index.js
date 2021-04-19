import React, { PureComponent } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { Label, Card, Image } from 'semantic-ui-react';

import { isCurrentItem } from '../../helpers/utils';

import './Studies.css';

import logoUVSQ from '../../assets/uvsq.jpg';
import logoHEC from '../../assets/HEC_Paris.svg';
import logo42 from '../../assets/42_logo_black.svg';

const items = [
  {
    name: '2011-2013 - UVSQ',
    color: '#ffffff',
    backgroundColor: 'rgb(140, 184, 68)',
    title: 'Université de Versailles Saint-Quentin-En-Yvelines',
    subTitle: '2 years en License d\'informatique',
    logo: logoUVSQ,
    description: (
      <>
        La licence d&apos;informatique permet de se former aux métiers du développement et du digital.
      </>
    ),
  },
  {
    name: '2014 - HEC',
    color: '#ffffff',
    backgroundColor: 'rgb(23, 66, 118)',
    title: 'HEC - Hautes Études Commerciales',
    subTitle: 'Digital Transformation Certificate',
    logo: logoHEC,
    description: (
      <div className="column">
        <div className="row mb1">
          Le Digital Transformation Certificate m&apos; permis d&apos;aborder et de comprendre les différents aspects de la transformation digitale des entreprises, à l&apos;aide d&apos;ouvrages dédiés, de témoignages de managers de diverses entreprises et de projets concrets.
        </div>
        <div className="row">
          <div className="column column-equal">
            <span className="title-s">Objectifs</span>
            <br />
            <br />
            Quelque-soit le parcours de l&apos;étudiant, le certificat permet à celui-ci d&apos;être le moteur de la transformation digitale d&apos;une entreprise
          </div>
          <div className="column column-equal">
            <span className="title-s">Les grands principes du certificat:</span>
            <br />
            <br />
            <ul>
              <li>Stratégie digitale</li>
              <li>Management de projets digitaux</li>
              <li>Gestion du changement</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: '2013-2016 - École 42',
    color: '#ffffff',
    backgroundColor: '#000000',
    title: 'École 42',
    subTitle: 'Self-learning of IT jobs',
    logo: logo42,
    description: (
      <>
        L&apos;école 42 est une école innovante spécialisée dans l&apos;ingénieurie et la programmation. Le programme prépare les étudiants à trouver leur place dans cette industrie, en leur apportant les connaissances nécessaires.
        <br />
        <br />
        Le programme est rigide mais flexible: certains projets doivent être réalisés dans un ordre particulier, tandis que les étudiants sont libres d&apos;explorer. Les projets durent de 48 heures à 6 mois, selon leur profondeur et leur complexité. Les projets sont corrigés par des pairs et les étudiants acquièrent des compétences techniques ainsi que des compétences interpersonnelles, la gestion du temps et la gestion de projet.
      </>
    ),
  },
];

const computeStepSpace = (idx) => {
  if (items.length === 1) { return 50; }

  const margin = 20;

  if (idx === 0) { return margin; }
  if (idx === items.length - 1) { return 100 - margin; }

  const leftItemNumber = items.length - 2;
  const space = (100 - 2 * margin) / (leftItemNumber + 1);

  return (space * idx) + margin;
};

class Studies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: items.length - 1,
    };
  }

  changeStep(step) {
    this.setState({ step });
  }

  render() {
    const { step } = this.state;

    const item = items[step];

    return (
      <div id="studies">
        <div className="row section-title">
          <div className="title-l">Studies</div>
        </div>
        <div className="row full-width">
          <ProgressBar
            percent={100}
            filledBackground="linear-gradient(to right, #282c34, #282c34 3%, #dddddd 6%, #dddddd 94%, #282c34 97%, #282c34)"
            unfilledBackground="#dddddd"
            width="80%"
            stepPositions={items.map((_, idx) => computeStepSpace(idx))}
          >
            {items.map((i, idx) => (
              <Step key={idx}>
                {({ accomplished, index }) => {
                  const isCurrentElem = isCurrentItem(items, index, step);
                  const labelStyle = {};
                  const circularStyle = {};

                  if (isCurrentElem) {
                    labelStyle.backgroundColor = i.backgroundColor;
                    labelStyle.color = i.color;
                    circularStyle.backgroundColor = i.backgroundColor;
                  }
                  return (
                    <div
                      className={`column indexedStep ${accomplished ? 'accomplished' : null}`}
                      onClick={() => this.changeStep(index)}
                    >
                      <Label pointing="below" style={labelStyle}>{i.name}</Label>
                      <Label circular lassName={step === index ? 'active' : ''} style={circularStyle} />
                    </div>
                  );
                }}
              </Step>
            ))}
          </ProgressBar>
        </div>
        <div className="row card-section">
          <Card style={{ width: '60%' }}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={item.logo}
              />
              <Card.Header className="ml3">{item.title}</Card.Header>
              <Card.Meta className="ml3">{item.subTitle}</Card.Meta>
              <Card.Description>
                {item.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default Studies;
