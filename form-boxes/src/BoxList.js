import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';
import { useState } from "react";


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function createBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function deleteBox(boxId) {
    setBoxes(boxes.filter(box => box.id !== boxId));
  }

  function renderBoxes() {
    return (
      <ul>
        {boxes.map(({ height, width, backgroundColor, id }) => (
          <li key={id} style={{ listStyleType: 'none' }}>
            <Box
              height={height}
              width={width}
              color={backgroundColor}
              click={deleteBox}
              id={id}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="Box-Maker">
      < NewBoxForm createBox={createBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;