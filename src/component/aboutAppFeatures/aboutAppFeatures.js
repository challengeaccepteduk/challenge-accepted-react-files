import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutAppFeatures.css'
import aboutFlow from "../../assets/aboutflow.png";
import Steph from "../../assets/Steph.png";
import Paul from "../../assets/Paul.png";
import lightbulb from "../../assets/Lightbulb.png";
import pencil from "../../assets/pencil.png";
import tickbox from "../../assets/tickbox.png";

const AboutAppFeatures = () => {
  return (
      <Container fluid className="about-features-container">
        <Row>
          <Col>
            <p className="about-feature-header">Challenge Accepted is the app to
              help people discover, track and complete their
              personal<br/> challenges. Such as:</p>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col md={1}>
          </Col>
          <Col>
            <p className="about-feature-text">
              <b>Fitness<br/> challenges<br/></b>e.g. 30 day <br/>workout</p>
          </Col>
          <Col>
            <p className="about-feature-text">
              <b>Passion<br/> challenges</b><br/>e.g. see every <br/>premiership<br/>football
              team</p>
          </Col>
          <Col>
            <p className="about-feature-text"><b>Travel<br/> challenge</b><br/>e.g.
              visit every <br/>city in Europe</p>
          </Col>
          <Col>
            <p className="about-feature-text"><b>Or create your<br/> own
              challenges <br/></b>e.g. 12 books<br/>I'm going to<br/>read this
              year
            </p>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <p className="about-feature-header">For businesses, this means a new
              route to talk to customers, knowing that they're talking to<br/>
              customers who are passionate about their product or industry.
              Businesses can partner with<br/>
              Challenge Accepted to: create their own company challenge, sponsor
              challenges or categories,<br/>
              promote deals to customers that help with their passions e.g. a
              cinema voucher to users completing<br/>
              the Oscar nominated films challenge.</p>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <div className="about-header-bold">Business Model</div>
            <img className="about-flow" src={aboutFlow} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-header-bold">Founders</div>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Paul} alt="Profile"/>
          </Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Steph} alt="Profile"/>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <div className="name-text">Paul Johnson</div>
          </Col>
          <Col md={4}>
            <div className="name-text">Steph Mandeville</div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}>
            <div className="profile-text-header"><b>Experience<br/><br/>University<br/><br/><br/>Focus
              areas<br/><br/><br/>Challenges</b></div>
          </Col>
          <Col md={4}>
            <div className="profile-text">GSK, Fujitsu, TomTom, William Hill,
              Sky
              <br/><br/>Computer Science and Mathematics BSc from Bath
              University, 2:1 Hons<br/><br/>
              Software development and test engineering<br/><br/>Daily
              Squats<br/>Trying every Dairy milk chocolate bar<br/>Watching
              every Will Smith film
            </div>
          </Col>
          <Col md={5}>
            <div className="profile-text">Intel, EE, BT, TodayTix<br/><br/>Marketing
              Management BA from <br/>DeMontfort University, 1st Class Hons<br/><br/>
              App design, brand & marketing, business<br/>plan, model and
              finance<br/><br/>30 days of Yoga with Adriene on YouTube<br/>Visiting
              every country in Europe
              <br/>Watching every Disney animation film
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <div className="about-header-bold">Our Story<br/><br/></div>
          </Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={1}>
              <img className="profile-text-header-images" src={lightbulb}
                   alt="Logo"/><br/>
          </Col>
          <Col>
            <div className="profile-text">We realised we were both actively
              ticking off loads of our own challenges and tracking them in many
              different ways from a scratch map for travel, a list on our phones
              for books to read that year, a squat challenge app, an app to
              track football stadiums visited, marks across our online maps for
              restaurants we wanted to visit, together attempting to claim all 7
              mountains around Bergen, Norway, and many more. We, like many
              people we know, have a million and one personal challenges we are
              trying to complete and had no one place to keep track of them all
              which means we are unlikely to finish them all and even forget
              about how many we’ve actually started.
              <br/><br/>
              Our new challenge became creating an app to help us track and
              therefore ultimately complete our many challenges.
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>

          <Col md={1}>
            <img className="profile-text-header-images-p" src={pencil}
                 alt="Logo"/>
          </Col>
          <Col>
            <div className="profile-text">
            Steph, given her background in brand and marketing across large
            tech companies and a start up app, took on the role of scoping the
            app design, defining the brand and business plan. Along the way
            having to pick up some new learnings from financials, legal and
            brushing up photoshop skills. Paul, who has a background of
            programming at large tech, gaming, fitness and telco companies,
            developed the app from scratch and has managed all the product
            testing. This required picking up some additional programming
            languages along the way.<br/><br/>
          </div>
        </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={1}>
            <img className="profile-text-header-images-t" src={tickbox}
                 alt="Logo"/>
          </Col>
          <Col>
            <div className="profile-text">
              Alpha testing started Feb 2020. From March, Steph is working full
              time on the app and business plan, and with lockdown in place Paul
              is working around the clock in his spare time working on the
              amends from alpha testing and final features added ready for Beta
              testing in April 2020. Once we've completed our testing and fix
              stage, we'll be ready to launch on Android and Apple store in June
              2020.
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>

      </Container>
  )
};

export default AboutAppFeatures;
