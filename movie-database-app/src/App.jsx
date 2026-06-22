import React, { useState, useEffect } from 'react';
import { Search, X, RotateCcw, Sun, Moon, Heart, Star, Sparkles, Film } from 'lucide-react';
import './App.css';

// Local Movie Data
const INITIAL_MOVIES = [
  {
    id: '1',
    title: 'Interstellar',
    year: '2014',
    genre: 'Sci-Fi',
    rating: 8.6,
    tags: ['Adventure', 'Space', 'Time', 'Survival'],
  },
  {
    id: '2',
    title: 'Star Wars: A New Hope',
    year: '1977',
    genre: 'Sci-Fi',
    rating: 8.6,
    tags: ['Space Opera', 'Rebels', 'Force', 'Galaxy'],
  },
  {
    id: '3',
    title: 'The Star',
    year: '2017',
    genre: 'Animation',
    rating: 6.1,
    tags: ['Family', 'Journey', 'Friends'],
  },
  {
    id: '4',
    title: 'Inception',
    year: '2010',
    genre: 'Sci-Fi',
    rating: 8.8,
    tags: ['Dreams', 'Heist', 'Reality', 'Mind-bending'],
  },
  {
    id: '5',
    title: 'Spirited Away',
    year: '2001',
    genre: 'Animation',
    rating: 8.6,
    tags: ['Fantasy', 'Spirit World', 'Adventure', 'Family'],
  },
  {
    id: '6',
    title: 'The Matrix',
    year: '1999',
    genre: 'Sci-Fi',
    rating: 8.7,
    tags: ['Cyberpunk', 'Simulation', 'Action', 'Philosophy'],
  }
];

function App() {
  // 1. Search Query State
  const [searchQuery, setSearchQuery] = useState('');
  
  // 2. Favorites List State (Store movie IDs)
  const [favorites, setFavorites] = useState(['1', '3']); // Prefill Interstellar and The Star to match the mockup initially!
  
  // 3. Theme State (Dark mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with body class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear Search Query
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // Reset all states
  const handleReset = () => {
    setSearchQuery('');
    setFavorites([]);
  };

  // Toggle Favorite Status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  // Quick state actions for demo purposes
  const setToNoInput = () => {
    setSearchQuery('');
  };

  const setToNoMatch = () => {
    setSearchQuery('non-existent-query-12345');
  };

  // Dynamic Filtering Logic
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearchActive = normalizedQuery.length > 0;
  
  const filteredMovies = INITIAL_MOVIES.filter((movie) => {
    if (!isSearchActive) return false;
    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.genre.toLowerCase().includes(normalizedQuery) ||
      movie.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
    );
  });

  // Extract all marked favorites from dataset
  const favoriteMovies = INITIAL_MOVIES.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="app-container">
      {/* Header section with Toggle theme and metadata */}
      <div className="header-row">
        <div className="title-section">
          <h1>Movie Explorer</h1>
          <p>Search, filter, and favorite movies. Designed for a single-page React component structure.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
          <button 
            type="button" 
            className="theme-toggle-btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>Toggle theme</span>
          </button>
          <div className="meta-status">
            <span className="status-dot"></span>
            <span>Local data · React state ready</span>
          </div>
        </div>
      </div>

      {/* Search Input Bar & Reset */}
      <div className="search-row">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon-left" />
          <input
            type="text"
            className="search-input"
            placeholder='Search movies (e.g. "Interstellar", "Star")'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="search-clear-btn" 
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button 
          type="button" 
          className="reset-btn" 
          onClick={handleReset}
        >
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
      </div>

      {/* Info Row: Results counter and state quick-helpers */}
      <div className="states-info-row">
        <div className="results-count">
          {isSearchActive ? (
            <span>
              {filteredMovies.length} {filteredMovies.length === 1 ? 'result' : 'results'} for "{searchQuery}"
            </span>
          ) : (
            <span>Ready to search</span>
          )}
        </div>
        <div className="quick-test-badges">
          <button 
            type="button" 
            className="quick-badge-btn" 
            onClick={setToNoInput}
          >
            No input &rarr; show hint
          </button>
          <button 
            type="button" 
            className="quick-badge-btn" 
            onClick={setToNoMatch}
          >
            No match &rarr; show empty state
          </button>
        </div>
      </div>

      {/* Two Column Layout: Matching Movies vs Favorite Movies */}
      <div className="content-columns">
        {/* Left Column: Matching Movies with Conditional Rendering */}
        <div className="movies-column">
          <div className="section-header">
            <h2>Matching Movies</h2>
            <span className="section-subtitle">Filtered from local movie data</span>
          </div>

          <div className="movie-list">
            {!isSearchActive && (
              /* State 1: No Input (Show Hint) */
              <div className="hint-state-card">
                <Sparkles size={28} className="state-icon" />
                <h3>Find Your Next Watch</h3>
                <p>Type keywords like <strong>"star"</strong>, <strong>"sci-fi"</strong>, or <strong>"animation"</strong> to filter through our library of movies.</p>
              </div>
            )}

            {isSearchActive && filteredMovies.length === 0 && (
              /* State 2: No Matching Results */
              <div className="empty-state-card">
                <Film size={28} className="state-icon" />
                <h3>No movies found</h3>
                <p>We couldn't find any movies matching "{searchQuery}". Please try another search term or click Reset.</p>
              </div>
            )}

            {isSearchActive && filteredMovies.length > 0 && (
              /* State 3: Successful Results */
              filteredMovies.map((movie) => {
                const isFavorited = favorites.includes(movie.id);
                return (
                  <div key={movie.id} className="movie-card">
                    <div className="movie-card-header">
                      <div className="movie-title-info">
                        <div className="movie-title-row">
                          <span className="movie-title">{movie.title}</span>
                          <span className="movie-meta-text">{movie.year} &middot; {movie.genre}</span>
                        </div>
                        <div className="movie-card-rating">
                          <Star size={12} fill="currentColor" />
                          <span>{movie.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      
                      <button
                        type="button"
                        className={`favorite-toggle-btn ${isFavorited ? 'btn-favorited' : 'btn-favorite'}`}
                        onClick={() => toggleFavorite(movie.id)}
                      >
                        <Heart size={14} fill={isFavorited ? 'currentColor' : 'none'} />
                        <span>{isFavorited ? 'Favorited' : 'Favorite'}</span>
                      </button>
                    </div>

                    <div className="tags-row">
                      {movie.tags.map((tag) => (
                        <span key={tag} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Favorite Movies */}
        <div className="favorites-column">
          <div className="section-header">
            <h2>Favorite Movies</h2>
            <span className="section-subtitle">Derived from favorite state</span>
          </div>

          <div className="favorites-panel">
            {favoriteMovies.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic', padding: '1rem 0' }}>
                You haven't added any favorites yet.
              </p>
            ) : (
              <div className="favorites-list">
                {favoriteMovies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="fav-chip" 
                    onClick={() => toggleFavorite(movie.id)}
                    title="Click to unfavorite"
                  >
                    <div className="fav-chip-left">
                      <Heart size={14} fill="currentColor" className="fav-chip-heart-icon" />
                      <span>{movie.title} ({movie.year})</span>
                    </div>
                    <X size={14} className="fav-chip-remove-icon" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
