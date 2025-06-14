import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import locationImg from '~/app/assets/location.png'
import Image from "next/image";

const LocationCard: React.FC = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        p: 3,
        mt: 3,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
        width: '100%'
      }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: "#000", fontSize: "20px" }}
      >
        Location
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#1C1C1EB8", fontSize: "14px", marginBottom: '20px !important' }}
      >
        123 Greenway Avenue, London, UK, SW1A 1A
      </Typography>
      <Image src={locationImg} alt={'123 Greenway Avenue, London, UK, SW1A 1A'} className="w-[100%] h-[400px] rounded-[32px]" />
    </Card>
  );
};

export default LocationCard;
