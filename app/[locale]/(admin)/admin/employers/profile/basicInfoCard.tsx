import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
} from "@mui/material";

interface BasicInfoCardProps {
  type: "individual" | "company";
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<any>("")
  if (type === "individual") {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 4,
          maxWidth: "100%",
          m: "20px 0px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Basic Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Update profile information
            </Typography>
          </Box>

          <Button
            variant="outlined"
            size="small"
            onClick={() => { setModalType("individual"), setOpen(true) }}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 550,
              borderColor: "gray",
              color: "#000000",
              fontSize: "0.875rem",
              px: 2.5,
            }}
          >
            Edit Detail
          </Button>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Email Address
            </Typography>
            <Typography fontWeight="bold">anamoulrouf.bd@gmail.com</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Gender
            </Typography>
            <Typography fontWeight="bold">Male</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Phone Number
            </Typography>
            <Typography fontWeight="bold">+8801759693045</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Location
            </Typography>
            <Typography fontWeight="bold">Dhaka, Bangladesh</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              Website
            </Typography>
            <Typography fontWeight="bold">www.anamoulrouf.com</Typography>
          </Grid>
        </Grid>

      </Box>
    );
  }

  // Company View
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        p: 4,
        maxWidth: "100%",
        m: "20px 0px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Basic Information
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Website
          </Typography>
          <Typography fontWeight="bold">www.anamoulrouf.com</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Industry
          </Typography>
          <Typography fontWeight="bold">Retail</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Company Type
          </Typography>
          <Typography fontWeight="bold">Private Limited Company</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Company Size
          </Typography>
          <Typography fontWeight="bold">10,001+ employees</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Headquarters
          </Typography>
          <Typography fontWeight="bold">Faisalabad Punjab Pakistan</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Year of Establishment
          </Typography>
          <Typography fontWeight="bold">10 Year ago</Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default BasicInfoCard;
