import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, fetchPosts } from '../../store/redditSlice';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    dispatch(setSearchTerm(searchTerm));
    dispatch(fetchPosts());
    const searchQuery = {
      q: searchTerm,
    };
    const query = createSearchParams(searchQuery);
    navigate({
      pathname: '/search',
      search: `?${query}`,
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input id='site-search' name='q' type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;