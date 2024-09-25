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
        isLargeRow={true}
      />
      <Row
        title="NETFLIX Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="NETFLIX Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="NETFLIX Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="NETFLIX Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow={true}
      />
    </>
  );
};

export default RowList;
