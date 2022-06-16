import { Div } from "./styles"

interface Props {
  nome: string
  sobrenome: string
}

function UserLogo({nome, sobrenome}:Props){
  const nomeUpper = nome?.[0]?.toLocaleUpperCase() ?? '';
  const sobrenomeUpper = sobrenome?.[0]?.toLocaleUpperCase() ?? '';
  return(
    <Div>{nomeUpper}{sobrenomeUpper}</Div>
  )
}

export default UserLogo