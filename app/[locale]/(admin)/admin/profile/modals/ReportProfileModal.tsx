import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface ReportProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const ReportProfileModal: React.FC<ReportProfileModalProps> = ({
  open,
  onClose,
}) => {
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleReasonChange = (event: SelectChangeEvent) => {
    setReason(event.target.value as string);
  };

  const handleAttachmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setAttachment(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log({ reason, message, attachment });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{
      sx: {
        borderRadius: '16px',
      },
    }}>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Report Profile
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <FormControl fullWidth sx={{ mb: 2, mt: "10px" }}>
          <InputLabel>Reason for Report</InputLabel>
          <Select
            value={reason}
            onChange={handleReasonChange}
            label="Reason for Report"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
              borderRadius: 2,
            }}
          >
            <MenuItem value="spam">Spam</MenuItem>
            <MenuItem value="abuse">Abuse</MenuItem>
            <MenuItem value="fake">Fake Profile</MenuItem>
          </Select>
        </FormControl>

        <TextField
          placeholder="Write Here Message"
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            borderRadius: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": { borderRadius: 2 },
          }}
        />

        <Box
          component="label"
          htmlFor="file-upload"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #ccc",
            borderRadius: 2,
            padding: 3,
            cursor: "pointer",
            backgroundColor: "#fafafa",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: "gray", mb: 1 }} />
          <Typography variant="body2" sx={{ color: "gray" }}>
            Add Attachment (optional)
          </Typography>
          <input
            id="file-upload"
            type="file"
            hidden
            onChange={handleAttachmentChange}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "end", pb: 2 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            borderRadius: 8, borderColor: "gray", color: "#000000",
            height: '40px',
            minWidth: '100px',
            textTransform: 'none'
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#4e9a8e",
            color: "#fff",
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#407e75",
            },
            height: '40px',
            minWidth: '100px',
            textTransform: 'none'
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReportProfileModal;
