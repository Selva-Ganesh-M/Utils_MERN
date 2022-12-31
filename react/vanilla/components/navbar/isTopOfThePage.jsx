// You can style the navbar if the user is not at the top of the page

// eg. "You can give background color just as the user started scrolling"

// const [isTopOfThePage, setIsTopOfThePage] = useState<Boolean>(true);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setIsTopOfThePage(true);
//         setSelectedSection(Sections.Home);
//       }
//       if (window.scrollY !== 0) {
//         setIsTopOfThePage(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
