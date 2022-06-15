import Form from "../../components/Form"
import SmallPolygon from "../../components/SmallPolygon"
import { Section } from "./styles"

function FormPage(){

  return (
    <Section>
      <Form />
      <article id="heading">
        <h1>Teste técnico</h1>
        <SmallPolygon />
        <p>Controle suas contas nacionais e internacionais em um único lugar!</p>
      </article>
    </Section>
  )
}

export default FormPage