import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { roadMap } from '../../../utils/icons';

interface SectionOneProps {
  setRoadmap: () => void;
}

export default function SectionOne({ setRoadmap }: SectionOneProps) {
  const { t } = useTranslation();
  return (
    <div id="home-section">
      <h1 className="main-title">
        {t('FIND_BEST')} <span>{t('HEALTHCARE_PROVIDERS')}</span>
      </h1>
      <h3 className="sub-title patient-mr-b">
        <span>{t('BRIDGING_THE_GAP')}</span> {t('BRIDGING_GAP_TEXT_DASH')}<br></br>
        <button onClick={setRoadmap} type="button" className="btn btn-primary btn-lg roadmap-action"> <Image src={roadMap} /> Explore Roadmap </button>
      </h3>
    </div>
  );
}
