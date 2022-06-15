import { useState } from "react";
import { styled } from "../../styles/stitches.config";

const Div = styled("div", {
  fontSize: "$1",
  border: "rgba(65, 65, 65, 1) 1px solid",
  position: "relative",
  borderRadius: "8px",
  padding: "12px 8px",
  overflow: "auto",
  
  '&:hover, &:focus-within': {
    border: '1.5px solid #E7E7E7'
  }
});

const Label = styled("label", {
  position: "absolute",
  color: "#888888",
  transform: "translateY(-50%)",
  top: "50%",
  left: "9px",
});

const CustomInput = styled("input", {
  fontFamily: "$system",
  fontSize: "$1",
  border: 0,
  outline: 0,
  width: '100%',
  backgroundColor: 'inherit',
  color: 'white'
});

interface Props {
  label: string
}

function Input({label}:Props) {
  const [state, setState] = useState("");
  return (
    <Div css={state ? { paddingBottom: 2 } : {}}>
      <Label css={state ? { top: 12, fontSize: 12 } : {}}>
        {label}
      </Label>
      <CustomInput
        css={state ? { marginTop: 8 } : {}}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </Div>
  );
}

export default Input;
