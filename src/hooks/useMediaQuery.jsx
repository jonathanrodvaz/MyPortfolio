import { useState, useEffect } from 'react';

//The following code will make it so it will allow us to pass a query and it will tell us when it particularly matches the size breakpoint or not.   
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }  
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
    
    return matches;
}

export default useMediaQuery;


