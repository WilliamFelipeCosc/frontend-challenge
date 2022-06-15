import { styled } from "../../styles/stitches.config"

export const CustomButton = styled('button', {
  backgroundColor: 'rgba(0, 242, 177, 1)',
  padding: '16px 24px',
  color: '#000',
  width: '100%',
  margin: '12px auto',
  borderRadius: 8,
  cursor: 'pointer'
})

function Button(){
  return (
    <CustomButton>Cadastrar</CustomButton>
  )
}

export default Button