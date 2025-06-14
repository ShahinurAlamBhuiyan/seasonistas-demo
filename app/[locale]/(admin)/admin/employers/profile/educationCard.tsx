import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Grid,
  Paper,
  Avatar,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import AddEducationModal from "./modals/AddEducationModal";

const EducationCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        m: "20px 0px",
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
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpenModal(true)}
            sx={{
             borderRadius: "20px",
            textTransform: "none",
            fontWeight: 550,
            borderColor:"gray",
            color:"#000000",
            fontSize: "0.875rem",
            px: 2.5,
            }}
          >
            Add Education
          </Button>
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add education to increase the chance of hiring
        </Typography>

        {/* Content */}
        <Box display="flex" mb={2}>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/CalArts_logo.svg"
            variant="square"
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box flex={1}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={600}>
                California Institute of the Arts
              </Typography>
              <Box display="flex" gap={2}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#999",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => {
                    // handle delete
                  }}
                >
                  Delete
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#4e9a8e", // Match the green-blue Edit color in your image
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onClick={() => {
                    // handle edit
                  }}
                >
                  Edit
                </Typography>
              </Box>
            </Box>

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
      <AddEducationModal open={openModal} onClose={() => setOpenModal(false)} />
    </Card>
  );
};

export default EducationCard;
