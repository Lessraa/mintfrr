function Footer() {
    return (
      <footer style={footerStyle}>
        <p>© 2024 ApePunks</p>
        <div> {/* Sosyal medya ikonları buraya eklenebilir */} </div>
      </footer>
    );
  }
  
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
  };
  
  export default Footer;
  