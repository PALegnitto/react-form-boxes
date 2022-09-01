
function Box({ height, width, color, click, id }) {

  function removeBox() {
    click(id)
  }
  
  return (
    <div>
      <div
        className='Box'
        style={{
          display: 'flex',
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: color,
          paddingTop: '10px',
        }}>
      </div>
      <button id={id} onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;