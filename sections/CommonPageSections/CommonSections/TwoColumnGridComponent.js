import { Grid, Typography, Stack, styled } from "@mui/material";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import React from "react";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  marginTop: "32px",
  marginBottom: "32px",
}));

const TwoColumnGridComponent = ({
  leftComponent,
  rightComponent,
  containerStyles,
}) => {
  return (
    <StyledGridContainer container spacing={4} sx={containerStyles}>
      <Grid item md={6}>
        {leftComponent}
      </Grid>
      <Grid item md={6}>
        {rightComponent}
      </Grid>
    </StyledGridContainer>
  );
};

export default TwoColumnGridComponent;
