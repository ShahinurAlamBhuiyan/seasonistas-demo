import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  MenuItem,
  Stack,
  Button,
  Box,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddExperienceModalProps {
  open: boolean;
  onClose: () => void;
}

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance', "Employment type"];

const AddExperienceModal: React.FC<AddExperienceModalProps> = ({ open, onClose }) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{
      sx: {
        borderRadius: '16px',
      },
    }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Add Experience
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField placeholder="Job Title" fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }} />
          <TextField placeholder="Company Name" fullWidth size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }} />
          <TextField
            select
            placeholder="Employment type"
            fullWidth
            size="small"
            defaultValue="Employment type"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          >
            {employmentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <FormControlLabel
            control={
              <Checkbox
                checked={currentlyWorking}
                onChange={(e) => setCurrentlyWorking(e.target.checked)}
                sx={{
                  p: 0.5,
                  color: "#559093",
                  '&.Mui-checked': {
                    color: "#559093",
                  },
                }}
              />
            }
            label="I am currently working in this role"
            sx={{ fontSize: 13, ml: 0.5 }}
          />


          <TextField
            type="date"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />

          {/* {!currentlyWorking && ( */}
          <TextField
            type="date"
            label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          {/* )} */}

          <TextField
            multiline
            minRows={4}
            placeholder="Write Here Message"
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" onClick={onClose} sx={{
              borderRadius: 20, textTransform: 'none', px: 3, borderColor: "gray",
              color: "#000000",
              height: '40px',
              minWidth: '100px'
            }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: 20,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#3a6b61' },
                height: '40px',
                minWidth: '100px'
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

export default AddExperienceModal;
