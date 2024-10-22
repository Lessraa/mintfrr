function MintCard() {
    return (
      <div style={mintCardStyle}>
        <h2>Mint Your ApePunk</h2>
        <p>Total minted: 10000 / 10000</p>
        <p>Price: 5 APE per NFT</p>
        <p>Max 100 per wallet</p>
        <input type="number" defaultValue={1} min={1} max={100} />
        <button style={buttonStyle}>Mint ApePunk(s)</button>
      </div>
    );
  }
  
  const mintCardStyle = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '10px',
    margin: '20px auto',
    width: '80%',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#00f',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
  };
  
  export default MintCard;
  