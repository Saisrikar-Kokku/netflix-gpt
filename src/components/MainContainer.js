import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { log } from "firebase/firestore/pipelines";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie);

  // MainContainer
  //     - videoBackground
  //     - video title
  //   SecondaryContainer
  //     - MoviesList * N
  //       - cards * n
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
