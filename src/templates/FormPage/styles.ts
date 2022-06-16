import { styled } from "../../styles/stitches.config";
import formGlobe from '../../../public/images/formGlobe.svg';

export const Section = styled('section', {
  width: '100%',
  'min-height': '100vh',
  display: 'flex',
  flexWrap: 'wrap-reverse',
  padding: '80px 120px',
  color: 'white',
  backgroundColor: '$bgBlack',
  backgroundImage: `url(${formGlobe.src})`,
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  // backgroundSize: '60% 100%'
})

export const Article = styled('article', {
  width: 'clamp(420px, 50%, 900px)',
  margin: '0 auto',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const H1 = styled('h1', {
  fontSize: '45px'
})

export const Div = styled('div', {
  width: 'clamp(313px, 45%, 313px)'
})