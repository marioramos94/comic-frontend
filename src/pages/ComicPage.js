import React, { useEffect, useContext } from "react";
import { getComic } from "../api";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Comic from "../components/Comic";
import RandomButton from "../components/RandomButton";
import Pagination from "../components/Pagination";
import Context from "../Context";

function ComicPage() {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let { comic, setComic } = useContext(Context);
  let pageNumber = params.page ? params.page : "last";
  const getCurrentComic = (comic) => {
    getComic(comic)
      .then((result) => {
        setComic(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getRandomComic = () => {
    navigate("/random");
    if (location.pathname === "/random") getCurrentComic("random");
  };
  useEffect(() => {
    getCurrentComic(pageNumber);
  }, [setComic, pageNumber]);

  return (
    <div className="App">
      <Comic {...comic} />
      <RandomButton onClick={getRandomComic} text="Random" />
      <Pagination page={comic.num} last={comic.last} navigate={navigate} />
    </div>
  );
}

export default ComicPage;
