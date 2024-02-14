import { Avatar, Box, Grid, Typography } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CustomChip from "components/Common/Chip/CustomChip";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { Fa500Px, FaUserSecret } from "react-icons/fa";

const KeyFeaturesSection = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Box sx={{ textAlign: "center", marginBottom: "96px" }}>
      <CustomChip
        label="Features"
        sx={{
          color: "rgba(4, 102, 200, 1)",
          marginBottom: "24px",
        }}
      />
      <SectionTitleText
        sx={{
          marginBottom: "24px",
        }}
      >
        Our Key Features
      </SectionTitleText>
      <DescriptionText
        sx={{
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa
        in enim luctus. Rutrum arcu.
      </DescriptionText>

      <Grid container spacing={4} marginTop="48px">
        {data.map((item) => (
          <Grid key={item} xs={12} md={4}>
            <BaseCard
              sx={{
                padding: "24px",
                margin: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  background: "white",
                  marginBottom: "16px",
                }}
              >
                <FaUserSecret
                  fontSize={"32px"}
                  style={{
                    color: "#2DAF3C",
                    textAlign: "center",
                  }}
                />
              </Avatar>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#2E3749",
                  lineHeight: "28px",
                  fontWeight: "800",
                  marginBottom: "16px",
                }}
              >
                Data Security
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#1f1f1f",
                  marginBottom: "16px",
                }}
              >
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

export default KeyFeaturesSection;
