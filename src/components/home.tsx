import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from './landingPage/patient/testimonials';
import OurPartners from './landingPage/ourPartners';
import Footer from './landingPage/footer';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import SectionOne from './landingPage/patient/sectionOne';
import OurStory from './landingPage/patient/ourStory';
import MiddleSection from './landingPage/patient/middleSection';
import BenefitsOfPlatform from './landingPage/benefitsOfPlatform';
import HcpSectionOne from './landingPage/hcp/hcpSectionOne';
import HcpMiddleSection from './landingPage/hcp/hcpMiddleSection';
import AuthHeader from './cutomHeader';
import Roadmap from './roadmap';

const Home: React.FC = () => {

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('patient');
  const [roadmapVisible, setRoadmapVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        document.body.classList.add('mobile-home');
      } else {
        document.body.classList.remove('mobile-home');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // ShowRoadmap method
  const showRoadmap = () => {
    setRoadmapVisible((prev) => !prev);
    if (!roadmapVisible) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  };

  return (
    <div>
      {!roadmapVisible && <div className="home-page">
        <AuthHeader setActiveTab={setActiveTab} />
        <div>
          <div className="animation-trigger" id="hasAnimation" />
          <div className="animation-bg fixed" />
          <div className="landing-container">
            <Container>
              <Tab.Container
                activeKey={activeTab}
                onSelect={(k: string | null) => setActiveTab(k ?? 'patient')}
              >
                <Row className="custom-tabs">
                  <Col sm={12}>
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="patient">{t('PATIENTS')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="hcp">
                          {t('HEALTHCARE_PROVIDERS')}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="patient">
                        <SectionOne setRoadmap={showRoadmap} />
                        <OurStory />
                        <MiddleSection />
                        <BenefitsOfPlatform />
                      </Tab.Pane>
                      <Tab.Pane eventKey="hcp">
                        <HcpSectionOne setRoadmap={showRoadmap} />
                        <HcpMiddleSection />
                        <BenefitsOfPlatform />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Container>
          </div>
        </div>
        {activeTab === 'patient' && <Testimonials />}
        <OurPartners />
        <Footer />
      </div> }
      {roadmapVisible && <Roadmap closeRoadmapModal={showRoadmap} />}
    </div>
  );
};

export default Home;
