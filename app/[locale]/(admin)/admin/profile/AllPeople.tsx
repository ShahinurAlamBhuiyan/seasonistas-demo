import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const people = [
  {
    name: 'Ali Haider',
    designation: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Ali Haider',
    designation: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Ali Haider',
    designation: 'UI/UX Designer',
    description:
      'We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms...',
    experience: '3 Year',
    salary: 'Monthly',
    skills: ['Figma', 'UI/UX', 'UI Designer'],
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

const AllPeople: React.FC | any = ({ changeView }: { changeView: any }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          All People
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: 550,
            borderColor: "gray",
            color: "#000000",
            fontSize: "0.875rem",
            px: 2.5,
          }}
          onClick={() => { changeView("people") }}
        >
          View All
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {people.map((person, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                border: '1px solid #eee',
                height: '100%',
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar src={person.image} alt={person.name} />
                    <Box>
                      <Typography fontWeight="bold" display="flex" alignItems="center">
                        {person.name}
                        <CheckCircleRoundedIcon
                          sx={{ color: '#00C292', fontSize: 16, ml: 0.5 }}
                        />
                      </Typography>
                      <Typography fontSize={13} color="text.secondary">
                        {person.designation}
                      </Typography>
                    </Box>
                  </Stack>
                  <IconButton size="small" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                  </Menu>
                </Stack>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 13, mb: 1.5 }}
                >
                  {person.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2} sx={{ rowGap: 1, columnGap: 2 }}>
                  <Chip
                    label={`Experience: ${person.experience}`}
                    size="small"
                    sx={{ fontSize: 11 }}
                  />
                  <Chip
                    label={`Salary: ${person.salary}`}
                    size="small"
                    sx={{ fontSize: 11 }}
                  />
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {person.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: 11 }}
                    />
                  ))}
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

export default AllPeople;
