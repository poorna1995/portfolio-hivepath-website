import { Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BaseCard from "components/Common/Cards/BaseCard";
import CustomChip from "components/Common/Chip/CustomChip";
import React from "react";
import { FaAddressBook } from "react-icons/fa";

const WhyUsSection = () => {
  const data = [1, 2, 3];
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <CustomChip label={"Why us?"} />
      <Typography
        fontSize={"42px"}
        lineHeight="60px"
        fontWeight={700}
        sx={{
          marginTop: "24px",
        }}
      >
        Self driven people
      </Typography>
      <Typography
        fontSize={"18px"}
        maxWidth="600px"
        sx={{ margin: "auto", marginTop: "16px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa
        in enim luctus. Rutrum arcu.
      </Typography>
      <Grid container spacing={3} marginTop="64px">
        {data.map((item) => (
          <Grid key={item} item xs={12} md={4}>
            <BaseCard
              sx={{
                textAlign: "center",
                padding: "24px",
                boxShadow: "0px 0px 64px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
              }}
            >
              <FaAddressBook style={{ fontSize: "32px", marginTop: "16px" }} />
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 800,
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                Data Security
              </Typography>
              <Typography sx={{ marginBottom: "16px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </Typography>
            </BaseCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUsSection;
