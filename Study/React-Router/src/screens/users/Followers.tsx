import { Link, useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { userId } = useParams();
  console.log(userId);
  const context: IFollowersContext = useOutletContext();
  return (
    <div>
      <h1>{context.nameOfMyUser}'s Followers</h1>
      <Link to={`/users/${userId}`}>Back</Link>
    </div>
  );
}

export default Followers;
