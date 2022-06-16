import { forwardRef } from "react";
import { CustomCheckbox, Div } from "./styles";

interface Props {
  text: string
}

function Checkbox({text, register, fieldProps}:any, ref:any) {
  return (
    <Div>
      <CustomCheckbox ref={ref} id="checkbox" type="checkbox" {...fieldProps} />
      <label htmlFor="checkbox">{text}</label>
    </Div>
  );
}
export default forwardRef(Checkbox);
