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
          <div className="row mt1 title-caption"> Né en 1993 - Près de Paris, France</div>
          <div className="row mt2">En 2010, je souhaitais travailler pour me construire une expérience professionnelle.</div>
          <div className="row mt1">J&apos;ai alors décidé de lier ma passion à ce premier emploi: le cyclisme. J&apos;ai commencé à travailler pour la société ecommerce Sportshop.fr, comme assistant informatique, logistique et vente.</div>
          <div className="row mt1">Après 3 ans, j&apos;ai décidé to créer ma propre société, accompagné d&apos;un de mes plus proches amis. Nous souhaitions offrir le service que nous avions appris dans notre précédent emploi, en apportant une dimension technologique à notre projet.</div>
          <div className="row">Entreprenariat et travailler sans compter ses heures étaient les clefs de cette aventure, appelée Allbikestore.fr</div>
          <div className="row">Étant le CTO de l&apos;entreprise, j&apos;ai entièrement concu et développer les plateformes (front-office / back-office). Mes autres rôles dans l&apos;entreprise me permettaient de gérer le parc informatique, de m&apos;occuper de la préparation des commandes et de leur expédition, ainsi que du service après-vente. Pour des raisons personnelles, nous avons stoppé l&apos;aventure en 2016.</div>
          <div className="row mt1">Je fus ensuite le premier employé, en étant que Software Engineer, d&apos;une startup très prometteuse: Recast.AI</div>
          <div className="row">Avec l&apos;impulsion d&apos;un fondateur de startup bien connu en France, Patrick Joubert, nous avons créé une intelligence artificielle capable de comprendre le language humain (Natural Language Processing).</div>
          <div className="row">Le monde du Chatbot s&apos;offrit alors à nous. En deux ans, nous avons construit une plateforme inédite, où les utilisateurs pouvaient créer des chatbots en utilisant notre intelligence artificielle, gratuitement.</div>
          <div className="row">Cette formidable histoire a attiré l&apos;attention de SAP, l&apos;enteprise de solutions cloud mondialement connue.</div>
          <div className="row mt1">Alors que Recast.AI fut acquis par SAP en 2018, je voulais me diversifier. Ce fut l&apos;opportunité d&apos;entrer dans le monde du management. En manageant deux équipes techniques (Software Engineers / Data-scientists), j&apos;ai bénéficié de l&apos;expertise de SAP pour mener à bien ma mission: Tech Team Manager.</div>
          <div className="row mt1">La vie est faite d&apos;opportunités et une de celles-ci est apparue en 2019: rejoindre l&apos;un des leaders mondiaux de l&apos;opération satellite: Eutelsat, avec une mission: digitaliser les services.</div>
          <div className="row">En quittant le monde du management, de manière non-définitive, je revenais aux sources: le développement logiciel.</div>
          <div className="row">Depuis 2019, j&apos;ai créé des services automatisés qui ont changé la vie des utilisateurs. Par exemple, Eutelsat a lancé en 2020 le service SAT.TV, permettant à des millions d&apos;utilisateurs de bénéficier de guides de programme (EPG) enrichis.</div>
          <div className="row">J&apos;ai aussi développé une plateforme permettant de dispatcher les messages d&apos;objets IoT, transmis par satellite.</div>
        </div>
      </div>
    );
  }
}

export default Me;
