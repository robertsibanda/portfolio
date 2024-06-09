import "../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-nav">
        <ul className="navbar-url">
          <li className="nav-item">
            <a href={"/"}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/projects/">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/about/">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
