import { forwardArrow, landingHcpAvail, landingHcpOnline, landingHcpRecord } from '../../../utils/icons';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CustomTooltip from '../../cutomTooltip';

export default function HcpMiddleSection() {
  const { t } = useTranslation();

  const signupBtn = () => (
    <div className="btn-space">
      <CustomTooltip placement="bottom" value={t('UNDER_CONS_TEXT')}>
        <Button variant="primary" size="lg">
          {t('SIGNUP_AS_HCP')}
          <Image src={forwardArrow} width={20} height={20} alt="Arrow" />
        </Button>
      </CustomTooltip>
    </div>
  );

  return (
    <>
      <div className="section-with-image">
        <div className="content">
          <h5 className="section-sub-title">
            {t('HCP_CAN_SEE_THEIR')}
          </h5>
          <h2 className="section-title">
            <span>{t('AVAILABILITY')}</span>
          </h2>
          <ul className="check-list">
            <li>{t('SIGNUP_AND_BUILD')}</li>
            <li>{t('SET_CALENDAR')}</li>
            <li>{t('GET_APPOINTMENTS')}</li>
          </ul>
          {signupBtn()}
        </div>
        <div className="image-container me-0 order-mob1">
          <Image
            src={landingHcpAvail}
            width={819}
            height={465}
            alt="Availability"
            className="availability-image"
          />
        </div>
      </div>
      <div className="section-with-image">
        <div className="image-container large-image">
          <Image
            src={landingHcpOnline}
            width={755}
            height={613}
            alt="Online Consultation"
            className="online-consultation"
          />
        </div>
        <div className="content">
          <h5 className="section-sub-title">
            {t('MEETING_PATIENTS')}
          </h5>
          <h2 className="section-title">
            <span>{t('ALL_INCLUSIVE_TEXT')}</span>
          </h2>
          <ul className="check-list">
            <li>{t('INSTANT_MESSAGING')}</li>
            <li>{t('SHARING_PRESCRIPTIONS')}</li>
            <li>{t('LABS_AND_IMAGES')}</li>
          </ul>
          {signupBtn()}
        </div>
      </div>
      <div className="section-with-image">
        <div className="content">
          <h5 className="section-sub-title">
            {t('REQUEST_YOUR_HCP')}
          </h5>
          <h2 className="section-title">
            <span>{t('ELECTRONIC_HEALTH_RECORD')}</span>
          </h2>
          <ul className="check-list">
            <li>{t('REQUEST_MORE_INFORMATION')}</li>
            <li>{t('SHARE_INSTANT_MEDICAL_NOTES')}</li>
            <li> {t('ACCESS_IMMEDIATELY')}</li>
          </ul>
          {signupBtn()}
        </div>
        <div className="image-container me-0 order-mob1">
          <Image
            src={landingHcpRecord}
            width={785}
            height={509}
            alt="Health Records"
            className="health-record"
          />
        </div>
      </div>
    </>
  );
}
