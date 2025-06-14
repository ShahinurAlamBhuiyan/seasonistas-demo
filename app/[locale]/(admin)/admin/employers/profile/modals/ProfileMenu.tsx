import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import ReportProfileModal from './ReportProfileModal';

interface ProfileMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, open, onClose }) => {
  const [reportOpen, setReportOpen] = useState(false);

  const handleReportClick = () => {
    onClose(); // Close the menu
    setTimeout(() => setReportOpen(true), 200); // Delay modal to ensure menu fully closes
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { borderRadius: 2, boxShadow: 3 },
        }}
      >
        <MenuItem onClick={onClose}>Share Profile</MenuItem>
        <MenuItem onClick={onClose}>Save Profile PDF</MenuItem>
        <MenuItem onClick={handleReportClick}>Report Profile</MenuItem>
      </Menu>

      <ReportProfileModal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
      />
    </>
  );
};

export default ProfileMenu;
