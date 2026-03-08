import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // fetch the data from tmdb api and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
      
      MainContainer
        - videoBackground
        - video title
      SecondaryContainer
        - MoviesList * N
          - cards * n
      
      
      
      
      
      */}
    </div>
  );
};

export default Browse;
