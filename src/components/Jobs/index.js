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
    title: 'IT, Sales and Logistic Assistant',
    subTitle: 'French e-commerce website dedicated to running, biking and trekking products',
    logo: logoSportshop,
    description: (
      <>
        While studying in high school, I wanted to start working to gain my first professional experience and make a living on my own.
        <br />
        <br />
        Linking one of my passions, cycling, to work, I was an IT, sales and logistics assistant at Sportshop.fr. Pioneer in the ecommerce sector of running, cycling and trekking items, Sportshop.fr offered me the opportunity to occupy several positions and to discover lots of jobs: Store salesman, remote salesman, after-sales service agent, customer advisor, order picker and web developer. In 3 years, I was able to discover a multitude of trades.
      </>
    ),
  },
  {
    name: '2013-2016 - Allbikestore.fr',
    color: '#ffffff',
    backgroundColor: '#0034b4',
    title: 'Co-founder & CTO',
    subTitle: 'French e-commerce website dedicated to biking products',
    logo: logoAllbikestore,
    description: (
      <>
        With the experience brought by my first job, I decided, with one of my closest friends, to embark on the adventure of entrepreneurship.
        <br />
        <br />
        Linking this desire and our common passion for cycling, we then launched our own company: Allbikestore.fr
        <br />
        <br />
        We specialized our products catalog on items unknown in France, high-tech items and items in high demand by cyclists.
        <br />
        <br />
        My roles in the company were:
        <br />
        <ul>
          <li>Taking charge of all technical interfaces (front-office / back-office websites) and logistics (order preparation and shipping softwares)</li>
          <li>Preparation and shipping of orders</li>
          <li>After-sales service</li>
        </ul>
      </>
    ),
  },
  {
    name: '2016-2018 - Recast.AI',
    backgroundColor: 'rgb(245, 195, 75)',
    title: 'Full Stack Engineer',
    subTitle: 'Successfull startup building an AI technology and chatbots. Acquire by SAP in 2016',
    logo: logoRecast,
    description: (
      <>
      </>
    ),
  },
  {
    name: '2018-2019 - SAP',
    color: '#ffffff',
    backgroundColor: 'rgb(69, 160, 223)',
    title: 'Senior Software Engineer & Team Manager',
    subTitle: 'Managing teams of developer and data-scientist to improve the AI chatbot technology',
    logo: logoSAP,
    description: (
      <>
      </>
    ),
  },
  {
    name: 'From 2019 - Eutelsat',
    color: '#ffffff',
    backgroundColor: 'rgb(51, 125, 181)',
    title: 'Senior Software Engineer',
    subTitle: 'Create a digital transformation impulse and digitize usefull services',
    logo: logoEutelsat,
    description: (
      <>
      </>
    ),
  },
];

const primaryJobs = [
  {
    jobTitle: 'IT Assistant',
    color: '#eb872a',
  },
  {
    jobTitle: 'Co-founder & CTO',
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
    jobTitle: 'Sales Assistant',
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
        <div className="row">
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
          <div className="row jobProgress mt1">
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
          <div className="row jobProgress mt1">
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
