// Modules
import styled from 'styled-components';

function ProfileScreen(props) {
  const { profile } = props;
  return (
    <div>
      <ProfileBlock>
        <ProfileImage src={profile.profile_image} alt={profile.profile_name} />
        <div>
          <div>
            <p>Name: {profile.profile_name}</p>
            <p>Surname: {profile.profile_surname}</p>
          </div>
          <h3>Last transaction</h3>
          <div>olo</div>
        </div>
      </ProfileBlock>
    </div>
  );
}

const ProfileImage = styled.img`
  border: 4px solid #ffb200;
  border-radius: 50%;
  width: 300px;
`;

const ProfileBlock = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 20px;
`;

export default ProfileScreen;
