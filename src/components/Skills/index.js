import React, { PureComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faNode,
  faPhp,
  faPython,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGem,
  faMobileAlt,
  faUsers,
  faCalendarCheck,
  faSearchDollar,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGem as faGemAlt,
} from '@fortawesome/free-regular-svg-icons';
// import { Image } from 'semantic-ui-react';

import './Skills.css';

const groupedSkills = [
  {
    name: 'Management',
    skills: [
      {
        title: (
          <>
            People & Team
            <br />
            Management
          </>
        ),
        icon: faUsers,
        color: 'rgb(215, 51, 132)',
      },
      {
        title: (
          <>
            Delivery & Planning
            <br />
            Management
          </>
        ),
        icon: faCalendarCheck,
        color: 'rgb(76, 167, 88)',
      },
      {
        title: (
          <>
            Crisis Management
            <br />
            Communication
          </>
        ),
        icon: faBullhorn,
        color: 'rgb(255, 0, 0)',
      },
    ],
  },
  {
    name: 'Fontend',
    skills: [
      {
        title: 'Javascript',
        icon: faJs,
        color: 'rgb(236, 215, 77)',
      },
      {
        title: 'ReactJS',
        icon: faReact,
        color: 'rgb(125, 209, 239)',
      },
      {
        title: 'ReactNative',
        icon: faMobileAlt,
        color: 'rgb(70, 159, 199)',
      },
      {
        title: 'HTML5',
        icon: faHtml5,
        color: 'rgb(218, 106, 56)',
      },
      {
        title: 'CSS3',
        icon: faCss3Alt,
        color: 'rgb(83, 163, 209)',
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        title: 'NodeJS',
        icon: faNode,
        color: 'rgb(143, 196, 72)',
      },
      {
        title: 'Ruby',
        icon: faGem,
        color: 'rgb(169, 42, 24)',
      },
      {
        title: 'RubyOnRails',
        icon: faGemAlt,
        color: 'rgb(182, 38, 25)',
      },
      {
        title: 'PHP',
        icon: faPhp,
        color: 'rgb(115, 120, 170)',
      },
      {
        title: 'Python',
        icon: faPython,
        color: 'rgb(65, 106, 147)',
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        title: (
          <>
            AWS Cloud
            <br />
            Infrastructure
          </>
        ),
        icon: faAws,
        color: 'rgb(234, 152, 54)',
      },
      {
        title: 'SEO',
        icon: faSearchDollar,
        color: 'rgb(76, 163, 230)',
      },
    ],
  },
];

class Skills extends PureComponent {
  render() {
    return (
      <div id="skills">
        <div className="row mb1 title-l">Skills</div>
        <div className="column mt2">
          {groupedSkills.map((group, idx1) => (
            <div key={idx1} className="row mx4">
              <div className="row group-name align-center title-l my1 mr4">{group.name}</div>
              <div className="row align-center my1 column-equal">
                {group.skills.map((skill, idx2) => (
                  <div key={`${idx1}-${idx2}`} className="column align-center mx1" style={{ color: skill.color }}>
                    <FontAwesomeIcon icon={skill.icon} className="mb1" size="4x" />
                    {skill.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
