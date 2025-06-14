import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Chip,
  Button,
  IconButton,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const jobList = Array.from({ length: 12 }).map((_, index) => ({
  title: 'UI/UX Designer',
  date: '23 Nov 2025',
  description:
    'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...',
  experience: '3 Year',
  type: 'Full Time',
  salary: 'Salary: Monthly',
  location: 'Pakistan',
  workplace: 'Onsite Job',
  rate: '$200/hr',
}));

const AllJobsGrid: React.FC|any = ({changeView}:{changeView:any}) => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold">
          All Jobs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{cursor:"pointer"}} onClick={()=>{changeView("home")}}>Overview</span> • Jobs
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {jobList.map((job, idx) => (
          <Grid size={{xs:12, sm:12,md:6, lg:4}} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                border: '1px solid #e0e0e0',
                height: '100%',
              }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="start" mb={1}>
                  <Typography fontWeight="bold">{job.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {job.date}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 13, mb: 1.5 }}
                >
                  {job.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  <Chip label={`Experience: ${job.experience}`} size="small" />
                  <Chip label={job.type} size="small" />
                  <Chip label={job.salary} size="small" />
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  <Chip label={job.workplace} variant="outlined" size="small" />
                  <Chip label={job.location} variant="outlined" size="small" />
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography fontWeight="bold">{job.rate}</Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small">
                      <BookmarkBorderIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: '#4B8378',
                        textTransform: 'none',
                        borderRadius: 20,
                        px: 3,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#3a6b61',
                        },
                      }}
                    >
                      View ad
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllJobsGrid;
