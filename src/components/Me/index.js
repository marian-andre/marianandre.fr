import React, { PureComponent } from 'react';
import { Image } from 'semantic-ui-react';

import './Me.css';

import mandre from '../../assets/mandre.jpg';
import french from '../../assets/french.jpg';

class Me extends PureComponent {
  render() {
    return (
      <div id="me">
        <div className="column ml8 mr2">
          <div className="row relative">
            <Image src={mandre} className="profile-pic" size="medium" />
          </div>
          <div className="row relative mt2">
            <Image src={french} className="profile-flag" />
          </div>
        </div>
        <div className="column mr8 ml2 section-title">
          <div className="row title-l">Marian André</div>
          <div className="row mt1 title-caption"> Born in 1993 - Live near Paris, France</div>
          <div className="row mt2">In 2010, I wanted to start working on my own and build a first strong profesionnal experience.</div>
          <div className="row mt1">I decided to link my first passion to this first job: cyclism. I started to work as all-in-one assistant in a ecommerce company: Sportshop.fr.</div>
          <div className="row mt1">After 3 years, I decided to create my own company with one of my closest friends, to provid the service I have learnt in my past job, on my own.</div>
          <div className="row">Entrepreneurship and hard-working were the keywords of this travel, named Allbikestore.fr.</div>
          <div className="row">Being the CTO of the company, I build from start the ecommerce webiste. My other roles were also to managed any technical resources of the company, taking care of orders and managing the after-sales service. For many personal reasons, we stop the journey in 2016.</div>
          <div className="row mt1">Then, I was the first employee, as Software Engineer, of a very promising French Startup: Recast.AI.</div>
          <div className="row">With the impulsion of a famous french startup founder, Patrick Joubert, we have created an artificial intelligence able to understand real human languages (Natural Language Processing).</div>
          <div className="row">The chatbot world thus has come to us. In two years, we built an amazing platform, where users can build chatbots, using our own AI, for free.</div>
          <div className="row">This successfull story caught the eye of SAP, the worldwide Cloud Software company.</div>
          <div className="row mt1">While Recast.AI has been acquired by SAP AI in 2018, I wanted to improve in my skills. This were the opportunity to embrass the world of people management. Managing two teams of technical people (Software Engineers and Data-scientists), I have learnt many competences from the SAP management expertise.</div>
          <div className="row mt1">Life is made of opportunity and one appears to me in 2019: join one of the world&apos;s leading satellite operator: Eutelsat, with one mission: digitize the services.</div>
          <div className="row">Leaving the world of management, non-definitively, I come back to my first love: the software development.</div>
          <div className="row">From 2019, I create automate services who change people lifes. For example, Eutelsat has launched in 2020 the brand new sat.tv service, allowing millions of people to benefits enriched EPG experience.</div>
        </div>
      </div>
    );
  }
}

export default Me;
