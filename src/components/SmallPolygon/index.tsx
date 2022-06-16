import { styled } from "../../styles/stitches.config"

const Div = styled('div', {
  border:0,
  backgroundColor: 'rgba(0, 242, 177, 1)',
  width:43,
  height: 11,
  borderRadius: 20, 
  margin: '12px 0',

})

interface Props {
  centered?: boolean
}

function SmallPolygon({centered}:Props) {
  return (
    <Div css={centered ? {margin:'12px auto 16px'} : {}} />
  )
}

export default SmallPolygon