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
      <div>
        <img src={avatar_url} alt={name} />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          Joined on:{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}{" "}
        </p>
      </div>
      <div>
        <div>
          <p>Public Repositories: </p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers: </p>
          <p> {followers} </p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
