import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HcpSectionOne() {
  const { t } = useTranslation();
  return (
    <div id="home-section">
      <h1 className="main-title less-margin">
        {t('PATIENTS_CAN_BOOK_FOR')} <span>{t('ONLINE_SESSIONS')}</span>
      </h1>
      <h3 className="sub-title more-margin">
        <span>{t('BRIDGING_THE_GAP')}</span> {t('BRIDGING_GAP_TEXT_DASH_HCP')}
      </h3>
    </div>
  );
}
