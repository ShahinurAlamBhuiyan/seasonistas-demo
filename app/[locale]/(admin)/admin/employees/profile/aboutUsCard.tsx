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
import AddAboutModal from "./modals/AddAboutModal";

const AboutUsCard = ({ type }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,

        backgroundColor: "#fff",
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
            {type == "about" ? 'About' : "Overview"}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontSize: 14.5, color: "#333", mb: 1.5 }}
        >
          I am a passionate UI/UX & Product Designer, dedicated to
          creating intuitive, user-friendly, and visually compelling
          digital experiences. My journey in design is driven by a deep
          understanding of human-centered design principles, ensuring that
          every product I craft is both aesthetically pleasing and highly
          functional.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: 14.5, color: "#333" }}
        >
          With expertise in wireframing, prototyping, user research, and
          interaction design, I transform complex ideas into seamless and
          engaging digital solutions. My approach blends creativity with
          problem-solving, focusing on enhancing user satisfaction and
          optimizing product usability...{" "}
          <Typography
            component="span"
            sx={{ color: "#0073e6", fontWeight: 500 }}
          >
            see more
          </Typography>
        </Typography>
      </CardContent>
      <AddAboutModal open={open} onClose={() => setOpen(false)} />
    </Card>
  );
};

export default AboutUsCard;
