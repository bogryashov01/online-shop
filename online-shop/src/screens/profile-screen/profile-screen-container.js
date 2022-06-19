// Modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import ProfileScreen from './profile-screen';

// Selector
import profileSelectors from '../../engine/profile/selectors';

function ProfileScreenContainer() {
  const dispatch = useDispatch();
  const isLogIn = useSelector(profileSelectors.isLogIn);
  const profile = useSelector(profileSelectors.profile);

  useEffect(() => {});
  return <ProfileScreen profile={profile} isLogIn={isLogIn} />;
}
export default ProfileScreenContainer;
