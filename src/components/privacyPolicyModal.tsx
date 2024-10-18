import React from 'react';
import ModalWrapper from '../modalWrapper';
import { BOOLEAN } from '../constants/static';
import PrivacyPolicyContent from './privacyPolicyContent';


function PrivacyPolicyModal(props: any) {
  const { show, onShow, t } = props;

  return (
    <ModalWrapper
      modalClassName="extra-large-modal terms-service"
      show={show}
      onClose={onShow}
      title={t('PRIVACY_POLICY')}
      noIcon={BOOLEAN.FALSE}
      closeButton={BOOLEAN.TRUE}
    >
      <PrivacyPolicyContent closeButton={onShow} />
    </ModalWrapper>
  );
}

export default PrivacyPolicyModal;
