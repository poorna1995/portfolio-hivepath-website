import { Box, Grid } from "@mui/material";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";

// import images
// import reactIcon from "public/assets/icons/tech/react.png";
// import digitalOceanIcon from "public/assets/icons/tech/digital_ocean.png";
// import figmaIcon from "public/assets/icons/tech/figma.png";
// import pythonIcon from "public/assets/icons/tech/python.png";
// import mongoDBIcon from "public/assets/icons/tech/mongodb.png";
import {
  SiDigitalocean,
  SiFigma,
  SiMongodb,
  SiPython,
  SiReact,
} from "react-icons/si";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";
const TechnologyStackSection = () => {
  return (
    <BaseBoxComponent>
      <SectionTitleText>Technology Stack</SectionTitleText>
      {/* <span>(in-progress)</span> */}
      <Grid container spacing={3} sx={{ paddingTop: "32px" }}>
        {techStackData.map((item, index) => {
          const { icon: Icon } = item;
          return (
            <Grid
              item
              md={2}
              key={index}
              sx={{
                textAlign: "center",
              }}
            >
              <Icon
                style={{
                  fontSize: "64px",
                  color: item.color,
                  marginBottom: "24px",
                }}
              />
              <CardTitle>{item.title}</CardTitle>
            </Grid>
          );
        })}
      </Grid>
    </BaseBoxComponent>
  );
};

export default TechnologyStackSection;

const techStackData = [
  {
    icon: SiReact,
    title: "Front end",
    color: "#61DAFB",
  },
  {
    icon: SiPython,
    title: "Back-end",
    color: "#3776AB",
  },
  {
    icon: SiDigitalocean,
    title: "Server",
    color: "#0080FF",
  },
  {
    icon: SiMongodb,
    title: "Database",
    color: "#47A248",
  },
  {
    icon: SiFigma,
    title: "Design",
    color: "#F24E1E",
  },
];
