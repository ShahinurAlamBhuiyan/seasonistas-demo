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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddEducationModalProps {
  open: boolean;
  onClose: () => void;
}

const AddEducationModal: React.FC<AddEducationModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{
      sx: {
        borderRadius: '16px',
      },
    }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Add Education
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField
            placeholder="School"
            fullWidth
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Degree"
            fullWidth
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Grade"
            fullWidth
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            multiline
            minRows={4}
            placeholder="Write Here Message"
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: 20, textTransform: 'none', px: 3, borderColor: "gray",
                color: "#000000",
                height: '40px',
                minWidth: '100px'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: 20,
                textTransform: 'none',
                height: '40px',
                minWidth: '100px',
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

export default AddEducationModal;
