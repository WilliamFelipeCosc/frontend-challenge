import { styled } from "../../styles/stitches.config";

export const Div = styled("div", {
  marginTop: 8
});

export const CustomCheckbox = styled("input", {
  'accent-color': 'rgba(0, 242, 177, 1)',
  marginRight:8
});

function Checkbox() {
  return (
    <Div>
      <CustomCheckbox id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">Desejo receber notificações</label>
    </Div>
  );
}
export default Checkbox;
