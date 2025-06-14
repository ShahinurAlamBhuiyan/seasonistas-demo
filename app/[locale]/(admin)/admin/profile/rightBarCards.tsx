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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profileImage1 from "~/app/assets/Ellipse 4149.png";
import Image from "next/image";
import ProfileMenu from "./modals/ProfileMenu";
const RightBarCards = () => {
    const avatarUrl = "https://randomuser.me/api/portraits/men/32.jpg";
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
      const cards = Array.from({ length: 5 }); // Create 5 cards

       const handleClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        const open = Boolean(anchorEl);
  return (
    <>
    {cards.map((_, index) => (
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: "0px 0px 4px rgba(0,0,0,0.05)",
                p: 2,
                width: "100%",
                mb: "20px",
              }}
            >
              {/* Header Section */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Image
                    src={profileImage1}
                    alt="Ali Haider"
                    style={{ width: 45, height: 45 }}
                  />
                  <Box>
                    <Typography fontWeight="bold" fontSize={14}>
                      Ali Haider
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      UI/UX Designer
                    </Typography>
                  </Box>
                </Stack>

                <IconButton size="small" onClick={handleClick}>
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </Stack>

              <Divider
                sx={{ m: "10px 10px 10px 10px", borderColor: "#e0e0e0" }}
              />

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
                mb={2}
                sx={{
                  fontSize: 12.5,
                  lineHeight: 1.4,
                }}
              >
                We are seeking a creative and detail-oriented UI/UX Designer to
                craft intuitive...
              </Typography>

              {/* Buttons */}
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontSize: 13,
                    borderRadius: "999px",
                    borderColor:"gray",
            color:"#000000",
                  }}
                >
                  Message
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontSize: 13,
                    borderRadius: "999px",
                    backgroundColor: "#4e8c8a",
                    "&:hover": {
                      backgroundColor: "#407878",
                    },
                  }}
                >
                  Connect
                </Button>
              </Stack>
              <ProfileMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
            </Box>
          ))}
    </>
     
  );
};

export default RightBarCards;
