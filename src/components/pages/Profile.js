import S from "../../css/Profile.module.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastName: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://127.0.0.1:8000/api-v2-p/profile");
      const { data } = await res.json();

      setProfile(data);
    };
    try {
      getData();
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    for (let x in profile) {
      if (profile[x] === "") {
        toast.warn("Please Fill All The Fields", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/api-v2-p/profile/${profile._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      await res.json();

      toast.success("User Updated", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className={S.profile}>
      <div className="container">
        <div className={S.content}>
          <div className={S.title}> Profile</div>
          <form>
            <div className={S.row}>
              <label htmlFor="#name">Name</label>
              <input
                onChange={(e) => {
                  setProfile({ ...profile, name: e.currentTarget.value });
                }}
                id="name"
                type="text"
                value={profile.name}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#last-name">Last Name</label>
              <input
                onChange={(e) => {
                  setProfile({ ...profile, lastName: e.currentTarget.value });
                }}
                id="last-name"
                type="email"
                value={profile.lastName}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#email">Email</label>
              <input
                onChange={(e) => {
                  setProfile({ ...profile, email: e.currentTarget.value });
                }}
                id="email"
                type="email"
                value={profile.email}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#location"> Location</label>
              <input
                onChange={(e) => {
                  setProfile({ ...profile, location: e.currentTarget.value });
                }}
                id="location"
                type="text"
                value={profile.location}
              />
            </div>

            <div className={S.row}>
              <button onClick={(e) => onSubmit(e)} type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
