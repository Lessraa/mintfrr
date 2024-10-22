function Header() {
    return (
      <header style={headerStyle}>
        <div>Logo</div>
        <nav>
          <a href="#mint">Mint</a>
        </nav>
      </header>
    );
  }
  
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
  };
  
  export default Header;
  