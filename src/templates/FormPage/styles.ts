import { styled } from "../../styles/stitches.config";
import formGlobe from '../../../public/images/formGlobe.svg';

export const Section = styled('section', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  padding: '100px',
  color: 'white',
  backgroundColor: '$bgBlack',
  backgroundImage: `url(${formGlobe.src})`,
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat'
})

