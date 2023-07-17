import logo from "../img/logo.png";

const Nav = ({ handleChange, handleNumber }) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search-container">
        <div className="search-1">
          <input onChange={ handleChange } type="text" placeholder="Search by city name" />
        </div>
        <div className="search-2">
          <input onChange={ handleNumber } type="number" placeholder="Type a number"/>
        </div>

        <div className="search-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search search-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
