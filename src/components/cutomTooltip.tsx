import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Placement } from 'react-bootstrap/esm/types';

interface CustomTooltipProps {
  value: string;
  children: any;
  placement?: Placement;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ value, children, placement = 'top' }) => (value === '-'
  ? children// Render children directly if value is '-'
   : (
     <OverlayTrigger
       placement={placement}
       overlay={<Tooltip id="tooltip">{value}</Tooltip>}
     >
       {children}
     </OverlayTrigger>
  ));

export default CustomTooltip;
