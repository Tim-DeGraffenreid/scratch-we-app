import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile(props) {

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <ProfileForm email={props.email} profile={props.profile} onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
