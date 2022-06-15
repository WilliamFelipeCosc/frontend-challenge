import Input from "../Input";
import { Article, H3, P } from "./styles";

function Form() {
  return (
    <Article>
      <H3>Cadastre-se</H3>
      <P>Para começar, insira os dados abaixo</P>
      <form>
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Input label="E-mail" />
        <Input label="Data de nascimento" />
        <Input label="Senha" />
        <Input label="Selecione seu país" />
        <Input label="Bio" />
      </form>
    </Article>
  );
}

export default Form;
