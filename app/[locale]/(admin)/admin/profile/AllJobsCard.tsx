import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Grid,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const jobs = [
  {
    title: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    rate: '$200/hr',
  },
  {
    title: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    rate: '$200/hr',
  },
  {
    title: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    rate: '$200/hr',
  },
];

const AllJobs: React.FC|any = ({changeView}:{changeView:any}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 3,
        p: 4,
        mt: 3,
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          All Jobs
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderRadius: "20px",
            textTransform: "none",
            fontWeight: 550,
            borderColor:"gray",
            color:"#000000",
            fontSize: "0.875rem",
            px: 2.5,}}
          onClick={()=>{changeView("job")}}
        >
          View All
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {jobs.map((job, index) => (
          <Grid size={{xs:12,  md:6}} key={index} >
            <Card
              sx={{
                borderRadius: 2,
                border: '1px solid #eee',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  {job.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 13, mb: 1.5 }}
                >
                  {job.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  <Chip
                    label={`Experience: ${job.experience}`}
                    size="small"
                    sx={{ fontSize: 11 }}
                  />
                  <Chip
                    label={`Salary: ${job.salary}`}
                    size="small"
                    sx={{ fontSize: 11 }}
                  />
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {job.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: 11 }}
                    />
                  ))}
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

export default AllJobs;
