// DECLARATION

// import { useState, useEffect } from "react";

// const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);

//   return matches;
// };

// export default useMediaQuery;

// WORKING

// return whether we're above the medium screen size
// const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
