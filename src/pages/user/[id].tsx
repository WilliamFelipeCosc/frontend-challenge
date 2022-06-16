import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SmallPolygon from "../../components/SmallPolygon";
import UserLogo from "../../components/UserLogo"
import { getUser } from "../../utils/postUser";
import { Article, H1, Section } from "./styles"

function UserPage(props:any){
  const router = useRouter();
  const [user, setUser] = useState<any>({});
 
  useEffect(() => {
    const id  = router?.query?.id ?? ''
    if(id){
      getUser(id).then(resp => setUser(resp))
    }
  }, [router?.query?.id])

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  
  const {firstName , lastName, dateOfBirthday} = user;
  const novaData = new Date(dateOfBirthday);
  const datee = `${novaData.getDate()+1} de ${months[novaData.getMonth() ?? 0]} de ${novaData.getFullYear()}`

  return( 
    <Section>
      <Article>
        <UserLogo nome={firstName} sobrenome={lastName}/>
        <H1>Bem Vindo {firstName} {lastName}</H1>
        <SmallPolygon />
        <p>Você nasceu no dia {datee}. </p>
      </Article>
    </Section>
  )
}

export default UserPage