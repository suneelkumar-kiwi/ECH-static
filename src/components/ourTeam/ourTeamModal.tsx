import React from 'react';
import OurTeamDetail from './ourTeamDetail';
import { useTranslation } from 'react-i18next';
import ModalWrapper from '../../modalWrapper';
import { BOOLEAN } from '../../constants/static';

function OurTeamModal(props: any) {
  const { t } = useTranslation();
  const {
    show, onShow, selectedMember,
  } = props;

  return (
    <ModalWrapper
      modalClassName="team-modal"
      show={show}
      onClose={onShow}
      title={t('OUR_TEAM_DETAILS')}
      noIcon={false}
      headerClassName="close-btn-absolute"
      closeButton={BOOLEAN.TRUE}
    >
      <OurTeamDetail selectedMember={selectedMember} />
    </ModalWrapper>
  );
}

export default OurTeamModal;
