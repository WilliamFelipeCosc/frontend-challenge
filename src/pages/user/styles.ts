import { styled } from "../../styles/stitches.config";
import LoggedGlobe from '../../../public/images/LoggedGlobe.svg';

export const Section = styled('section', {
  width: '100%',
  'min-height': '100vh',
  color: 'white',
  backgroundColor: '$bgBlack',
  backgroundImage: `url(${LoggedGlobe.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60% 100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
})

export const Article = styled('article', {
  width: 'clamp(420px, 60%, 820px)',
  padding: '40px',
  margin: '0 auto',
  textAlign: 'center',
  background: 'rgba(29, 29, 29, 0.5)',
  'mix-blend-mode': 'normal',
  'border': '2px solid #2A2A2A',
  'backdrop-filter': 'blur(200px)',
  'border-radius': '8px',
})

export const H1 = styled('h1', {
  fontSize:45
})