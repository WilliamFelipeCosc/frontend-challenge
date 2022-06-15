import { Div } from "./styles"

interface Props {
  nome: string
  sobrenome: string
}

function UserLogo({nome, sobrenome}:Props){
  const nomeUpper = 'Jorge'?.[0]?.toLocaleUpperCase() ?? '';
  const sobrenomeUpper = 'Gastaldi'?.[0]?.toLocaleUpperCase() ?? '';
  return(
    <Div>{nomeUpper}{nomeUpper}</Div>
  )
}

export default UserLogo