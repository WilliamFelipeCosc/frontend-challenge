import { useRouter } from "next/router";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { postUser } from "../../utils/apiUser";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";
import { Article, CustomForm, H3, P } from "./styles";

function Form() {
  const { handleSubmit, watch, control } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data) => {
    const date = data.dateOfBirthday.split("/").reverse().join("-");
    const body = await postUser({ ...data, dateOfBirthday: new Date(date) });
    router.push(`/user/${body.id}`);
  };

  const arrT = watch();
  const validation =
    Object.values({ ...arrT }).length &&
    Object.values({ ...arrT }).every((x) => x);

  return (
    <Article>
      <H3>Cadastre-se</H3>
      <P>Para começar, insira os dados abaixo</P>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => <Input label="Nome" fieldProps={field} />}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => <Input label="Sobrenome" fieldProps={field} />}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <Input label="E-mail" type="email" fieldProps={field} />
          )}
        />
        <Controller
          name="dateOfBirthday"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <Input label="Data de nascimento" fieldProps={field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <Input label="Senha" type={"password"} fieldProps={field} />
          )}
        />
        <Controller
          name="country"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <Input label="Selecione seu país" fieldProps={field} />
          )}
        />
        <Controller
          name="bio"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => <Input label="Bio" fieldProps={field} />}
        />
        <Button text="Cadastrar" disabled={!validation} />
        <Controller
          name="receiveNotifications"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkbox text={"Desejo receber notificações"} fieldProps={field} />
          )}
        />
      </CustomForm>
    </Article>
  );
}

export default Form;
