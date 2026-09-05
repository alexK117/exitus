import React from 'react';
import '../css/StickyMobileCall.css';

interface StickyMobileCallProps {
  phone: string;
}

const StickyMobileCall: React.FC<StickyMobileCallProps> = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} className="sticky-mobile-bar">
      📞 Zvanīt tagad: {phone}
    </a>
  );
};

export default StickyMobileCall;