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
    id: '1',
    title: 'Jailer',
    description: 'A retired jailer goes on a manhunt to find his son\'s killers.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Action', 'Drama', 'Thriller'],
    director: 'Nelson Dilipkumar',
    cast: ['Rajinikanth', 'Mohanlal', 'Jackie Shroff'],
    rating: 4.5,
    duration: '2h 48m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 150000,
    likes: 25000,
    channelName: 'TamilRockers',
    channelLink: 'https://example.com/tamilrockers',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.5 GB',
        url: 'https://example.com/download/jailer-4k'
      },
      {
        quality: '1080p',
        size: '2.1 GB',
        url: 'https://example.com/download/jailer-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/jailer-720p'
      }
    ]
  },
    {
    id: '5',
    title: 'Jailer',
    description: 'A retired jailer goes on a manhunt to find his son\'s killers.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Action', 'Drama', 'Thriller'],
    director: 'Nelson Dilipkumar',
    cast: ['Rajinikanth', 'Mohanlal', 'Jackie Shroff'],
    rating: 4.5,
    duration: '2h 48m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 150000,
    likes: 25000,
    channelName: 'TamilRockers',
    channelLink: 'https://example.com/tamilrockers',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.5 GB',
        url: 'https://example.com/download/jailer-4k'
      },
      {
        quality: '1080p',
        size: '2.1 GB',
        url: 'https://example.com/download/jailer-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/jailer-720p'
      }
    ]
  },
      {
    id: '3',
    title: 'Hisaab Barabar',
    description: 'Hisaab Barabar (2025) 1080p [H.265 - 1.55 GB | H.264 - 2.11 GB] 720p [H.265 - 1.25 GB | H.264 - 1.46 GB] 🎧 Tamil | Telugu | Hindi (AAC 2.0 @ 248 kb/s) 📄 ESubs - GDRIVE',
    posterUrl: 'https://assets.gadgets360cdn.com/pricee/assets/product/202501/Hisaab_Barabar_Poster_1_1736768897.jpg',
    year: 2024,
    genre: ['Action', 'Drama', 'Thriller'],
    cast: ['R Madhavan', 'Neil Nitin Mukesh', 'Rashmi Desai', 'Kirti Kulhari'],
    rating: 4.5,
    duration: '1h 51m',
    quality: ['1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 15,
    likes: 25,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p',
        size: '2.11 GB',
        url: 'https://gplinks.co/BE6iH'
      },
      {
        quality: '1080p',
        size: '1.55 GB',
        url: 'https://gplinks.co/Jsud'
      },
      {
        quality: '720p',
        size: '1.46 GB',
        url: 'https://gplinks.co/MH6SaPyX'        
      },
      {
        quality: '720p',
        size: '1.25 GB',
        url: 'https://gplinks.co/2IJT8TIW'
      }
    ]
  },
  {
    id: '4',
    title: 'Thiru Manickam',
    description: 'Thiru Manickam - 2024 2160p | 1080p | 720p [ H.265 - 2.66 GB | 1.57 GB | 1.13 GB ] 🎧 Tamil | Hindi | Telugu | Dolby Digital Plus 5.1 @ 640 kb/s 📄 ESubs  - GDRIVE',
    posterUrl: 'https://media.assettype.com/cinemaexpress%2Fimport%2Fuploads%2Fuser%2Fckeditor_images%2Farticle%2F2024%2F1%2F1%2F3aa7878c-182d-48b7-bd50-09bd15b0c089.jpg',
    year: 2024,
    genre: ['Action', 'Drama', 'Thriller'],
    cast: ['Rajinikanth', 'Mohanlal', 'Jackie Shroff'],
    rating: 4.5,
    duration: '2h 48m',
    quality: ['2160p', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 15,
    likes: 25,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '2160p',
        size: '2.66 GB',
        url: 'https://gplinks.co/j4Ler'
      },
      {
        quality: '1080p',
        size: '1.57 GB',
        url: 'https://gplinks.co/u4ERZwG'
      },
      {
        quality: '720p',
        size: '1.13 GB',
        url: 'https://gplinks.co/gOVj4w'
      }
    ]
  },
  // ... (keep other movie data)
];

const allMovies = [
  ...latestMovies,
      {
    id: '8',
    title: 'Hisaab Barabar',
    description: 'Hisaab Barabar (2025) 1080p [H.265 - 1.55 GB | H.264 - 2.11 GB] 720p [H.265 - 1.25 GB | H.264 - 1.46 GB] 🎧 Tamil | Telugu | Hindi (AAC 2.0 @ 248 kb/s) 📄 ESubs - GDRIVE',
    posterUrl: 'https://assets.gadgets360cdn.com/pricee/assets/product/202501/Hisaab_Barabar_Poster_1_1736768897.jpg',
    year: 2024,
    genre: ['Action', 'Drama', 'Thriller'],
    cast: ['R Madhavan', 'Neil Nitin Mukesh', 'Rashmi Desai', 'Kirti Kulhari'],
    rating: 4.5,
    duration: '1h 51m',
    quality: ['1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 15,
    likes: 25,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p',
        size: '2.11 GB',
        url: 'https://gplinks.co/BE6iH'
      },
      {
        quality: '1080p',
        size: '1.55 GB',
        url: 'https://gplinks.co/Jsud'
      },
      {
        quality: '720p',
        size: '1.46 GB',
        url: 'https://gplinks.co/MH6SaPyX'        
      },
      {
        quality: '720p',
        size: '1.25 GB',
        url: 'https://gplinks.co/2IJT8TIW'
      }
    ]
  },
  {
    id: '7',
    title: 'Thiru Manickam',
    description: 'Thiru Manickam - 2024 2160p | 1080p | 720p [ H.265 - 2.66 GB | 1.57 GB | 1.13 GB ] 🎧 Tamil | Hindi | Telugu | Dolby Digital Plus 5.1 @ 640 kb/s 📄 ESubs  - GDRIVE',
    posterUrl: 'https://media.assettype.com/cinemaexpress%2Fimport%2Fuploads%2Fuser%2Fckeditor_images%2Farticle%2F2024%2F1%2F1%2F3aa7878c-182d-48b7-bd50-09bd15b0c089.jpg',
    year: 2024,
    genre: ['Action', 'Drama', 'Thriller'],
    cast: ['Rajinikanth', 'Mohanlal', 'Jackie Shroff'],
    rating: 4.5,
    duration: '2h 48m',
    quality: ['2160p', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 15,
    likes: 25,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '2160p',
        size: '2.66 GB',
        url: 'https://gplinks.co/j4Ler'
      },
      {
        quality: '1080p',
        size: '1.57 GB',
        url: 'https://gplinks.co/u4ERZwG'
      },
      {
        quality: '720p',
        size: '1.13 GB',
        url: 'https://gplinks.co/gOVj4w'
      }
    ]
  },
  {
    id: '6',
    title: 'Captain Miller',
    description: 'An action-adventure film set in the pre-independence era.',
    posterUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2024,
    genre: ['Action', 'Adventure', 'Period'],
    director: 'Arun Matheswaran',
    cast: ['Dhanush', 'Priyanka Mohan'],
    rating: 4.4,
    duration: '2h 37m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 90000,
    likes: 15000,
    channelName: 'TamilGun',
    channelLink: 'https://example.com/tamilgun',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.7 GB',
        url: 'https://example.com/download/captain-miller-4k'
      },
      {
        quality: '1080p',
        size: '2.2 GB',
        url: 'https://example.com/download/captain-miller-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/captain-miller-720p'
      }
    ]
  }
];

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showOwnerInfo, setShowOwnerInfo] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [movieSearchTerm, setMovieSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const filteredMovies = React.useMemo(() => {
    let filtered = allMovies;
    
    if (searchTerm) {
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (movieSearchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(movieSearchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(movie =>
        movie.genre.some(g => g.toLowerCase() === selectedCategory.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, movieSearchTerm, selectedCategory]);

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

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
            <Categories 
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
              movies={allMovies}
            />
          </section>

          {/* All Movies Grid */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex-1 w-full sm:w-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCategory ? `${selectedCategory} Movies` : 'All Movies'}
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
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
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
