import Reactimg from '../reactLogo.png';
function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={Reactimg}></img>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
