import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function OurTeamDetail(props: any) {
  const { selectedMember } = props;
  const { image, name, role } = selectedMember;
  const { t } = useTranslation();

  return (
    <div>
      {selectedMember && (
        <div className="team-detail">
          <div className="image-container">
            <Image
              src={image}
              width={128}
              height={128}
              className="user-image"
              alt={name}
            />
          </div>
          <h4 className="title">{name}</h4>
          <p className="text">{role}</p>
          <div
            className="des"
            dangerouslySetInnerHTML={{ __html: t(selectedMember.longDescription) }}
          />
        </div>
      )}
    </div>
  );
}

export default OurTeamDetail;
