/* eslint-disable react/prop-types */
const ProfileCard = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    created_at,
    name,
    login,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="profile-container">
      <div className="img">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="user-info">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          Joined on:{" "}
          <b>
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}{" "}
          </b>
        </p>
        <div className="info">
          <p>Public Repositories: </p>
          <b>{public_repos}</b>
        </div>
        <div className="info">
          <p>Followers: </p>
          <b> {followers} </b>
        </div>
        <div className="info">
          <p>Following</p>
          <b>{following}</b>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
