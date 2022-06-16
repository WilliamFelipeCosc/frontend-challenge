import { CustomButton } from "./styles"

interface Props {
  text: string
  onClick?: () => void
  disabled: boolean
}

function Button({text, onClick = () => {}, disabled}:Props){
  return (
    <CustomButton onClick={onClick} disabled={disabled}>{text}</CustomButton>
  )
}

export default Button