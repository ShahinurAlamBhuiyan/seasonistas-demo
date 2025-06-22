import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Stack,
  Button,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AddAboutModalProps {
  open: boolean;
  onClose: () => void;
  savedData: string;
  onSave: (text: string) => void;
}

const AddAboutModal: React.FC<AddAboutModalProps> = ({ open, onClose, savedData, onSave }) => {
  const [input, setInput] = useState(savedData || "");

  useEffect(() => {
    if (open) setInput(savedData || "");
  }, [open, savedData]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: '16px' } }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Edit About
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Edit About Here"
            multiline
            minRows={5}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': { borderRadius: 3 }
            }}
          />

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                borderColor: 'gray',
                color: '#000',
                fontSize: '14px',
                height: '40px',
                minWidth: '100px'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => onSave(input)}
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '14px',
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

export default AddAboutModal;
