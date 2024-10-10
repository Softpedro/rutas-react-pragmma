import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-[48px] mb-10">404</h2>
      <button type="button" onClick={() => navigate("/login")}>
        Ir al login
      </button>
    </div>
  );
};

export default NotFound;
