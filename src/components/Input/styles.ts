import { styled } from "../../styles/stitches.config";

export const Div = styled("div", {
  fontSize: "$1",
  border: "rgba(65, 65, 65, 1) 1px solid",
  position: "relative",
  borderRadius: "8px",
  padding: "12px 8px",
  overflow: "auto",
  margin: '16px 0',
  backgroundColor: '#202020',
  
  '&:hover, &:focus-within': {
    border: '1.5px solid #E7E7E7'
  }
});

export const Label = styled("label", {
  position: "absolute",
  color: "#888888",
  transform: "translateY(-50%)",
  top: "50%",
  left: "9px",
});

export const CustomInput = styled("input", {
  fontFamily: "$system",
  fontSize: "$1",
  border: 0,
  outline: 0,
  width: '100%',
  backgroundColor: 'inherit',
  color: 'white'
});