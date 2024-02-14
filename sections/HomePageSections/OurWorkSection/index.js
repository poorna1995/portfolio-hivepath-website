import { Box, Grid, Typography } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import React from "react";

const OurWorkSection = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Box sx={{ paddingTop: "32px", marginBottom: "64px" }}>
      <Typography variant="h3" fontWeight={700} paddingBottom={"32px"}>
        Our Work
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <BaseCard sx={{ height: "200px" }}>{item}</BaseCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorkSection;
