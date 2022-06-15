import Form from "../../components/Form";
import SmallPolygon from "../../components/SmallPolygon";
import { Article, Div, H1, Section } from "./styles";

function FormPage() {
  return (
    <Section>
      <Form />
      <Article>
        <Div>
          <H1>Teste técnico</H1>
          <SmallPolygon />
          <p>
            Controle suas contas nacionais e internacionais em um único lugar!
          </p>
        </Div>
      </Article>
    </Section>
  );
}

export default FormPage;
