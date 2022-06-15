import { styled } from "../../styles/stitches.config"

const Div = styled('div', {
  border:0,
  backgroundColor: 'rgba(0, 242, 177, 1)',
  width:43,
  height: 11,
  borderRadius: 20, 
  margin: '12px 0'
})

function SmallPolygon() {
  return (
    <Div />
  )
}

export default SmallPolygon