const selfSelector = (state) => state.profile;
const pendingSelector = (state) => selfSelector(state).pending;

const isLogInSelector = (state) => selfSelector(state).isLogIn;
const profileSelector = (state) => selfSelector(state).profileData;

const profileSelectors = {
  pending: pendingSelector,
  profile: profileSelector,
  isLogIn: isLogInSelector,
};

export default profileSelectors;
