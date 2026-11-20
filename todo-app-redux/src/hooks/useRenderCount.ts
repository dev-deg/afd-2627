import {useRef} from 'react';

//useRef hook (unlike useStatehook) does not cause a re-render when the value changes. 
//This makes it perfect for keeping track of the number of renders without causing an 
// infinite loop of re-renders.
const useRenderCount = (): number => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    return renderCount.current;
}

export default useRenderCount;