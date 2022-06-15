import SmallPolygon from "../../components/SmallPolygon";
import UserLogo from "../../components/UserLogo"
import { Article, H1, Section } from "./styles"

function UserPage(){
  const nome = 'Jorge';
  const sobrenome = 'Gastaldi';
  const novaData = new Date();
  const datee = `${novaData.getDay()} de ${novaData.getMonth() + 1} de ${novaData.getFullYear()}`

  return(
    <Section>
      <Article>
        <UserLogo nome={nome} sobrenome={sobrenome}/>
        <H1>Bem Vindo {nome} {sobrenome}</H1>
        <SmallPolygon />
        <p>Você nasceu no dia {datee}. </p>
      </Article>
    </Section>
  )
}

export default UserPage