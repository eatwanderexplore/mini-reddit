import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchPosts } from '../../store/redditSlice';

const Search = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
    dispatch(fetchPosts());
  };

  return (
    <form onSubmit={onSearchTermSubmit} className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={searchTermLocal}
        onChange={onSearchTermChange}
        aria-label="Search posts"
      />
      <button type="submit" className="search-button" aria-label="Search">
        <HiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
