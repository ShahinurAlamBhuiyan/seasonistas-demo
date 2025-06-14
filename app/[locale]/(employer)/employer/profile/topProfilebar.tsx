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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import cardImage from "~/app/assets/card_image.png";
import cardImage2 from "~/app/assets/image (5).png";
import profileImage1 from "~/app/assets/Ellipse 4149.png";
import profileImage2 from "~/app/assets/image (4).png";
import StatusModal from "./modals/StatusModal";

const ProfileBarCard = ({type}) => {
   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",

        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "white",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Header Image Banner */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={type =="company"? cardImage2:cardImage}
          alt="Profile Banner"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Profile Section */}
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          alt="Anamoul Rouf"
          src={type =="company"? profileImage2:profileImage1}
          style={{
            width: 110,
            height: 110,
            zIndex:1,
            marginTop: -70,
          }}
        />
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="h5" fontWeight="bold">
             {type =="company"? "Lowe's Companies, Inc.":'Anamoul Rouf'} 
            </Typography>
            <Typography
              sx={{ color: "gray", fontWeight: "500", fontSize: "14px" }}
            >
             {type =="company"? `Do it right for less. Start with Lowe's.`:'Product Designer'}  
            </Typography>
          </Box>

          <Chip
            label="#EMP001"
            size="small"
            variant="filled"
            sx={{ ml: "10px", bgcolor: "#f5f5f5" }}
          />
          <br />
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            textAlign: "right",
            color: "#559093",
          }}
        >
          <Typography fontSize={18}>451 Follower</Typography>
        </Box>
      </Box>

      <Divider sx={{ m: "0px 10px 10px 10px", borderColor: "#e0e0e0" }} />
      {/* Footer Actions */}
     <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      sx={{
        m: isMobile ? "16px" : "18px 28px",
        alignItems: isMobile ? "stretch" : "center",
      }}
    >
      {/* Open to work */}
      <Button
        variant="contained"
        fullWidth={isMobile}
        sx={{
          backgroundColor: "#4e8c8a",
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 600,
          px: 3,
          fontSize: isMobile ? "0.9rem" : "1rem",
          "&:hover": {
            backgroundColor: "#407878",
          },
        }}
      >
       {type =="company"?"Follow":"Open to work"} 
      </Button>

      {/* Add Profile Section */}
      <Button
        variant="outlined"
        fullWidth={isMobile}
        sx={{
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 500,
          px: 3,
          fontSize: isMobile ? "0.9rem" : "1rem",
          borderColor: "#ddd",
          color: "#000",
          "&:hover": {
            borderColor: "#bbb",
          },
        }}
      >
        Add Profile Section
      </Button>

      {/* Status */}
      <Button
        variant="outlined"
        fullWidth={isMobile}
        onClick={() => setOpen(true)}
        sx={{
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 500,
          px: 3,
          fontSize: isMobile ? "0.9rem" : "1rem",
          borderColor: "#ddd",
          color: "#000",
          cursor: "pointer",
          "&:hover": {
            borderColor: "#bbb",
          },
        }}
      >
        Status
      </Button>

      {/* More */}
      <Button
        variant="outlined"
        fullWidth={isMobile}
        sx={{
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 500,
          px: 3,
          fontSize: isMobile ? "0.9rem" : "1rem",
          borderColor: "#eee",
          color: "#000",
          "&:hover": {
            borderColor: "#ccc",
          },
        }}
      >
        More
      </Button>
    </Stack>
       <StatusModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default ProfileBarCard;
