/* eslint-disable react/prop-types */
export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <p>Aimee Darling</p>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-links">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
