import React, { useEffect, useState } from 'react'

const useClipboard = () => {

let [isOpened,setIsOpened] = useState(false);

let CopyToClipboard = (value : string) => {
        navigator.clipboard.writeText(value);
        setIsOpened(true);
        setTimeout(() => {
                setIsOpened(false)
                console.log(isOpened , 'အနိစ္စ')
        }, 2000);        
}

return {isOpened,CopyToClipboard};

}

export default useClipboard