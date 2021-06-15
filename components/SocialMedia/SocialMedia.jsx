import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Instagram, Facebook, Vimeo } from '../Icons';
import StickyCursor from '../StickyCursor';
import { Container, Link } from './styles';

const medias = [
  {
    component: Instagram,
    url: 'https://www.instagram.com/productionsbienjoue/',
  },
  { component: Facebook, url: 'https://www.facebook.com/productionsbienjoue/' },
  { component: Vimeo, url: 'https://vimeo.com/bienjoue' },
];

const SocialMedia = props => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container {...props}>
      {medias.map(({ component: Component, url }) => (
        <StickyCursor key={url}>
          <Link
            target="_blank"
            href={url}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Component />
          </Link>
        </StickyCursor>
      ))}
    </Container>
  );
};

export default React.memo(SocialMedia);
