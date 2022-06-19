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

// const getFilterProduct = createAsyncThunk('/getfilterProduct', async (searchResult) => {
//   console.log(searchResult, 'resultsearch');
//   return new Promise((res) => {
//     setTimeout(() => {
//       if (searchResult == '') {
//         return res(cardArray);
//       } else {
//         const result = cardArray.filter((productItem) => {
//           return productItem.productName === searchResult;
//         });
//         res(result);
//       }
//     }, 700);
//   }).then((res) => res);
// });
const profileAsyncActions = {
  getProfileData,
};

export default profileAsyncActions;
