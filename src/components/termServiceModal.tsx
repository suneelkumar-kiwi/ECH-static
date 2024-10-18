import React from 'react';
import ModalWrapper from '../modalWrapper';
import { BOOLEAN } from '../constants/static';
import TermServiceContent from './termServiceContent';

function TermServiceModal(props: any) {
  const { show, onShow, t } = props;

  return (
    <ModalWrapper
      modalClassName="extra-large-modal terms-service"
      show={show}
      onClose={onShow}
      title={t('TERMS_SERVICE')}
      noIcon={BOOLEAN.FALSE}
      closeButton={BOOLEAN.TRUE}
    >
      <TermServiceContent closeButton={onShow} />
    </ModalWrapper>
  );
}

export default TermServiceModal;
