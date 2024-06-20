import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { searchMovies } from "../utils/constants";

export default function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const results = await searchMovies(query);
        setSearchResults(results);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div>
      <Navbar />
      <Container>
        <h2>Search Results for "{query}"</h2>
        <SearchResultsContainer>
          {searchResults.map((movie) => (
            <div key={movie.id} className="movie">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </SearchResultsContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding-top: 7rem;
  padding-left: 3rem;
  h2 {
    color: white;
  }
`;

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  .movie {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 150px;
      height: 225px;
      object-fit: cover;
    }
    .movie-info {
      text-align: center;
      h3 {
        margin: 0.5rem 0;
      }
      p {
        margin: 0;
      }
    }
  }
`;
