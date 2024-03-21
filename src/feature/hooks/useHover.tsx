import React, { useState } from 'react'

const useHover = () => {

let [bool,setIsHovered] = useState(false);

let hover = () => setIsHovered(true);

let clear = () => setIsHovered(false);

return [bool,hover,clear];

}

export default useHover