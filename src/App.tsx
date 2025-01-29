import React from 'react';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { LatestMovies } from './components/LatestMovies';
import { MovieDetailsModal } from './components/MovieDetailsModal';
import { OwnerInfo } from './components/OwnerInfo';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { Search } from 'lucide-react';
import type { Movie } from './types';

// Sample data
const latestMovies: Movie[] = [
    {
    id: '8',
    title: 'Sweet Strawberries S01',
    description: 'Sweet Strawberries - Season 1 (2024) follows a heartfelt journey through love complexities of relationships in the modern world. Set against vibrant backgrounds, it explores emotional depth, humor, and the beauty of life',
    posterUrl: 'https://qqcdnpictest.mxplay.com/pic/1ab3b367e7376e615dd1c9b055f95395/en/16x9/1600x900/test_pic1735541481107.jpg',
    year: 2024,
    cast: ['Álvaro Morte', 'Úrsula Corberó', 'Itziar Ituño', 'Pedro Alonso'],
    rating: 8.5,
    duration: '50m - 60m',
    quality: ['4K HDR', '1080p', 'AV1', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Portuguese', 'DDP 2.0'],
    downloads: 0,
    likes: 0,
    views: 0,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [/* ... existing download links ... */]
  },
  // ... (other movies with downloads, likes, and views initialized to 0)
];

const qualityCategories = [
  '4K HDR',
  '4K UHD',
  '1080p 60FPS',
  '1080p',
  '720p'
];

const audioCategories = [
  'Tamil',
  'Hindi',
  'Telugu',
  'English',
  'Multi Audio'
];

const todayUpdates = [
  {
    id: 1,
    title: "New 4K HDR Releases",
    quote: "Experience cinema in stunning quality",
    news: "Latest movies now available in 4K HDR format"
  },
  {
    id: 2,
    title: "Multi-Language Support",
    quote: "Watch in your preferred language",
    news: "Added more regional language options"
  }
];

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showOwnerInfo, setShowOwnerInfo] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [movieSearchTerm, setMovieSearchTerm] = React.useState('');
  const [selectedQuality, setSelectedQuality] = React.useState<string | null>(null);
  const [selectedAudio, setSelectedAudio] = React.useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const filteredMovies = React.useMemo(() => {
    let filtered = allMovies;
    
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        movie.quality.some(q => q.toLowerCase().includes(searchTerm.toLowerCase())) ||
        movie.audio.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (movieSearchTerm.trim() !== '') {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(movieSearchTerm.toLowerCase())
      );
    }

    if (selectedQuality) {
      filtered = filtered.filter(movie =>
        movie.quality.some(q => q.toLowerCase() === selectedQuality.toLowerCase())
      );
    }

    if (selectedAudio) {
      filtered = filtered.filter(movie =>
        movie.audio.some(a => a.toLowerCase() === selectedAudio.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, movieSearchTerm, selectedQuality, selectedAudio]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme}
        onContactClick={() => setShowContactForm(true)}
        onOwnerInfoClick={() => setShowOwnerInfo(true)}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Latest Movies Carousel */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Releases</h2>
            <LatestMovies 
              movies={latestMovies.slice(0, 5)} 
              onMovieSelect={setSelectedMovie}
              currentSlide={currentSlide}
            />
          </section>

          {/* Quality Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quality</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {qualityCategories.map((quality) => (
                <button
                  key={quality}
                  onClick={() => setSelectedQuality(quality)}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    selectedQuality === quality
                      ? 'bg-gradient-to-r from-red-600 to-red-800 text-white'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-red-500 hover:to-red-700 hover:text-white'
                  }`}
                >
                  {quality}
                </button>
              ))}
            </div>
          </section>

          {/* Audio Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Audio</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {audioCategories.map((audio) => (
                <button
                  key={audio}
                  onClick={() => setSelectedAudio(audio)}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    selectedAudio === audio
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-500 hover:to-blue-700 hover:text-white'
                  }`}
                >
                  {audio}
                </button>
              ))}
            </div>
          </section>

          {/* Today's Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Today's Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {todayUpdates.map((update) => (
                <div 
                  key={update.id}
                  className="p-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                  <p className="italic mb-2">"{update.quote}"</p>
                  <p className="text-sm opacity-90">{update.news}</p>
                </div>
              ))}
            </div>
          </section>

          {/* All Movies Grid */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex-1 w-full sm:w-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedQuality ? `${selectedQuality} Movies` : selectedAudio ? `${selectedAudio} Movies` : 'All Movies'}
                </h2>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={movieSearchTerm}
                    onChange={(e) => setMovieSearchTerm(e.target.value)}
                    placeholder="Search movies by title..."
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              {(selectedQuality || selectedAudio) && (
                <button
                  onClick={() => {
                    setSelectedQuality(null);
                    setSelectedAudio(null);
                  }}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Clear Filter
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => setSelectedMovie(movie)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {showOwnerInfo && (
        <OwnerInfo onClose={() => setShowOwnerInfo(false)} />
      )}
    </div>
  );
}

export default App;
