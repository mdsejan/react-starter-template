import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const UserDashboard = () => {
  return (
    <Container>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-7xl font-bold">User DashBoard</h2>
        <Link to="/">
          <button className="py-2 px-6 bg-gray-200 mt-10">Back To Home</button>
        </Link>
      </div>
    </Container>
  );
};

export default UserDashboard;
