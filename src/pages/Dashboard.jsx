import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Contenido del dashboard</p>
      <button type="button" onClick={() => navigate("/products")}>
        Ir a Productos
      </button>
    </div>
  );
};

export default Dashboard;
