import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);
    if (!user)
        return <p>No user logged in.Please log in to view your profile</p>
        
    return <div>
        <h2> Welcome {user.username}</h2>
    </div>
}

export default Profile;
