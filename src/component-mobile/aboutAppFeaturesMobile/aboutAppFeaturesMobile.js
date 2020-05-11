import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutAppFeaturesMobile.css'
import aboutFlow from "../../assets/aboutflow.png";
import Steph from "../../assets/Steph.png";
import Paul from "../../assets/Paul.png";
import lightbulb from "../../assets/Lightbulb.png";
import pencil from "../../assets/pencil.png";
import tickbox from "../../assets/tickbox.png";

const AboutAppFeaturesMobile = () => {
  return (
      <Container fluid className="about-features-container-mobile">
        <Row>
          <Col>
            <p className="about-feature-header-mobile">Challenge Accepted is the
              app to
              help people discover, track and complete their
              personal<br/> challenges. Such as:</p>
          </Col>
        </Row>
        <Row className="feature-divider-mobile"></Row>
        <Row className="example-row">
          <Col>
            <p className="about-feature-text-mobile">
              <b>Fitness<br/> challenges<br/></b>e.g. 30 day <br/>workout</p>
          </Col>
          <Col>
            <p className="about-feature-text-mobile">
              <b>Passion<br/> challenges</b><br/>e.g. see every <br/>premiership<br/>football
              team</p>
          </Col>
        </Row>
        <Row className="example-row">
          <Col md={2}>
          </Col>
          <Col>
            <p className="about-feature-text-mobile">
              <b>Travel<br/> challenge</b><br/>e.g.
              visit every <br/>city in Europe</p>
          </Col>
          <Col>
            <p className="about-feature-text-mobile"><b>Or create your<br/> own
              challenges <br/></b>e.g. 12 books<br/>I'm going to<br/>read this
              year
            </p>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <Row className="feature-divider-mobile"></Row>
        <Row>
          <Col>
            <p className="about-feature-header-mobile">For businesses, this
              means a new
              route to talk to customers, knowing that they're talking to
              customers who are passionate about their product or industry.
              Businesses can partner with
              Challenge Accepted to: create their own company challenge, sponsor
              challenges or categories,
              promote deals to customers that help with their passions e.g. a
              cinema voucher to users completing
              the Oscar nominated films challenge.</p>
          </Col>
        </Row>
        <Row className="feature-divider-mobile"></Row>
        <Row>
          <Col>
            <div className="about-header-bold-mobile">Business Model</div>
            <img className="about-flow-mobile" src={aboutFlow} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-header-bold-mobile">Founders</div>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Paul} alt="Profile"/>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <div className="name-text-mobile">Paul Johnson</div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="feature-divider-mobile-sm"></Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Experience<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">GSK, Fujitsu, TomTom, William
              Hill,
              Sky
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>University<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">Computer Science and
              Mathematics BSc from Bath
              University, 2:1 Hons
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Focus areas<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">Software development and test
              engineering
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Challenges<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">Daily squats<br/>Try every
              Dairy milk chocolate bar<br/>Watch every Will Smith film
            </div>
          </Col>
        </Row>
        <Row className="feature-divider-mobile-sm"></Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Steph} alt="Profile"/>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <div className="name-text-mobile">Steph Mandeville</div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="feature-divider-mobile-sm"></Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Experience<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">Intel, EE, BT, TodayTix
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>University<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">DeMontfort University, 1st
              Class Hons
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Focus areas<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">App design, brand & marketing,
              business
            </div>
          </Col>
        </Row>
        <Row className="profile-row">
          <Col xs={4}>
            <div className="profile-text-header-mobile"><b>Challenges<br/></b>
            </div>
          </Col>
          <Col xs={8}>
            <div className="profile-text-mobile">30 days of Yoga with Adriene on
              YouTube<br/>Visiting
              every country in Europe
              <br/>Watching every Disney animation film
            </div>
          </Col>
        </Row>
        <Row className="feature-divider-mobile"></Row>
        <Row>
          <Col>
            <div className="about-header-bold-mobile">Our Story<br/><br/></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="profile-text-header-images-mobile-l" src={lightbulb}
                 alt="Logo"/><br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profile-text-mobile">We realised we were both
              actively
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
        </Row>
        <Row>
          <Col>
            <img className="profile-text-header-images-mobile" src={pencil}
                 alt="Logo"/><br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profile-text-mobile">Steph, given her background in
              brand and marketing across large
              tech companies and a start up app, took on the role of scoping the
              app design, defining the brand and business plan. Along the way
              having to pick up some new learnings from financials, legal and
              brushing up photoshop skills. Paul, who has a background of
              programming at large tech, gaming, fitness and telco companies,
              developed the app from scratch and has managed all the product
              testing. This required picking up some additional programming
              languages along the way.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="profile-text-header-images-mobile" src={tickbox}
                 alt="Logo"/><br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profile-text-mobile"> Alpha testing started Feb
              2020. From March, Steph is working full
              time on the app and business plan, and with lockdown in place Paul
              is working around the clock in his spare time working on the
              amends from alpha testing and final features added ready for Beta
              testing in April 2020. Once we've completed our testing and fix
              stage, we'll be ready to launch on Android and Apple store in June
              2020.
            </div>
          </Col>
        </Row>
      </Container>
  )
};

export default AboutAppFeaturesMobile;