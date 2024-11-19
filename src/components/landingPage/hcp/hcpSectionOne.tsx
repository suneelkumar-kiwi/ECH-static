import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { roadMap } from '../../../utils/icons';

interface HcpSectionOneProps {
  setRoadmap: () => void;
}

export default function HcpSectionOne({ setRoadmap }: HcpSectionOneProps) {
  const { t } = useTranslation();
  return (
    <div id="home-section">
      <h1 className="main-title less-margin">
        {t('PATIENTS_CAN_BOOK_FOR')} <span>{t('ONLINE_SESSIONS')}</span>
      </h1>
      <h3 className="sub-title hcp-mr-b">
        <span>{t('BRIDGING_THE_GAP')}</span> {t('BRIDGING_GAP_TEXT_DASH_HCP')} <br></br>
        <button onClick={setRoadmap} type="button" className="btn btn-primary btn-lg roadmap-action"> <Image src={roadMap} /> Explore Roadmap </button>
      </h3>
    </div>
  );
}
