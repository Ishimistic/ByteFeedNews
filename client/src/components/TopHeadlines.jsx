import { useState, useEffect } from "react";
import Card from "./Card";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

function TopHeadlines() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 6;

  function handlePrev() {
    setPage((pagePrev) => setPage(pagePrev - 1));
  }
  function handleNext() {
    setPage((pageNext) => setPage(pageNext - 1));
  }

  useEffect(() => {
    setIsLoading(true);
    const categoryParam = params.category ? `&category=${params.category}` : "";

    fetch(
      // `https://newsapi.org/v2/top-headlines?language=en&domains=${categoryParam}&page=${page}&pageSize=${pageSize}&apiKey=1cbf5337ba104fa4be49d1bebade87a2`
      `https://newsapi.org/v2/top-headlines?language=en&domains=${categoryParam}&page=${page}&pageSize=${pageSize}&apiKey=1cbf5337ba104fa4be49d1bebade87a2`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setTotalResults(json.data.totalResults);
        setData(json.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, params.category]);

  return (
    <>
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {isLoading ? (
          data.length > 0 ? (
            data.map((elem, index) => {
              return (
                <>
                console.log(elem);
                  <Card
                    title={elem.title}
                    description={elem.description}
                    imgUrl={elem.urlToImage}
                    publishedAt={elem.publishedAt}
                    url={elem.url}
                    author={elem.author}
                    source={elem.source.name}
                    key={index}
                  />
                </>
              );
            })
          ) : (
            <p>No articles found.</p>
          )
        ) : (
          <Loader />
        )}
      </div>

      {isLoading && (
        <div className="pagination flex justify-content gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn text-center"
            onClick={() => handlePrev()}
          >
            &larr; Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / 15)}
          </p>
          <button
            disabled={page <= 1}
            className="pagination-btn text-center"
            onClick={() => handleNext()}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
}


export default TopHeadlines;

