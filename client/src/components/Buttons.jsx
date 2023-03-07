import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
  color: theme.palette.primary,
  "&:hover": {
    color: "#fff",
  },
}));

export const GradientButtonOutline = styled(Button)(({ theme }) => ({
  background: "transparent",
  border: "2px solid transparent",
  borderImage: "linear-gradient(90deg, #24CBFF, #FC59FF, #FFBD0C)",
  borderImageSlice: 1,
  color: "#fff",
}));


// export default { GradientButton, GradientButtonOutline };