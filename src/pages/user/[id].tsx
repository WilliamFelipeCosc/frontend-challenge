import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SmallPolygon from "../../components/SmallPolygon";
import UserLogo from "../../components/UserLogo"
import { getUser } from "../../utils/apiUser";
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
  const newBirthday = new Date(dateOfBirthday);
  const newDate = `${newBirthday.getDate()+1} de ${months[newBirthday.getMonth() ?? 0]} de ${newBirthday.getFullYear()}`

  return( 
    <Section>
      <Article>
        <UserLogo nome={firstName} sobrenome={lastName}/>
        <H1>Bem Vindo {firstName} {lastName}</H1>
        <SmallPolygon centered/>
        <p>Você nasceu no dia {newDate}. </p>
      </Article>
    </Section>
  )
}

export default UserPage