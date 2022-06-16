import { HTMLInputTypeAttribute, useState, forwardRef } from "react";
import { CustomInput, Div, Label } from "./styles";

interface Props {
  label: string
  type?: HTMLInputTypeAttribute 
}

function Input({label, type= 'text', fieldProps}:any,ref:any) {
  
  return (
    <Div css={fieldProps?.value ? { paddingBottom: 2 } : {}}>
      <Label css={fieldProps?.value ? { top: 12, fontSize: 12 } : {}} htmlFor={label}>
        {label}
      </Label>
      <CustomInput
        {...fieldProps}
        ref={ref}
        id={label}
        css={fieldProps?.value ? { marginTop: 8 } : {}}
        type={type}
      />
    </Div>
  );
}

export default forwardRef(Input);
