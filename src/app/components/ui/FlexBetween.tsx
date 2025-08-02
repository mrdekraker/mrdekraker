import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/system";

// Extend BoxProps so it can receive all Box component props
const FlexBetween = styled((props: BoxProps) => <Box {...props} />)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
