import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    1000,
    [searchTerm]
  );

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      if (!API_KEY) {
        setErrorMessage('Missing API key. Please set VITE_API_KEY in .env.local');
        setIsLoading(false);
        return;
      }

      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?api_key=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Failed to fetch movies`);
      }

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        setMovieList(data.results);
      } else {
        setErrorMessage('No movies found.');
        setMovieList([]);
      }

      if(query && data.results.length > 0) {
        try {
          await updateSearchCount(query, data.results[0]);
        } catch (error) {
          console.error('Error updating search count:', error);
        }
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);

  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className='all-movies'>
        <h2 className='mt-[40px]'>All Movies</h2>


        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className='text-red-500'>{errorMessage}</p>
        ) : (
          <ul className='movie-list'>
            {movieList.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
          </ul>
        )}
        </section>
        

      </div>
    </main>
  )
}
