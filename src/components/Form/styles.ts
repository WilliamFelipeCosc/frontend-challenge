import { styled } from "../../styles/stitches.config";

export const Article = styled('section', {
  width: 'clamp(420px, 50%, 720px)',
  padding: '32px',
  textAlign: 'center',
  background: 'rgba(29, 29, 29, 0.5)',
  'mix-blend-mode': 'normal',
  'border': '2px solid #2A2A2A',
  'backdrop-filter': 'blur(200px)',
  'border-radius': '8px',
})

export const H3 = styled('h3', {
  fontSize: 25,
  'font-weight': 700,
  'line-height': ' 130%',
})

export const P = styled('p', {
  fontSize: '$1',
  marginTop: 6
})