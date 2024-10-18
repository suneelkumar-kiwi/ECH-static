import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SectionOne() {
  const { t } = useTranslation();
  return (
    <div id="home-section">
      <h1 className="main-title">
        {t('FIND_BEST')} <span>{t('HEALTHCARE_PROVIDERS')}</span>
      </h1>
      <h3 className="sub-title">
        <span>{t('BRIDGING_THE_GAP')}</span> {t('BRIDGING_GAP_TEXT_DASH')}
      </h3>
    </div>
  );
}
