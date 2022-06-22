// Modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import ProfileScreen from './profile-screen';

// Selector
import profileSelectors from '../../engine/profile/selectors';

// Actions
import ProfileActions from '../../engine/profile/actions';
import profileAsyncActions from '../../engine/profile/async-actions';

function ProfileScreenContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileAsyncActions.getProfileData());
  }, [dispatch]);
  const isLogIn = useSelector(profileSelectors.isLogIn);
  const profile = useSelector(profileSelectors.profile);

  const isUserLoginHandler = (data) => {
    dispatch(ProfileActions.setIsLogin(data));
  };

  return (
    <ProfileScreen profile={profile} isLogIn={isLogIn} isUserLoginHandler={isUserLoginHandler} />
  );
}
export default ProfileScreenContainer;
