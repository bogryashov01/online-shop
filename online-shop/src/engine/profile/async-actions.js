// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

// Mocks
import { profile } from '../../Constants/mockProfile';

const getProfileData = createAsyncThunk('/getprofileData', async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(profile);
    }, 700);
  }).then((res) => res);
});

const profileAsyncActions = {
  getProfileData,
};

export default profileAsyncActions;
