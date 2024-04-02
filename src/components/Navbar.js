const Navbar = () => {
    return (
      <nav className="navbar">
        <h1><a href="/" class="title">Middlebury Climbing Club</a></h1>
        <div className="links">
        {/* <a href="/">Home</a> */}
        <a href="/Announcements">Announcements</a>
            <div class="dropdown">
                <button class="dropbtn"><a href="/MiddGap">Midd Gap</a></button>
                <div class="dropdown-content">
                    <a href="/RoadsideBoulders">Roadside Boulders</a>
                    <a href="/HPBoulders">Harry Potter Boulders</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Nearby Climbing</button>
                <div class="dropdown-content">
                    <a href="https://www.mountainproject.com/area/111456867/abbey-pond-bouldering" target="_blank" rel="noopener noreferrer">Abbey Pond</a>
                    <a href="https://www.mountainproject.com/area/108194828/lake-dunmorefalls-of-lana" target="_blank" rel="noopener noreferrer">Lake Dunmore</a>
                    <a href="https://www.mountainproject.com/area/106083744/bolton-area" target="_blank" rel="noopener noreferrer">Bolton</a>
                    <a href="https://www.mountainproject.com/area/105891622/smugglers-notch" target="_blank" rel="noopener noreferrer">Smuggler's Notch</a>
                    <a href="https://www.mountainproject.com/area/122354139/snowy-mountain-bouldering" target="_blank" rel="noopener noreferrer">Snowy Mountain</a>
                    <a href="https://www.mountainproject.com/area/105867829/rumney" target="_blank" rel="noopener noreferrer">Rumney</a>
                </div>
            </div>
        </div>
      </nav>
    );
  }
   
  export default Navbar;