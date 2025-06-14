import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import locationImg from '~/app/assets/employer/location.png'

const LocationCard: React.FC = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        p: 3,
        mt: 3,
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Location
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 13, mt: 0.5 }}
            >
              123 Greenway Avenue, London, UK, SW1A 1A
            </Typography>
          </Box>

          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 550,
              borderColor: "gray",
              color: "#000000",
              fontSize: "0.875rem",
              px: 2.5,
            }}
          >
            Edit Location
          </Button>
        </Stack>

        <Box
          component="img"
          src={locationImg.src}
          alt="Google Static Map"
          sx={{
            width: '100%',
            maxHeight: '400px',
            borderRadius: 2,
            mt: 2,
            objectFit: 'cover',
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LocationCard;
