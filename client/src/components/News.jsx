import { useState, useEffect } from "react";
import Card from "./Card";
import Loader from "./Loader";

const APIKEY = "1cbf5337ba104fa4be49d1bebade87a2";

function News() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const pageSize = 12; // Define page size here

  function handlePrev() {
    setPage((pagePrev) => setPage(pagePrev - 1));
  }
  function handleNext() {
    setPage((pageNext) => setPage(pageNext + 1));
  }

  useEffect(() => {
    fetch(
      `http://localhost:3000/all-news?sortBy=popularity&page=${page}&pageSize=${pageSize}&apikey=${APIKEY}`
    )
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          // console.log(response.clone().json());
          setIsLoading(true);
          return response.clone().json();
        }
      })
      .then((myJson) => {
        // console.log(myJson)
        setTotalResults(myJson.data.totalResults);
        setData(myJson.data.articles);
      });
    setIsLoading(false);
  }, [page]);

  return (
    <div className="allCards">
      <div className=" cards-container my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {isLoading ? (
          data.map((elem, index) => {
            return (
              <Card
                title={elem.title}
                description={elem.description}
                imgUrl={elem.urlToImage}
                // publishedAt={elem.publishedAt}
                url={elem.url}
                author={elem.author}
                source={elem.source.name}
                key={index}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>

      <div className="pagination-btn-container">
        {isLoading && (
          <div className="pagination flex justify-content gap-14 my-10 items-center">
            <div className="btns">
              <button
                disabled={page < 1}
                className="pagination-btn text-center"
                onClick={() => handlePrev()}
              >
                &larr; Prev
              </button>

              <button
                disabled={page >= pageSize}
                className="pagination-btn text-center"
                onClick={() => handleNext()}
              >
                Next &rarr;
              </button>
            </div>
            <p className="page-num font-semibold opacity-80">
              {page} of {Math.ceil(totalResults / 15)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;
