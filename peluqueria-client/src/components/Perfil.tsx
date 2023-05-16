import React from 'react';
import { useStore } from 'zustand';
import { Box, Typography, IconButton } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { Profile } from '../models/perfile';
import { profileStore } from '../store/perfil';
import { Email } from '@mui/icons-material';

const ProfileCard: React.FC = () => {
  const profile = useStore(profileStore).profile;
  const updateProfile = useStore(profileStore).updateProfile;

  // const handleEditClick = () => {
  //   // Open a modal or navigate to an edit profile page
  //   // to allow the user to update their profile information
  // };

  const handleEmailClick = () => {
    window.location.href = `mail:${profile.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${profile.phone}`;
  };

  return (
    <>
    <Box sx={{ marginTop: "100px", marginBottom: "140px", }}>
      <Box display="flex" alignItems="center" marginBottom={1}>
        <Typography variant="h5" component="h2" textAlign={'center'} margin={"auto"}>
          <h3>`hola soy {profile.name}`</h3>

        </Typography>
        {/* <Button variant="outlined" size="small" onClick={handleEditClick}>
      Edit
    </Button> */}
      </Box>
      <Box sx={{ marginTop: "10PX", maxWidth: "750px", textAlign: 'center', margin: "auto" }}>
        <Typography variant="body1" component="p" margin={2} border={3} padding={2} align='center' borderRadius={5} borderColor={'gray'} boxShadow={"marron"} bgcolor={"lightgrey"}>
        {profile.bio}
      </Typography>

    </Box><Box display="flex" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent={'center'} >
          {/* <EmailIcon fontSize="small"  />
    <Typography variant="subtitle2" component="p" marginRight={1}>
      {profile.email}
    </Typography> */}
          <IconButton size="medium" onClick={handleEmailClick}>
            <Email fontSize="medium" />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          {/* <LocalPhoneIcon fontSize="small"  />
    <Typography variant="subtitle2" component="p" marginRight={1}>
      {profile.phone}
    </Typography> */}
          <IconButton size="medium" onClick={handlePhoneClick}>
            <LocalPhoneIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default ProfileCard;