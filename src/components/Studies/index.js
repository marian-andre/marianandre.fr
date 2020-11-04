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
    subTitle: '2 years in Computer Science Degree',
    logo: logoUVSQ,
    description: (
      <>
        The Computer Science degree aims to train high-level computer scientists who know the foundations and modern techniques of computer science, to make them either lead to working life, or to pursue master&apos;s studies, giving them the ability to understand easily future developments in information and communication technologies.
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
          The Certificate Digital Transformation copes with this issue through lectures, testimonials from top managers from diverse companies, and several projects – the largest part of the program– that will immerse students in the various aspects of digital transformation. The Certificate is developed through the close relationship with large leading companies, as well as the collaboration of key consulting companies.
        </div>
        <div className="row">
          <div className="column column-equal">
            <span className="title-s">Objective</span>
            <br />
            <br />
            Whatever the original training, to get the student prepared for managing the digital issues that the company he/she will enter –or advice– will face.
          </div>
          <div className="column column-equal">
            <span className="title-s">Principles</span>
            <br />
            <br />
            <ul>
              <li>Digital strategy</li>
              <li>Digital project management</li>
              <li>Change management</li>
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
        42 is an innovative engineering and programming college that offers rigorous, industry-leading education in a professional environment. Our program is designed to prepare students for the workplace using an instructional design that means students learn skills for the digital world and for the technology industry.
        <br />
        <br />
        Our program is rigid yet flexible: certain projects are required in a particular order, while others students are free to pursue and explore. Projects range from 48 hours to 6 months, depending on their depth and complexity. Projects are corrected by peers, and students learn technical skills as well as interpersonal skills, time management, and project management.
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
        <div className="row">
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
