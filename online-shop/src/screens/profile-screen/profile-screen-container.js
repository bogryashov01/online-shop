// Components
import ProfileScreen from './profile-screen';

// Mock
import { profile } from '../../Constants/mockProfile';

function ProfileScreenContainer() {
  return <ProfileScreen profile={profile} />;
}
export default ProfileScreenContainer;
