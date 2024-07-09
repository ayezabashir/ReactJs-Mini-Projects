/* eslint-disable react/prop-types */
const User = ({ users }) => {
  return (
    <div className="user-info">
      {users.map((item) => (
        <div key={item.id} className="user">
          <div className="img">
            <img src={item.image} alt={item.firstName} />
          </div>
          <div className="info">
            <p>
              Full Name:
              <h3>
                {item.firstName} {item.lastName}
              </h3>
            </p>
            <p>
              Age:
              <h2>{item.age}</h2>
            </p>
            <p>
              Birthday: <b>{item.birthDate}</b>
            </p>
            <small>
              Blood Group: <b>{item.bloodGroup}</b>
            </small>
            <p>
              Univeristy: <b>{item.university}</b>
            </p>
            <div className="contact-info">
              <h3>Contact {item.firstName}</h3>
              <p>
                Contact: <b>{item.phone}</b>
              </p>
              <p>
                Email: <b>{item.email}</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
