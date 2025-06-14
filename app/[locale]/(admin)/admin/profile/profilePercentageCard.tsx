'use client'

import React, { useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Stack
} from "@mui/material";

const PercentageCard = () => {
  const [completionValue] = useState(72);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 4,
        p: { xs: 2, sm: 3 },
        width: "100%",
        mt: 3,
        mb: 4,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        alignItems="center"
      >
        {/* Circular Progress Section */}
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={completionValue}
            size={70}
            thickness={4}
            sx={{ color: "#4e8c8a", zIndex: 1 }}
          />
          <CircularProgress
            variant="determinate"
            value={100}
            size={70}
            thickness={4}
            sx={{
              color: "#555",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 0,
            }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="caption"
              component="div"
              color="white"
              fontWeight="bold"
            >
              {`${completionValue}%`}
            </Typography>
          </Box>
        </Box>

        {/* Text Section */}
        <Box textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" fontWeight="bold">
            Your profile is {completionValue}% complete
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#aaa", mt: 0.5, maxWidth: "500px" }}
          >
            Add more details like About, Experience, Education, Languages,
            Interests, and Goals to complete it.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PercentageCard;
