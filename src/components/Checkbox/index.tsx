import { forwardRef } from "react";
import { FieldValues } from "react-hook-form";
import { CustomCheckbox, Div } from "./styles";

interface Props {
  text: string
  fieldProps: FieldValues
}

function Checkbox({text, fieldProps}:Props, ref:any) {
  return (
    <Div>
      <CustomCheckbox ref={ref} id="checkbox" type="checkbox" {...fieldProps} />
      <label htmlFor="checkbox">{text}</label>
    </Div>
  );
}
export default forwardRef(Checkbox);
