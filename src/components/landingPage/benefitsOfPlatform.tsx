import { dataPie, dataSecurity, folder, security } from '../../utils/icons';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function BenefitsOfPlatform() {
  const { t } = useTranslation();

  return (
    <div className="section-with-list">
      <h2 className="section-title more-margin">
        <span>{t('BENEFITS')}</span> {t('OF_OUR_PLATFORM')}
      </h2>
      <Row>
        <Col md={6}>
          <div className="card">
            <div className="card-image">
              <Image
                src={dataSecurity}
                width={52}
                height={52}
                alt="Data Security"
              />
            </div>
            <div className="card-title">
              <span>{t('IMPROVED_SECURITY')}</span>
            </div>
            <p>
              {t('IMPROVED_SECURITY_DESCRIPTION')}
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="card">
            <div className="card-image">
              <Image src={dataPie} width={52} height={52} alt="Patient Data" />
            </div>
            <div className="card-title">
              <span>{t('IMPROVED_ACCESS_TO_PATIENT_DATA')}</span>
            </div>
            <p>
              {t('IMPROVED_ACCESS_TO_PATIENT_DATA_DESCRIPTION')}
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="card">
            <div className="card-image">
              <Image
                src={security}
                width={52}
                height={52}
                alt="Enhanced Transparency"
              />
            </div>
            <div className="card-title">
              <span>{t('ENHANCED_TRANSPARENCY')}</span>
            </div>
            <p>
              {t('ENHANCED_TRANSPARENCY_DESCRIPTION')}
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="card">
            <div className="card-image">
              <Image
                src={folder}
                width={52}
                height={52}
                alt="Accurate Record"
              />
            </div>
            <div className="card-title">
              <span>{t('MORE_ACCURATE_RECORD_KEEPING')}</span>
            </div>
            <p>
              {t('MORE_ACCURATE_RECORD_KEEPING_DESCRIPTION')}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
