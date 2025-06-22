import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import AddAboutModal from "./modals/AddAboutModal";

const AboutUsCard = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [aboutText, setAboutText] = useState(
    `I am a passionate UI/UX & Product Designer, dedicated to creating intuitive, user-friendly, and visually compelling digital experiences...`
  );

  const handleSave = (updatedText: string) => {
    setAboutText(updatedText);
    setOpen(false);
  };

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
            {type === "about" ? "About" : "Overview"}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpen(true)}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 550,
              borderColor: "#EBECF0",
              color: "#000000",
              fontSize: "0.875rem",
              px: 3,
              py: 0.8,
            }}
          >
            Edit About
          </Button>
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Edit About to increase the chance of
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 14.5, color: "#333" }}>
          {aboutText}{" "}
          <Typography component="span" sx={{ color: "#0073e6", fontWeight: 500 }}>
            see more
          </Typography>
        </Typography>
      </CardContent>

      <AddAboutModal
        open={open}
        onClose={() => setOpen(false)}
        savedData={aboutText}
        onSave={handleSave}
      />
    </Card>
  );
};

export default AboutUsCard;
