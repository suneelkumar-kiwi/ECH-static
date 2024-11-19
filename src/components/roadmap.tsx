import React from 'react';
import { Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../utils/languageSelector';
import { backBtn, logo } from '../utils/icons';
import { useNavigate } from 'react-router-dom';

interface RoadmapProps {
    closeRoadmapModal: () => void;
}

function Roadmap({ closeRoadmapModal }: RoadmapProps) {
    const { t } = useTranslation();

    return (
        <div className="roadmap-modal">
            <div className="header">
                <Navbar>
                    <Container fluid>
                        <button className="back-to-home" type="button" onClick={closeRoadmapModal}><Image src={backBtn} alt="Back button" /> {t('BACK_TEXT')} </button>
                        <LanguageSelector />
                    </Container>
                </Navbar>
            </div>
            <div className="roadmap-wrapper">
                <Image
                    onClick={closeRoadmapModal}
                    src={logo}
                    height={70}
                    width={200}
                    alt="Evolved logo"
                    className="logo-center"
                />
                <h1> <span> {t('5_YEAR')} </span> {t('ROADMAP')} </h1>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> {t('RM_YEAR_2021')} </h2>
                                <p> {t('RM_2021_DES')}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> {t('Q3')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2021_Q3') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q4')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2021_Q4') }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> {t('RM_YEAR_2022')}  </h2>
                                <p> {t('RM_2022_DES')} </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> {t('Q1')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2022_Q1') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q2')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2022_Q2') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q3')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2022_Q3') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q4')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2022_Q4') }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> {t('RM_YEAR_2023')}  </h2>
                                <p> {t('RM_2023_DES')} </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> {t('Q1')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2023_Q1') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q2')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2023_Q2') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q3')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2023_Q3') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q4')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2023_Q4') }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> {t('RM_YEAR_2024')}  </h2>
                                <p> {t('RM_2024_DES')} </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> {t('Q1')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2024_Q1') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q2')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2024_Q2') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q3')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2024_Q3') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q4')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2024_Q4') }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> {t('RM_YEAR_2025')}  </h2>
                                <p> {t('RM_2025_DES')} </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> {t('Q1')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2025_Q1') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q2')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2025_Q2') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q3')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2025_Q3') }}
                                    />
                                </div>
                                <div className="quater-target-box">
                                    <span> {t('Q4')} </span>
                                    <ul
                                        dangerouslySetInnerHTML={{ __html: t('RM_2025_Q4') }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="milestone-wrp">
                    <Row>
                        <Col>
                            <div className="goals">
                                <h3> {t('MILESTONE')} </h3>
                                <ul
                                    dangerouslySetInnerHTML={{ __html: t('MILESTONE_LIST') }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="flex-end">
                            <div className="goals">
                                <h3> {t('KEY_OFFERING')} </h3>
                                <ul
                                    dangerouslySetInnerHTML={{ __html: t('KEY_OFFERING_LIST') }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="popup-footer">
                    <Image
                        onClick={closeRoadmapModal}
                        src={logo}
                        height={37}
                        width={103}
                        alt="Evolved logo"
                        className="logo-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
