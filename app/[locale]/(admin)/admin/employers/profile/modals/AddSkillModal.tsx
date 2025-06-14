import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Stack,
  Button,
  Box,
  Typography,
  Chip,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddSkillModalProps {
  open: boolean;
  onClose: () => void;
}

const suggestions = [
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop',
  'Adobe Photoshop', 'Figma', 'Figma', 'Adobe Illustrator',
  'Adobe Photoshop', 'Adobe Photoshop', 'Figma'
];

const AddSkillModal: React.FC<AddSkillModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Add Skill
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2}>
          <TextField
            placeholder="Enter Interests"
            fullWidth
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 10
              }
            }}
          />

          <Box sx={{bgcolor:"#f5f5f5",p:"10px", borderRadius:"10px"}}>
            <Typography fontSize={17} fontWeight={600} mb={2}>
              Suggestion for you
            </Typography>
            <Grid container spacing={1}>
              {suggestions.map((item, idx) => (
                <Grid size={{xs:4}} key={idx}>
                  <Chip
                    label={item}
                    variant="outlined"
                    sx={{
                      fontSize: 12,
                      borderRadius: 9,
                      px: 1.5,
                      height: 32,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{ borderRadius: 20, textTransform: 'none', px: 3 ,borderColor:"gray",
            color:"#000000",}}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: 20,
                textTransform: 'none',
                px: 3,
                '&:hover': { backgroundColor: '#3a6b61' },
              }}
            >
              Save
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;
