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
  CircularProgress,
} from "@mui/material";

const PercentageCard = () => {
    const [completionValue] = useState(72);
  return (
   <Box
               sx={{
                 backgroundColor: "#000",
                 color: "#fff",
                 borderRadius: 4,
                 p: 3,
                 display: "flex",
                 alignItems: "center",
                 gap: 3,
                 mt: "20px",
                 width: "100%",
   
                 mb: 4,
               }}
             >
               <Box position="relative" display="inline-flex">
                 <CircularProgress
                   variant="determinate"
                   value={completionValue}
                   size={70}
                   thickness={4}
                   sx={{
                     color: "#4e8c8a",
                     backgroundColor: "transparent",
                     position: "relative",
                     zIndex: 1,
                   }}
                 />
                 <CircularProgress
                   variant="determinate"
                   value={100}
                   size={70}
                   thickness={4}
                   sx={{
                     color: "#555",
                     zIndex: 0,
                     position: "absolute",
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
               <Box>
                 <Typography variant="h6" fontWeight="bold">
                   Your profile is 60% complete
                 </Typography>
                 <Typography variant="body2" sx={{ color: "#aaa", mt: 0.5 }}>
                   Add more details like About, Experience, Education, Languages,
                   Interests, and Goals to complete it.
                 </Typography>
               </Box>
             </Box>
  );
};

export default PercentageCard;
