import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import card_bg_image from "public/assets/card/card_bg.png";
import CustomChip from "components/Common/Chip/CustomChip";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import { FaArrowRight } from "react-icons/fa";
import BaseCard from "components/Common/Cards/BaseCard";
import AppImage from "components/Common/AppImage";
import { Stack } from "@mui/system";
const ProcessSection = () => {
  const data = [1, 2, 3];
  return (
    <Box sx={{ paddingBottom: "64px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={6}>
          {" "}
          <CustomChip label="Process" />
          <Typography
            sx={{
              color: "#2E3749",
              fontSize: "42px",
              lineHeight: "60px",
              fontWeight: "800",
              marginTop: "24px",
            }}
          >
            Get your project going in 3 simple steps
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "#1f1f1f",
              fontweight: "400",
              marginTop: "24px",
              marginBottom: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
            massa in enim luctus. Rutrum arcu.
          </Typography>
          <SecondaryButton
            sx={{
              background: "rgba(251, 229, 198, 1)",
              "&:hover": {
                background: "rgba(251, 229, 198, 1)",
              },
            }}
            endIcon={<FaArrowRight />}
          >
            Get a Quote
          </SecondaryButton>
        </Grid>
        <Grid item md={6}>
          {/* List of cards */}
          {data.map((item) => (
            <BaseCard
              key={item}
              sx={{
                marginTop: "32px",
                position: "relative",
                display: "flex",
                flex: 1,
                // paddingLeft: "64px",
                // background: ` url(${card_bg_image})  no-repeat left top`,
              }}
            >
              <AppImage
                src={card_bg_image}
                alt="bg_image"
                style={{
                  width: "200px",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  flex: 0.2,
                  // marginLeft: "-24px",
                }}
              />
              <Stack
                paddingTop={"32px"}
                paddingBottom="48px"
                paddingRight={"32px"}
              >
                <Typography
                  sx={{
                    color: "#2E3749",
                    fontSize: "20px",
                    fontWeight: "800",
                  }}
                >
                  Step 1:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "28px",
                    fontWeight: 400,
                    color: "#1f1f1f",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus etiam scelerisque diam tortor at dictum ornare.
                </Typography>
              </Stack>
            </BaseCard>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProcessSection;
