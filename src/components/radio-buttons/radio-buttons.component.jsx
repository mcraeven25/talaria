import { useState } from "react";

const RadioButtons = ({ size, }) => {
     const [currentSize, setCurrentSize] = useState(0);
   
    return ( 
        <div key={size}>
        <input type="radio" name={size} value={size} onChange={(e) => setCurrentSize(size)}
        checked={currentSize === size}/> {size}
        </div>
     );
}
 
export default RadioButtons;
