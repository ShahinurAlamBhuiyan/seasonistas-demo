'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Stack,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface StatusModalProps {
  open: boolean
  onClose: () => void
}

const StatusModal: React.FC<StatusModalProps> = ({ open, onClose }) => {
  const [status, setStatus] = useState<'looking' | 'notLooking'>('looking')

  const handleChange = (value: 'looking' | 'notLooking') => {
    setStatus(value)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          px: 3,
          py: 2,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', pl: 0, pr: 4, pb: 1 }}>
        Status
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pl: 0, pr: 0, pt: 1 }}>
        <Stack spacing={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={status === 'looking'}
                onChange={() => handleChange('looking')}
                sx={{
                  color: '#559093',
                  '&.Mui-checked': {
                    color: '#559093',
                  },
                  borderRadius: '4px',
                }}
              />
            }
            label="I am looking for a job"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={status === 'notLooking'}
                onChange={() => handleChange('notLooking')}
                sx={{
                  color: '#559093',
                  '&.Mui-checked': {
                    color: '#559093',
                  },
                  borderRadius: '4px',
                }}
              />
            }
            label="I am not looking for a job"
          />
        </Stack>

        <Box mt={2}>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '13px' }}>
            Note: By hiding your status, your profile will be hidden from employers.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default StatusModal
