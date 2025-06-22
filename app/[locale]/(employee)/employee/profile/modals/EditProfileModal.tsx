'use client'

import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  MenuItem,
  Stack,
  Button,
  Box
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  type: 'individual' | 'company';
}

const genders = ['Male', 'Female', 'Other'];
const industries = ['Retail', 'Technology', 'Finance'];
const companyTypes = ['Private Limited Company', 'Public Company', 'Sole Proprietorship'];
const companySizes = ['1-10 employees', '11-50 employees', '51-200 employees', '201-1000 employees', '1001-10000 employees', '10,001+ employees'];

const EditProfileModal: React.FC<EditProfileModalProps> = ({ open, onClose, type }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
        },
      }}
    >

      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Edit Basic Information
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          {type === 'individual' ? (
            <>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Email Address"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <TextField
                variant="outlined"
                size="small"
                select
                defaultValue="Male"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Phone Number"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <TextField
                variant="outlined"
                size="small"
                placeholder="Location"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <TextField
                variant="outlined"
                size="small"
                placeholder="Website"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />


            </>
          ) : (
            <>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Website"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <TextField
                select
                size="small"
                fullWidth
                defaultValue="Retail"
                label="Industry"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              >
                {industries.map((industry) => (
                  <MenuItem key={industry} value={industry}>
                    {industry}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                size="small"
                fullWidth
                defaultValue="Public Company"
                label="Company Type"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              >
                {companyTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                size="small"
                fullWidth
                defaultValue="1-10 employees"
                label="Company Size"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              >
                {companySizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Headquarters"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <TextField
                variant="outlined"
                size="small"
                placeholder="Year of Establishment"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
              />
              <Box display="flex" gap={2}>
                <TextField
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="Start Date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
                />
                <TextField
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="End Date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
                />
              </Box>
            </>
          )}

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: '44px !important',
                textTransform: 'none',
                px: 3,
                borderColor: 'gray',
                color: '#000',
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
                borderRadius: '44px !important',
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
  )
}

export default EditProfileModal
