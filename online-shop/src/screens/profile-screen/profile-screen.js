// Modules
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

function ProfileScreen(props) {
  const { profile, pending, isLogIn, isUserLoginHandler } = props;

  return (
    <div>
      {isLogIn ? (
        !profile ? (
          <div> There are no user with this credentials try again</div>
        ) : pending ? (
          <LoaderBlock>
            <TailSpin height="100" width="100" color="#ffb200" ariaLabel="loading" />
          </LoaderBlock>
        ) : (
          <>
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
            <LogButton
              onClick={() => {
                isUserLoginHandler(false);
              }}
            >
              Log out
            </LogButton>
          </>
        )
      ) : (
        <LogInContainer>
          <p>need to login</p>
          <LogButton
            onClick={() => {
              isUserLoginHandler(true);
            }}
          >
            Log In
          </LogButton>
        </LogInContainer>
      )}
    </div>
  );
}

const ProfileImage = styled.img`
  border: 4px solid #ffb200;
  border-radius: 50%;
  width: 300px;
  justify-self: center;
`;

const ProfileBlock = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 20px;
`;

const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 125px 20px;
`;

const LogInContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;
const LogButton = styled.button`
  margin: 50px auto;
  display: flex;
`;

export default ProfileScreen;
