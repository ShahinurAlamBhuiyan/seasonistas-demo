import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Button,
  Grid,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddExperienceModal from "./modals/AddExperienceModal";

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    role: "Sr. Product Designer",
    company: "SharTrip Inc.",
    location: "Dhaka, Bangladesh",
    duration: "January 2022 to Present",
    description:
      "ShareTrip is the country’s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/ShareTrip_Logo.png",
  },
  {
    role: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    duration: "January 2022 to Present",
    description:
      "ShareTrip is the country’s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Grameenphone_logo.svg/1200px-Grameenphone_logo.svg.png",
  },
];

const ExperienceCard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: '100%',
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff",
        mb: "20px",
        mt: "20px",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Experiences
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
            Add Experiences
          </Button>
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add experience to increase the chance of hiring
        </Typography>

        {experiences.map((exp, idx) => (
          <Box key={idx} mb={2}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 1 }}>
                <Avatar
                  src={exp.logo}
                  alt={exp.company}
                  sx={{ width: 48, height: 48 }}
                  variant="circular"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 11 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={600}>
                    {exp.role}{" "}
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: 16,
                        color: "#00c292",
                        ml: 0.5,
                        verticalAlign: "middle",
                      }}
                    />
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

                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="text.secondary"
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 13, color: "#555", mb: 1 }}
                >
                  {exp.location} &nbsp;&nbsp; {exp.duration}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 13.5, color: "#333" }}
                >
                  {exp.description}{" "}
                  <Typography
                    component="span"
                    sx={{ color: "#0073e6", fontWeight: 500 }}
                  >
                    See More
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            {idx < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}

        <Typography
          variant="body2"
          sx={{
            fontSize: 15,
            color: "#559093",
            fontWeight: 600,
            mt: 1,
            cursor: "pointer",
          }}
        >
          Show 2 More Experiences
        </Typography>
      </CardContent>
      <AddExperienceModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Card>
  );
};

export default ExperienceCard;
