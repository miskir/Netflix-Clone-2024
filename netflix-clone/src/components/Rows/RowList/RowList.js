import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX Tranding"
        fetchUrl={requests.fetchTranding}
        isLargeRow={true}
      />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="NETFLIX War Movies"
        fetchUrl={requests.fetchWarMovies}
        isLargeRow={false}
      />
    </>
  );
};

export default RowList;
