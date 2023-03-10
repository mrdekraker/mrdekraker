import { Box } from "@mui/material";

const LineGradient = ({ width = "100%" }) => {
  return (
    <Box
      height="0.125rem"
      width={width}
      sx={{
        background:
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }}
    />
  );
};

export default LineGradient;
