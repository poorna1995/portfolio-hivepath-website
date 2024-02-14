import { Box, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import React from "react";
import placeholderImage from "public/assets/card/text_placeholder.png";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";

const TwoColumnContentGrid = ({ content }) => {
  const { title, description, data } = content;
  // const data = [
  // ];
  return (
    <BaseBoxComponent
      boxStyle={{
        background: "#F5F9F6",
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "36px",
          lineHeight: " 66px",
          color: "#2E3749",
        }}
      >
        {title || `Front End Development`}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: " 28px",
          color: "#1f1f1f",
          maxWidth: "800px",
        }}
      >
        {description ||
          `	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
				tellus in odio aliquam viverra. Elit aliquam natoque morbi
				malesuada tempus, at.
			`}
      </Typography>
      <TwoColumnGridComponent
        leftComponent={
          <>
            {/* List of text heading and buttons */}
            {data.map((item) => (
              <Typography
                key={item}
                sx={{
                  fontWeight: ` 800`,
                  fontSize: `24px`,
                  lineHeight: ` 28px`,
                  marginTop: "48px",
                  marginBottom: "48px",
                  color: "#2E3749",
                }}
              >
                {item.title || `Client Experience`}
              </Typography>
            ))}
            <SecondaryButton
              sx={{
                background: "#153230",
                color: "white",
                marginTop: "32px",
              }}
            >
              Get a quote
            </SecondaryButton>
          </>
        }
        rightComponent={
          <AppImage
            src={placeholderImage}
            // style={{ maxHeight: "300px" }}
          />
        }
      />
    </BaseBoxComponent>
  );
};

export default TwoColumnContentGrid;
