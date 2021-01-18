const Navbar = (props) => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand">Harry Potter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" style={{cursor:"pointer"}} onClick={props.fetchAllC}>Characters</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{cursor:"pointer"}} onClick={props.fetchS}>Students only</a>
      </li>
      <li className="nav-item" style={{cursor:"pointer"}} onClick={props.fetchSt}>
        <a className="nav-link">Staff only</a>
      </li>
    </ul>
  </div>
</nav>

)

export default Navbar