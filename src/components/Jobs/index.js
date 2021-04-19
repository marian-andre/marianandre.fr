import React, { PureComponent } from 'react';
import { Label, Card, Image } from 'semantic-ui-react';
import { ProgressBar, Step } from 'react-step-progress-bar';

import { isCurrentItem } from '../../helpers/utils';

import './Jobs.css';

import logoSportshop from '../../assets/sportshop.jpg';
import logoAllbikestore from '../../assets/allbikestore.png';
import logoRecast from '../../assets/recastai.png';
import logoSAP from '../../assets/sap.svg';
import logoEutelsat from '../../assets/eutelsat.png';

const margin = 20;

const jobs = [
  {
    name: '2010-2013 - Sportshop.fr',
    color: '#ffffff',
    backgroundColor: 'rgb(47, 107, 171)',
    title: 'Assistant informatique, logistique et vente',
    subTitle: 'Plateforme ecommerce française dédiée aux produits running, trekking et cyclistes',
    logo: logoSportshop,
    description: (
      <>
        Tout en étant étudiant, je souhaitais commencer à travailler et me forger une expérience professionnelle.
        <br />
        <br />
        Liant ma passion pour le cyclisme à ce premier emploi, je fût assistant informatique, logistique et vente chez Sportshop.fr.
        <br />
        Pionnier dans le secteur du ecommerce dédié aux articles de runnings, de trekking et de cyclisme, Sportshop.fr m&apos;offert l&apos;opportunité d&apos;occuper plusieurs postes et de découvrir plusieurs emplois: vendeur en magasin, opérateur de SAV, préparateur de commande et développeur web.
      </>
    ),
  },
  {
    name: '2013-2016 - Allbikestore.fr',
    color: '#ffffff',
    backgroundColor: '#0034b4',
    title: 'Co-fondateur & CTO',
    subTitle: 'Plateforme ecommerce dédiée aux produits cyclistes',
    logo: logoAllbikestore,
    description: (
      <>
        Avec l&apos;expérience apportée par mon premier emploi, j&apos;ai décidé, avec l&apos;un de mes plus proches amis, d&apos;embarquer dans l&apos;aventure de l&apos;entreprenariat.
        <br />
        <br />
        Liant notre vision et notre passion commune du cyclisme, nous avons alors lancé notre société: Allbikestore.fr
        <br />
        <br />
        Nous avons basé notre catalogue produits sur des objets inconnus en France, high-tech ou à forte demande.
        <br />
        <br />
        En tant que CTO, mes rôles dans l&apos;enteprise étaient:
        <br />
        <ul>
          <li>La gestion de toute l&apos;infrastructure technique (sites Front-office / Back-Office) et logistique (logiciel de préparation de commandes et d&apos;expédition)</li>
          <li>La préparation et l&apos;expédition des commandes</li>
          <li>La gestion du service après-vente</li>
        </ul>
      </>
    ),
  },
  {
    name: '2016-2018 - Recast.AI',
    backgroundColor: 'rgb(245, 195, 75)',
    title: 'Full Stack Engineer',
    subTitle: 'Startup à succès permettant de créer des chatbots avec de l\'intelligence artificielle. Acquise par SAP en 2016.',
    logo: logoRecast,
    description: (
      <>
        Arrivé en early-stage dans la startup Recast.AI
        <br />
        Mise en place de l&apos;infrastructure logicielle de la plateforme NLP
        <br />
        Développement des fonctionnalités B2B et B2C
        <br />
        Migrations d’infrastructures cloud (Microsoft Azure, Amazon Web Services)
        <br />
        Réalisation de projets client chatbot (SFR, Bouygues Telecom, EDF, Europ Assistance, AirRefund)
        <br />
        Gestion des plannings de développement et de la livraison des fonctionnalités
      </>
    ),
  },
  {
    name: '2018-2019 - SAP',
    color: '#ffffff',
    backgroundColor: 'rgb(69, 160, 223)',
    title: 'Senior Software Engineer & Team Manager',
    subTitle: 'Manager de deux équipes de développeurs et de data-scientists',
    logo: logoSAP,
    description: (
      <>
        Rachat de Recast.AI par SAP
        <br />
        Management d&apos;équipes de développeurs et de data-scientists:
        <br />
        <ul>
          <li>People management</li>
          <li>Animation des équipes (Scrum Master)</li>
          <li>Gestion de la livraison des fonctionnalités</li>
          <li>Gestion des plannings de développement</li>
          <li>Garant de la qualité des livrables</li>
        </ul>
        <br />
        Développement de fonctionnalités à fortes valeurs ajoutées sur l&apos;ensemble de la plateforme.
      </>
    ),
  },
  {
    name: 'From 2019 - Eutelsat',
    color: '#ffffff',
    backgroundColor: 'rgb(51, 125, 181)',
    title: 'Senior Software Engineer',
    subTitle: 'Digitaliser les services à forte valeur ajoutée',
    logo: logoEutelsat,
    description: (
      <>
        Création de services innovants au sein de la Direction des Nouvelles Applications:
        <br />
        <br />
        Création et gestion de l’environnement technique de la marque SAT.TV (backends, pipeline de guide de programmes, interfaces de gestion opérationnelle), en relation direct avec les équipes produits. Des fournisseurs de guide de programmes EPG à la box satellite de l&apos;utilisateur, le système gère automatiquement la diffusion des metadata, permettant la construction d’une interface inédite et exclusive pour les utilisateurs finaux. Le produit SAT.TV a reçu le prix «Outstanding Initiative From a Satellite Company» en 2021
        <br />
        <br />
        Création de l&apos;environnement technique du projet Eutelsat Low Orbit (ELO): Apporter la connectivité par satellite à l&apos;IOT. De l’émission des messages par les terminaux IOT à la livraison de ceux-ci aux prestataires (dont Sigfox), le produit ELO permet de s&apos;affranchir des zones blanches pour des projets ambitieux: tracking de troupeaux animaliers, senseurs météorologiques dans les exploitations agricoles ou encore géolocalisation
        <br />
        <br />
        Création et gestion de l&apos;infrastructure Cloud AWS d&apos;Eutelsat:
        <ul>
          <li>Mise en place de l&apos;architecture Amazon Web Services</li>
          <li>Gestion des ressources Cloud</li>
          <li>Initiation et formation des équipes</li>
        </ul>
      </>
    ),
  },
];

const primaryJobs = [
  {
    jobTitle: 'Assistant IT',
    color: '#eb872a',
  },
  {
    jobTitle: 'Co-fondateur & CTO',
    color: '#d63333',
  },
  {},
  {
    jobTitle: 'Team Manager',
    color: '#a31081',
  },
  {},
];

const secondaryJobs = [
  {
    jobTitle: 'Assistant Vente',
    color: '#1aad44',
  },
  {
    jobTitle: 'Software Engineer',
    color: '#2a9beb',
    width: 4,
  },
];

const computeItemsLength = (items) => items.reduce((acc, cur) => {
  if (cur.width) { return acc + cur.width; }

  return acc + 1;
}, 0);

const computeStepSpace = (items, index) => {
  const itemsLength = computeItemsLength(items);

  const totalSpace = (100 - 2 * margin);
  const oneSpace = totalSpace / (itemsLength - 1);

  // Compute previous size
  let previousSize = margin;

  if (index > 0) {
    for (let i = 0; i < index; i += 1) {
      const currentItem = items[i];
      previousSize += (currentItem.width * oneSpace || oneSpace);
    }
  }

  return previousSize;
};

const isEndItem = (items, index) => {
  if (index < items.length - 1) {
    const nextItems = items.slice(index + 1);

    return !nextItems.find((item) => item && item.color);
  }

  return true;
};

const computeBackgoundProgressBar = (items, step) => {
  const colors = [];
  const reduceGlobalMargin = 10;
  const localMargin = Math.max(margin - reduceGlobalMargin, 0);
  let firstColor = '';
  let lastColor = '';

  const itemsLength = computeItemsLength(items);

  const totalSpace = (100 - 2 * margin);
  const oneSpace = totalSpace / (itemsLength - 1);

  if (itemsLength) {
    items.forEach((item, idx) => {
      const jobSize = (((100 - 2 * localMargin) / itemsLength) * (item.width || 1));
      let color = '#282c34';
      if (item && item.color) {
        color = isCurrentItem(items, idx, step) ? item.color : '#666666';
      }

      const itemPosition = computeStepSpace(items, idx);
      const startJob = itemPosition - Math.round(oneSpace / 2);
      let endJob = startJob + jobSize;

      if (isEndItem(items, idx)) {
        endJob -= (item.width || 1) - 1;
      }

      if (firstColor.length === 0) {
        firstColor = `#282c34, #282c34 ${localMargin}%`;
      }

      lastColor = `#282c34 ${100 - localMargin}%, #282c34`;

      colors.push(`${color} ${startJob + 1}%, ${color} ${endJob - 1}%`);
    });
  }

  colors.unshift(firstColor);
  colors.push(lastColor);

  return `linear-gradient(to right, ${colors.join(', ')})`;
};

class Jobs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: jobs.length - 1,
    };
  }

  changeStep(step) {
    this.setState({ step });
  }

  render() {
    const { step } = this.state;

    const item = jobs[step];

    return (
      <div id="jobs">
        <div className="row section-title">
          <div className="title-l">Jobs</div>
        </div>
        <div className="row full-width">
          <ProgressBar
            percent={100}
            filledBackground="linear-gradient(to right, #282c34, #282c34 3%, #dddddd 6%, #dddddd 94%, #282c34 97%, #282c34)"
            unfilledBackground="#dddddd"
            width="80%"
            stepPositions={jobs.map((_, idx) => computeStepSpace(jobs, idx))}
          >
            {jobs.map((job, idx) => (
              <Step key={idx}>
                {({ accomplished, index }) => {
                  const isCurrentElem = isCurrentItem(jobs, index, step);
                  const labelStyle = {};
                  const circularStyle = {};

                  if (isCurrentElem) {
                    labelStyle.backgroundColor = job.backgroundColor;
                    labelStyle.color = job.color;
                    circularStyle.backgroundColor = job.backgroundColor;
                  }

                  return (
                    <div
                      className={`column indexedStep ${accomplished ? 'accomplished' : null}`}
                      onClick={() => this.changeStep(index)}
                    >
                      <Label pointing="below" style={labelStyle}>{job.name}</Label>
                      <Label circular className={step === index ? 'active' : ''} style={circularStyle} />
                    </div>
                  );
                }}
              </Step>
            ))}
          </ProgressBar>
        </div>
        {primaryJobs.length > 0 && (
          <div className="row full-width jobProgress mt1">
            <ProgressBar
              percent={100}
              filledBackground={computeBackgoundProgressBar(primaryJobs, step)}
              unfilledBackground="#dddddd"
              width="80%"
              stepPositions={primaryJobs.map((_, idx) => computeStepSpace(primaryJobs, idx))}
            >
              {primaryJobs.map((job, idx) => (
                <Step key={idx} style={{ backgroundColor: job.color }}>
                  {({ accomplished, index }) => (
                    <div
                      className={`column indexedStep ${accomplished ? 'accomplished' : null}`}
                      onClick={() => this.changeStep(index)}
                    >
                      {job.jobTitle}
                    </div>
                  )}
                </Step>
              ))}
            </ProgressBar>
          </div>
        )}
        {secondaryJobs.length > 0 && (
          <div className="row full-width jobProgress mt1">
            <ProgressBar
              percent={100}
              filledBackground={computeBackgoundProgressBar(secondaryJobs, step)}
              unfilledBackground="#dddddd"
              width="80%"
              stepPositions={secondaryJobs.map((_, idx) => computeStepSpace(secondaryJobs, idx))}
            >
              {secondaryJobs.map((job, idx) => (
                <Step key={idx} style={{ backgroundColor: job.color }}>
                  {({ accomplished, index }) => (
                    <div
                      className={`column indexedStep ${accomplished ? 'accomplished' : null}`}
                      onClick={() => this.changeStep(index)}
                    >
                      {job.jobTitle}
                    </div>
                  )}
                </Step>
              ))}
            </ProgressBar>
          </div>
        )}
        <div className="row card-section">
          <Card style={{ width: '60%' }}>
            <Card.Content>
              {item.logo && (
                <Image
                  floated="right"
                  size="mini"
                  src={item.logo}
                />
              )}
              <Card.Header className={item.logo ? 'ml3' : ''}>{item.title}</Card.Header>
              <Card.Meta className={item.logo ? 'ml3' : ''}>{item.subTitle}</Card.Meta>
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

export default Jobs;
