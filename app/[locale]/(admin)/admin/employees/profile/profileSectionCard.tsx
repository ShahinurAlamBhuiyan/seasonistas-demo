import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";

const ProfileSectionCard = ({
  title,
  description,
  addText,
  data,
  footerText,
  type,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff",
        width: '100%'
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
        </Box>

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

    </Card>
  );
};

export default ProfileSectionCard;
