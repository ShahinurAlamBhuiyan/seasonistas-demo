import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import EduLogo from '~/app/assets/admin/edu1.png'
import Image from "next/image";

const EducationCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff",
      }}
    >
      <CardContent>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Education & Certifications
          </Typography>
        </Box>

        {/* Content */}
        <Box display="flex" mb={2}>
          <Image src={EduLogo} alt={'EduLogo'} width={62} height={62} className="rounded-[8px]" />
          <Box flex={1} sx={{ marginLeft: '10px' }}>

            <Typography fontWeight={600}>
              California Institute of the Arts
            </Typography>

            <Typography sx={{ fontSize: 13, color: "#333" }}>
              UX Design Fundamentals
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#555" }}>
              Grade: A+ &nbsp;&nbsp;•&nbsp;&nbsp; 2020 - 2021
            </Typography>


          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 13.5, mt: 1.2, color: "#333" }}>
            ShareTrip is the country’s first and pioneer online travel
            aggregator (OTA). My goal was to craft a functional and delightful
            experience through web and mobile apps currently consisting of
            1.2M+ & future billion users...{" "}
            <Typography
              component="span"
              sx={{ color: "#0073e6", fontWeight: 500 }}
            >
              See More
            </Typography>
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Typography
          variant="body2"
          sx={{
            fontSize: 14,

            color: "#559093",
            fontWeight: 600,
            mt: 1,
            cursor: "pointer",
          }}
        >
          Show 2 More Education
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
