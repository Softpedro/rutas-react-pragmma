import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <header className="fixed top-0 w-full shadow-md left-0 flex justify-between px-3 py-4">
      <h1>Mi aplicacion</h1>
      {isAuthenticated && <button onClick={handleLogout}>Cerrar Sesion</button>}
    </header>
  );
};

export default Header;
