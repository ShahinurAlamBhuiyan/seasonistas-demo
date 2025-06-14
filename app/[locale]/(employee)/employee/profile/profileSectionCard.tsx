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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddSkillModal from "./modals/AddSkillModal";
import AddSingleInputModal from "./modals/AddSingleInputModal";

const ProfileSectionCard = ({
  title,
  description,
  addText,
  data,
  footerText,
  type,
}) => {
  const [openSkillModal, setSkillModal] = useState(false);
  const [openInterestModal, setInterestModal] = useState(false);
  const [openGoalModal, setGoalModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"Goal" | "Interests">("Goal");
  const handleOpen = (type: "Goal" | "Interests") => {
    setModalType(type);
    setOpenModal(true);
  };
  function check() {
    if (type == "skill") {
      setSkillModal(true);
    } else if (type == "interest") {
      handleOpen("Interests");
    } else if (type == "goal") {
      handleOpen("Goal");
    }
  }
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
            {title}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => check()}
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
            {addText}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          {description}
        </Typography>

        {/* Grid List */}
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #eee",
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  {item.level && (
                    <Typography
                      variant="body2"
                      sx={{ fontSize: 13, color: "#666" }}
                    >
                      {item.level}
                    </Typography>
                  )}
                </Box>
                <Box display="flex" gap={1}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      backgroundColor: "#888888", // gray background
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // handle delete
                    }}
                  >
                    <DeleteIcon sx={{ color: "white", fontSize: 16 }} />
                  </Box>

                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      backgroundColor: "#4e9a8e", // teal green background
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // handle edit
                    }}
                  >
                    <EditIcon sx={{ color: "white", fontSize: 16 }} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            color: "#559093",
            fontWeight: 600,
            mt: 2,
            cursor: "pointer",
          }}
        >
          {footerText}
        </Typography>
      </CardContent>
      <AddSkillModal
        open={openSkillModal}
        onClose={() => setSkillModal(false)}
      />
      <AddSingleInputModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        type={modalType}
      />
    </Card>
  );
};

export default ProfileSectionCard;
