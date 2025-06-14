import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface StatusModalProps {
  open: boolean;
  onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ open, onClose }) => {
  const [status, setStatus] = useState<'looking' | 'notLooking'>('looking');

  const handleChange = (value: 'looking' | 'notLooking') => {
    setStatus(value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Status
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={status === 'looking'}
              onChange={() => handleChange('looking')}
              sx={{ color: '#4B8378' }}
            />
          }
          label="I am Looking for a job"
          sx={{ mb: 1 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={status === 'notLooking'}
              onChange={() => handleChange('notLooking')}
              sx={{ color: '#4B8378' }}
            />
          }
          label="I am not Looking for a job"
        />
        <Box mt={2}>
          <Typography variant="caption" color="text.secondary">
            Note: by Hiding your Status your Profile be Hidden From Employer
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StatusModal;
