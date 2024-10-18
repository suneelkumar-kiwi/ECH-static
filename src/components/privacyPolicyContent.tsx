import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { forwardArrow } from '../utils/icons';
import { BOOLEAN } from '../constants/static';

function PrivacyPolicyContent(props: any) {
  const { closeButton } = props;
  const { t } = useTranslation();
  const handleBack = () => {
    closeButton(BOOLEAN.FALSE);
  };
  return (
    <>
      <div className="breadcrumb-container">
        <div className="back-btn back-btn-mobile" onClick={handleBack}>
          <Image src={forwardArrow} height={20} width={20} alt="Back" />
        </div>
      </div>
      <div className="static-content">
        <p>{t('TERMS_SERVICE_CONTENT_ONE')}</p>
        <p>{t('TERMS_SERVICE_CONTENT_TWO')}</p>
        <p>{t('TERMS_SERVICE_CONTENT_THREE')}</p>
        <h4 className="terms-heading">{t('TERMS_SERVICE_HEADING_ONE')}</h4>
        <p>{t('TERMS_SERVICE_CONTENT_FOUR')}</p>
        <h4 className="terms-heading">{t('TERMS_SERVICE_HEADING_ONE')}</h4>
        <p>{t('TERMS_SERVICE_CONTENT_FIVE')}</p>
      </div>
    </>
  );
}

export default PrivacyPolicyContent;
