import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";

const DesignElementsSection = () => {
  return (
    <BaseBoxComponent>
      <SectionTitleText>Design Elements</SectionTitleText>
      <Grid container spacing={3} paddingTop="32px">
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: 1,
          }}
        >
          <Box
            sx={{
              flex: 0.5,
              background: "#484A9E",
              color: "white",
              padding: "32px",
              paddingTop: "144px",
              textAlign: "center",
              paddingBottom: "64px",
            }}
          >
            <Typography>
              #484A9E <br />
              Blueberry
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 0.5,
              background: "#ECECEC",
              padding: "32px",
              paddingTop: "144px",
              textAlign: "center",
              paddingBottom: "64px",
            }}
          >
            <Typography>
              #ECECEC <br />
              Bright Gray
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} paddingLeft="32px" sx={{}}>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "26px",
              paddingTop: "32px",
            }}
          >
            Font Used-
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            spacing="3"
            sx={{
              paddingTop: "64px",
              paddingBottom: "64px",
            }}
          >
            <Stack>
              <Typography
                sx={{
                  fontFamily: "DM Sans ",
                  // textShadow: " 10px 0px 0px #2D3C59 ",
                  fontSize: "98px",
                  fontWeight: 500,
                  lineHeight: "128px",
                  color: "#2D3C59",
                }}
              >
                Aa
              </Typography>

              <Typography sx={{ fontFamily: "DM Sans " }}>DM Sans</Typography>
            </Stack>
            <Stack sx={{}}>
              <Typography
                sx={{
                  fontFamily: "DM Sans ",
                  fontSize: "28px",
                  fontWeight: "400",
                }}
              >
                <span>Regular</span>
                <br />
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Medium
                </span>
                <br />
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Bold
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </BaseBoxComponent>
  );
};

export default DesignElementsSection;
