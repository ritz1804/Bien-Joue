import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:(514) 543-7557"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            (514) 543-7557
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:pigeon@bien-joue.ca"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            pigeon@bien-joue.ca
          </a>
        </div>
        <address className="column contact-text">
          6465 ave Durocher, suite 401
          <br /> Montreal, QC, Canada
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
