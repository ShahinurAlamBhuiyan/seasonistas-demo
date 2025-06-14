import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Avatar,
  IconButton,
  Chip,
  Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const people = [
  {
    name: 'Ali Haider',
    role: 'UI/UX Designer',
    verified: true,
    active: true,
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
    email: 'user@example.com',
    phone: '+92 3XX XXXXXXX',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Ali Haider',
    role: 'UI/UX Designer',
    verified: true,
    active: true,
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
    email: 'user@example.com',
    phone: '+92 3XX XXXXXXX',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Ali Haider',
    role: 'UI/UX Designer',
    verified: true,
    active: false,
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.',
    email: 'user@example.com',
    phone: '+92 3XX XXXXXXX',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  // Add more mock entries as needed...
];

const AllJobPeopleGrid: React.FC|any = ({changeView}:{changeView:any}) => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold">
          All People
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{cursor:"pointer"}} onClick={()=>{changeView("home")}}>Overview</span> • People
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {people.map((person, index) => (
          <Grid size={{xs:12, sm:12,md:6, lg:4}} key={index}>
            <Card sx={{ borderRadius: 3, border: '1px solid #e0e0e0', height: '100%' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar src={person.avatar} />
                    <Box>
                      <Typography fontWeight={600} display="flex" alignItems="center">
                        {person.name}
                        {person.verified && (
                          <CheckCircleRoundedIcon sx={{ fontSize: 16, color: '#00C292', ml: 0.5 }} />
                        )}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {person.role}
                      </Typography>
                    </Box>
                  </Stack>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Stack>

                <Chip
                  label={person.active ? 'Active' : 'In Active'}
                  size="small"
                  sx={{
                    backgroundColor: person.active ? '#DFF5E4' : '#FEE4E2',
                    color: person.active ? '#12B76A' : '#F04438',
                    fontWeight: 500,
                    fontSize: 12,
                    mb: 1.5,
                  }}
                />

                <Typography variant="body2" color="text.secondary" fontSize={13} mb={1.5}>
                  {person.description}
                </Typography>

                <Typography variant="body2" fontWeight={500} mb={0.5}>
                  Top Skill
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {person.skills.map((skill, i) => (
                    <Chip key={i} label={skill} size="small" variant="outlined" sx={{ fontSize: 11 }} />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} mb={2}>
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Email:
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {person.email}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Phone:
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {person.phone}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="small"
                    sx={{ borderRadius: 20, textTransform: 'none' }}
                  >
                    Message
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{
                      backgroundColor: '#4B8378',
                      borderRadius: 20,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#3a6b61',
                      },
                    }}
                  >
                    Connect
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllJobPeopleGrid;
