function Banner() {
    return (
      <section style={bannerStyle}>
        <h1>ApePunks</h1>
        <p>First Punk collection on ApeChain!</p>
        <button style={buttonStyle}>Mint Now</button>
      </section>
    );
  }
  
  const bannerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#333',
    color: '#fff',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#00f',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
  };
  
  export default Banner;
  