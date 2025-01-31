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
    id: '50',
    title: 'Pushpa 2: The Rule Reloaded Version - 2025',
    description: 'Pushpa 2: The Rule Reloaded Version (2025) 1080p - [ H.264 - 11.82 GB | H.265 - 8.64 GB | AV1 - 7.57 GB | VP9 - 6.59 GB ] - Tamil, Telugu, Hindi, Malayalam (DDP 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://i.ytimg.com/vi/UtCWVmh9gxc/maxresdefault.jpg',
    year: 2025,
    genre: ['Action', 'Thriller', 'Drama'],
    director: ['Sukumar'],
    cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil'],
    rating: 8.5,
    duration: '3h 44m',
    quality: ['1080p', '720p', 'H.264', 'H.265', 'AV1', 'VP9'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'DDP 5.1'],
    downloads: 250,
    likes: 500,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
              {
        quality: '1080p - H.265 - DV ',
        size: '12.71 GB',
        url: 'https://gplinks.co/QrtI'
      },
      {
        quality: '1080p - H.264 - HUBCLOUD',
        size: '11.82 GB',
        url: 'https://gplinks.co/lFp8Ht'
      },
              {
        quality: '1080p - H.264 - GDFLIX',
        size: '11.82 GB',
        url: 'https://gplinks.co/Dgy1wp'
      },
      {
        quality: '1080p - H.265 - DV HDR ',
        size: '8.64 GB',
        url: 'https://gplinks.co/OLjnpVVN'
      },
      {
        quality: '1080p AV1',
        size: '7.57 GB',
        url: 'https://gplinks.co/01x09'
      },
      {
        quality: '1080p VP9',
        size: '6.59 GB',
        url: 'https://gplinks.co/nqYxN51w'
      },
      {
        quality: '720p H.264',
        size: '7.74 GB',
        url: 'https://gplinks.co/x7grQeyl'
      },
      {
        quality: '720p AV1',
        size: '5.22 GB',
        url: 'https://gplinks.co/tLIWF7'
      },
      {
        quality: '720p AAC5.1 VP9',
        size: '2.71 GB',
        url: 'https://gplinks.co/2Pl5Ra'
      }
    ]
},
    {
    id: '34',
    title: 'Kris Roll No. 21 - S01 & S02',
    description: 'Kris Roll No. 21 - S01 & S02 (1080p) - [ H.264 - 5.36 GB | 5.4 GB ] - Tamil, Telugu, Hindi, Malayalam, Kannada, English (AAC 2.0 @ 128kb/s) - 📄 ESubs',
    posterUrl: 'https://images.justwatch.com/poster/139138301/s718/season-2.jpg',
    year: 2024,
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: ['P. Jayakumar'],
    cast: ['Varun Buddhadev', 'Vinod Kulkarni'],
    rating: 7.8,
    duration: 'Multiple Episodes',
    quality: ['1080p', 'H.264'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English', 'AAC 2.0'],
    downloads: 150,
    likes: 300,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: 'S01 1080p H.264',
        size: '5.36 GB',
        url: 'https://gplinks.co/kTOGRCOs'
      },
      {
        quality: 'S02 1080p H.264',
        size: '5.4 GB',
        url: 'https://gplinks.co/n6gua'
      }
    ]
},
    {
    id: '33',
    title: 'You\'re Cordially Invited - 2025',
    description: 'You\'re Cordially Invited (2025) 1080p - [ H.264 - 7.9 GB | HEVC - 3.62 GB ] - Tamil, Telugu, Hindi, Malayalam, Kannada, English (DDP 5.1 @ 640kb/s)',
    posterUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_BuWXbZ6XW8YJm3HGvVEpk4UxneX3FpbUQ-Abm2vAjaLpP3Uffcqb7YzYvsPBraA0ucYA',
    year: 2025,
    genre: ['Comedy', 'Romance'],
    director: ['Nicholas Stoller'],
    cast: ['Reese Witherspoon', 'Will Ferrell'],
    rating: 7.2,
    duration: '1h 45m',
    quality: ['1080p', '720p', 'H.264', 'HEVC'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English', 'DDP 5.1'],
    downloads: 180,
    likes: 400,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '720p H.264 - GDFLIX',
        size: '5.3 GB',
        url: 'https://gplinks.co/JUTgd'
      },
      {
        quality: '1080p H.264 - GDFLIX',
        size: '7.9 GB',
        url: 'https://gplinks.co/iZjTdj'
      },
      {
        quality: '1080p HEVC - FILEPRESS',
        size: '3.62 GB',
        url: 'https://gplinks.co/L8X0SsJ9'
      },
              {
        quality: '1080p HEVC - GDTOT',
        size: '3.62 GB',
        url: 'https://gplinks.co/CljT6NX5'
      }
    ]
},
    {
  id: '32',
  title: 'Pushpa 2 The Rule',
  description: 'Pushpa 2 The Rule - 1080P & HDR - Black Border: YES - Audio: DTS 5.1 - Audio Languages: Tam + Hin + Tel + Mal - Audio Tracks: 4 In 1',
  posterUrl: 'https://i.ytimg.com/vi/UtCWVmh9gxc/maxresdefault.jpg',
  year: 2025,
  genre: ['Action', 'Thriller', 'Songs'],
  director: ['Sukumar'],
  cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil'],
  rating: 8.5,
  duration: '2h 45m',
  quality: ['1080P', 'HDR'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'DDP 5.1'],
  downloads: 3500,
  likes: 4500,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080P - PUSHPA PUSHPA - SHAREDISK',
      size: '169.11 MB',
      url: 'https://gplinks.co/Ys7oYAVJ'
    },
    {
      quality: 'HDR - PUSHPA PUSHPA - SHAREDISK',
      size: '159.12 MB',
      url: 'https://gplinks.co/JEGQyST5'
    },
    {
      quality: 'PEELINGS - SHAREDISK',
      size: '205.26 MB',
      url: 'https://gplinks.co/dxwpm'
    },
    {
      quality: 'PEELINGS - HDR - SHAREDISK',
      size: '198.72 MB',
      url: 'https://gplinks.co/fLgAUtm0'
    },
    {
      quality: 'Angaaron - SHAREDISK',
      size: '237.64 MB',
      url: 'https://gplinks.co/VJtmreg'
    },
    {
      quality: 'Angaaron - HDR - SHAREDISK',
      size: '250.63 MB',
      url: 'https://gplinks.co/Xg7i7'
    },
    {
      quality: 'KISSIK - SHAREDISK',
      size: '230.66 MB',
      url: 'https://gplinks.co/Lrle'
    },
    {
      quality: 'KISSIK - HDR - SHAREDISK',
      size: '254.53 MB',
      url: 'https://gplinks.co/7pYiMSr'
    },
          {
      quality: '1080P - PUSHPA PUSHPA - UP4EVER',
      size: '169.11 MB',
      url: 'https://gplinks.co/HsX6'
    },
    {
      quality: 'HDR - PUSHPA PUSHPA - UP4EVER',
      size: '159.12 MB',
      url: 'https://gplinks.co/oPDO'
    },
    {
      quality: 'PEELINGS - UP4EVER',
      size: '205.26 MB',
      url: 'https://gplinks.co/bmYNr0X'
    },
    {
      quality: 'PEELINGS - HDR - UP4EVER',
      size: '198.72 MB',
      url: 'https://gplinks.co/oOwBqE'
    },
    {
      quality: 'Angaaron - UP4EVER',
      size: '237.64 MB',
      url: 'https://gplinks.co/WBa7pKP'
    },
    {
      quality: 'Angaaron - HDR - UP4EVER',
      size: '250.63 MB',
      url: 'https://gplinks.co/iL1Ax'
    },
    {
      quality: 'KISSIK - UP4EVER',
      size: '230.66 MB',
      url: 'https://gplinks.co/oIV56'
    },
    {
      quality: 'KISSIK - HDR - UP4EVER',
      size: '254.53 MB',
      url: 'https://gplinks.co/Tm8zhl5u'
    }
  ]
},
    {
    id: '31',
    title: 'Emergency Couple - Season 1 - 2025',
    description: 'Emergency Couple: Season 1 (2025) 1080p - [ H.264 - 4.69 GB (per episode) ] - Tamil, Telugu, Hindi, Korean (DDP 2.0 @ 248kb/s) - 📄 ESubs',
    posterUrl: 'https://picsxtra.com/images/2025/01/30/Emergency-Couple.md.jpg',
    year: 2025,
    genre: ['Romance', 'Medical Drama', 'Comedy'],
    director: ['Kim Cheol-kyu'],
    cast: ['Song Ji-hyo', 'Choi Jin-hyuk', 'Lee Pil-mo'],
    rating: 7.8,
    duration: '21 Episodes (Each ~1h)',
    quality: ['1080p', 'H.264'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Korean', 'DDP 2.0'],
    downloads: 300,
    likes: 600,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: 'Episode 1',
        size: '4.06 GB',
        url: 'https://gplinks.co/DXeSS'
      },
      {
        quality: 'Episode 2',
        size: '4.15 GB',
        url: 'https://gplinks.co/LrkMs3cJ'
      },
      {
        quality: 'Episode 3',
        size: '4.12 GB',
        url: 'https://gplinks.co/QwSSYucC'
      },
      {
        quality: 'Episode 4',
        size: '4.46 GB',
        url: 'https://gplinks.co/u6eiv'
      },
      {
        quality: 'Episode 5',
        size: '3.97 GB',
        url: 'https://gplinks.co/MeZu1ZRP'
      },
      {
        quality: 'Episode 6',
        size: '4.33 GB',
        url: 'https://gplinks.co/VdBmy'
      },
      {
        quality: 'Episode 7',
        size: '4.31 GB',
        url: 'https://gplinks.co/CCiGgQM'
      },
      {
        quality: 'Episode 8',
        size: '4.65 GB',
        url: 'https://gplinks.co/5BwACYN'
      },
      {
        quality: 'Episode 9',
        size: '4.66 GB',
        url: 'https://gplinks.co/j2ZgKa'
      },
      {
        quality: 'Episode 10',
        size: '4.69 GB',
        url: 'https://gplinks.co/2JWTnWG'
      },
      {
        quality: 'Episode 11',
        size: '4.46 GB',
        url: 'https://gplinks.co/WjO1Uu'
      },
      {
        quality: 'Episode 12',
        size: '4.58 GB',
        url: 'https://gplinks.co/pUafkJg'
      },
      {
        quality: 'Episode 13',
        size: '4.61 GB',
        url: 'https://gplinks.co/DnJjE1'
      },
      {
        quality: 'Episode 14',
        size: '4.59 GB',
        url: 'https://gplinks.co/kw3N'
      },
      {
        quality: 'Episode 15',
        size: '4.44 GB',
        url: 'https://gplinks.co/wfir0dfR'
      },
      {
        quality: 'Episode 16',
        size: '4.61 GB',
        url: 'https://gplinks.co/uccakIyh'
      },
      {
        quality: 'Episode 17',
        size: '4.61 GB',
        url: 'https://gplinks.co/fLAVSSww'
      },
      {
        quality: 'Episode 18',
        size: '4.57 GB',
        url: 'https://gplinks.co/T89h1eh'
      },
      {
        quality: 'Episode 19',
        size: '4.47 GB',
        url: 'https://gplinks.co/APtE'
      },
      {
        quality: 'Episode 20',
        size: '4.3 GB',
        url: 'https://gplinks.co/nCjYeC'
      },
      {
        quality: 'Episode 21',
        size: '4.47 GB',
        url: 'https://gplinks.co/ZhsX1'
      }
    ]
},
    {
  id: '30',
  title: 'Live On Season 1 - 2025',
  description: 'Live On Season 1 (2025) - [ H.264 - 24.63 GB (Full Season) | 1080p - 3.07 GB - 3.4 GB per Episode ] - Tamil, Telugu, Hindi, Korea (DDP 2.0 @ 248kb/s) - 📄 ESubs',
  posterUrl: 'https://picsxtra.com/images/2025/01/07/ce2ac394b4e271.md.jpg',
  year: 2025,
  genre: ['Drama', 'Romance'],
  director: ['Director Name'],  // Replace with actual director name if available
  cast: ['Actor Name', 'Actress Name'],  // Replace with actual cast names
  rating: 8.0,  // Replace with actual rating if available
  duration: 'Unknown',
  quality: ['1080p', '720p', 'H.264'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'Korea', 'DDP 2.0'],
  downloads: 200,
  likes: 300,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264 - ZIP',
      size: '24.63 GB',
      url: 'https://gplinks.co/2CGTZH'
    },
    {
      quality: '720p - H.264 - ZIP',
      size: '13.32 GB',
      url: 'https://gplinks.co/fSuvQoHS'
    },
    {
      quality: 'S01-E01 - GDFLIX',
      size: '3.07 GB',
      url: 'https://gplinks.co/0J6J1ed'
    },
          {
      quality: 'S01-E01 - HUBCLOUD',
      size: '3.07 GB',
      url: 'https://gplinks.co/i2vbj08'
    },
    {
      quality: 'S01-E02 - GDFLIX',
      size: '2.96 GB',
      url: 'https://gplinks.co/aBXr8GZ'
    },
          {
      quality: 'S01-E02 - HUBCLOUD',
      size: '2.96 GB',
      url: 'https://gplinks.co/q4azA'
    },
    {
      quality: 'S01-E03 - GDFLIX',
      size: '3.1 GB',
      url: 'https://gplinks.co/3Ut2R5'
    },
          {
      quality: 'S01-E03 - HUBCLOUD',
      size: '3.1 GB',
      url: 'https://gplinks.co/4HnyU'
    },
    {
      quality: 'S01-E04 - GDFLIX',
      size: '3.24 GB',
      url: 'https://gplinks.co/hZWtiFRd'
    },
          {
      quality: 'S01-E04 - HUBCLOUD',
      size: '3.24 GB',
      url: 'https://gplinks.co/bj6tbM'
    },
    {
      quality: 'S01-E05 - GDFLIX',
      size: '2.86 GB',
      url: 'https://gplinks.co/e5BlFo'
    },
          {
      quality: 'S01-E05 - HUBCLOUD',
      size: '2.86 GB',
      url: 'https://gplinks.co/lef2'
    },
    {
      quality: 'S01-E06 - GDFLIX',
      size: '2.99 GB',
      url: 'https://gplinks.co/WqDfp5'
    },
          {
      quality: 'S01-E06 - HUBCLOUD',
      size: '2.99 GB',
      url: 'https://gplinks.co/NupYmI'
    },
    {
      quality: 'S01-E07 - GDFLIX',
      size: '3.01 GB',
      url: 'https://gplinks.co/lWWA2Nb'
    },
          {
      quality: 'S01-E07 - HUBCLOUD',
      size: '3.01 GB',
      url: 'https://gplinks.co/RCFHr'
    },
    {
      quality: 'S01-E08 - GDFLIX',
      size: '3.4 GB',
      url: 'https://gplinks.co/6pqngo'
    },
          {
      quality: 'S01-E08 - HUBCLOUD',
      size: '3.4 GB',
      url: 'https://gplinks.co/9c8HczWG'
    }
  ]
},
    {
  id: '29',
  title: 'Kantara - 2022',
  description: 'Kantara (2022) 1080p - [ H.264 - 12.48 GB ] - Tamil, Telugu, Malayalam, Kannada (DDP 5.1 @ 640kb/s) - 📄 ESubs',
  posterUrl: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230930110122.jpg',
  year: 2022,
  genre: ['Action', 'Drama'],
  director: ['Rishab Shetty'],
  cast: ['Rishab Shetty', 'Kishore', 'Sapthami Gowda'],
  rating: 8.3,
  duration: '2h 30m',
  quality: ['1080p', 'H.264'],
  audio: ['Tamil', 'Telugu', 'Malayalam', 'Kannada', 'DDP 5.1'],
  downloads: 1800,
  likes: 2200,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264 - GDFLIX',
      size: '12.48 GB',
      url: 'https://gplinks.co/1cfX2q'
    },
    {
      quality: '1080p - H.264 - GDTOT',
      size: '12.48 GB',
      url: 'https://gplinks.co/8DSMrB'
    },
    {
      quality: '1080p - H.264 - HUBCLOUD',
      size: '12.48 GB',
      url: 'https://gplinks.co/uK5Dt'
    }
  ]
},
    {
  id: '28',
  title: 'Thangalaan - 2024',
  description: 'Thangalaan (2024) 2160p, 1080p, and 720p - [ H.265 - 13.43 GB | H.264 - 6.49 GB | AV1 - 3.99 GB ] - Tamil, Hindi (DDP 5.1 @ 640kb/s, AAC 5.1) - 📄 ESubs',
  posterUrl: 'https://img.awafim.tv/images/dzwG2v3JOWx1.webp',
  year: 2024,
  genre: ['Action', 'Drama'],
  director: ['Pa. Ranjith'],
  cast: ['Vikram', 'Parvathy Thiruvothu', 'Pasupathy'],
  rating: 8.0,
  duration: '2h 30m',
  quality: ['2160p', '1080p', '720p', 'H.264', 'H.265', 'AV1'],
  audio: ['Tamil', 'Hindi', 'AAC 5.1', 'DDP 5.1'],
  downloads: 1200,
  likes: 1500,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '2160p - Dual - H.265 - HUBCLOUD',
      size: '13.43 GB',
      url: 'https://gplinks.co/dvvB0YT'
    },
          {
      quality: '2160p - Dual - H.265 - GDTOT',
      size: '13.43 GB',
      url: 'https://gplinks.co/DgfRXO'
    },
    {
      quality: '1080p - Dual - H.264 - GDFLIX',
      size: '6.49 GB',
      url: 'https://gplinks.co/xHwpGg'
    },
          {
      quality: '1080p - Dual - H.264 - GDTOT',
      size: '6.49 GB',
      url: 'https://gplinks.co/RJWV'
    },
    {
      quality: '1080p - Dual - H.265- GDFLIX',
      size: '5.48 GB',
      url: 'https://gplinks.co/d1j0mM'
    },
          {
      quality: '1080p - Dual - H.265 - GDTOT',
      size: '5.48 GB',
      url: 'https://gplinks.co/iuqSCLD'
    },
    {
      quality: '1080p - Dual - AV1 - GDFLIX',
      size: '3.99 GB',
      url: 'https://gplinks.co/ymfACxxU'
    },
    {
      quality: '1080p - Dual - AV1 - GDFLIX',
      size: '3.06 GB',
      url: 'https://gplinks.co/XqsOeB'
    },
    {
      quality: '720p - Dual - H.264 - GDFLIX',
      size: '3.88 GB',
      url: 'https://gplinks.co/XzxaP'
    },
    {
      quality: '720p - Dual - AV1 - GDFLIX',
      size: '1.33 GB',
      url: 'https://gplinks.co/ha9n'
    },
    {
      quality: '720p - Dual - HEVC - GDFLIX',
      size: '735.7 MB',
      url: 'https://gplinks.co/RwEO21lZ'
    },
    {
      quality: '1080p - Tamil - H.264 - GDFLIX',
      size: '3.83 GB',
      url: 'https://gplinks.co/hkLedje'
    },
    {
      quality: '1080p - Tamil - AV1 - GDFLIX',
      size: '3.06 GB',
      url: 'https://gplinks.co/ta42j'
    },
    {
      quality: '1080p - Tamil - H.265 - GDFLIX',
      size: '2.54 GB',
      url: 'https://gplinks.co/kYr0nWc'
    }
  ]
},
    {
  id: '27',
  title: 'Minnal Murali - 2021',
  description: 'Minnal Murali (2021) 1080p - [ H.264 - 11.2 GB | AV1 - 7.15 GB | 720p - 7.67 GB ] - Tamil, Telugu, Hindi, Malayalam, Kannada, English, Spanish (DDP 5.1 @ 768kb/s, 640kb/s) - 📄 ESubs',
  posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWY0ZGJiNWYtNTUwMC00YjE4LTg2ODYtMDVjYTEyNTNjMjRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  year: 2021,
  genre: ['Action', 'Superhero', 'Drama'],
  director: ['Basil Joseph'],
  cast: ['Tovino Thomas', 'Guru Somasundaram', 'Aju Varghese'],
  rating: 7.6,
  duration: '2h 21m',
  quality: ['1080p', '720p', 'H.264', 'AV1'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English', 'Spanish', 'DDP 5.1'],
  downloads: 700,
  likes: 1000,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264',
      size: '11.2 GB',
      url: 'https://gplinks.co/sKMOs1'
    },
    {
      quality: '720p - H.264',
      size: '7.67 GB',
      url: 'https://gplinks.co/Io3WWw'
    },
    {
      quality: '1080p - AV1',
      size: '7.15 GB',
      url: 'https://gplinks.co/BSoApMW'
    }
  ]
},
    {
  id: '26',
  title: 'Fire Force: Season 2 - 2020',
  description: 'Fire Force: Season 2 (2020) 1080p - [ H.264 - 25.73 GB | 720p - 13.93 GB ] - Tamil, Telugu, Hindi, English, Japanese (DDP 2.0 @ 248kb/s) - 📄 ESubs',
  posterUrl: 'https://images.justwatch.com/poster/199469628/s718/season-2.jpg',
  year: 2020,
  genre: ['Action', 'Animation', 'Sci-Fi'],
  director: ['Yuki Yase'],
  cast: ['Gakuto Kajiwara', 'Kazuya Nakai', 'Aoi Koga'],
  rating: 8.3,
  duration: '24m per episode',
  quality: ['1080p', '720p', 'H.264'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'Japanese', 'DDP 2.0'],
  downloads: 550,
  likes: 850,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264  - GDFLIX',
      size: '25.73 GB',
      url: 'https://gplinks.co/0EjAVomM'
    },
    {
      quality: '1080p - H.264- HUBCLOUD',
      size: '25.73 GB',
      url: 'https://gplinks.co/2ixh'
    },
    {
      quality: '720p - H.264 - GDFLIX',
      size: '13.93 GB',
      url: 'https://gplinks.co/XYYh'
    },
    {
      quality: '720p - H.264- HUBCLOUD',
      size: '13.93 GB',
      url: 'https://gplinks.co/Em9xTZM'
    }
  ]
},
    {
  id: '25',
  title: 'Fire Force: Season 1 - 2019',
  description: 'Fire Force: Season 1 (2019) 1080p - [ H.264 - 23.08 GB | 720p - 12.68 GB ] - Tamil, Telugu, Hindi, English, Japanese (DDP 2.0 @ 248kb/s) - 📄 ESubs',
  posterUrl: 'https://images.justwatch.com/poster/199469881/s718/season-1.jpg',
  year: 2019,
  genre: ['Action', 'Animation', 'Sci-Fi'],
  director: ['Yuki Yase'],
  cast: ['Gakuto Kajiwara', 'Kazuya Nakai', 'Aoi Koga'],
  rating: 8.2,
  duration: '24m per episode',
  quality: ['1080p', '720p', 'H.264'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'Japanese', 'DDP 2.0'],
  downloads: 500,
  likes: 800,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264 - GDFLIX',
      size: '23.08 GB',
      url: 'https://gplinks.co/nsUv9'
    },
    {
      quality: '1080p - H.264 - HUBCLOUD',
      size: '23.08 GB',
      url: 'https://gplinks.co/z2Pi'
    },
    {
      quality: '720p - H.264 - GDFLIX',
      size: '12.68 GB',
      url: 'https://gplinks.co/Xhoopjr'
    },
    {
      quality: '720p - H.264- HUBCLOUD',
      size: '12.68 GB',
      url: 'https://gplinks.co/ucxTe86v'
    }
  ]
},
    {
  id: '24',
  title: 'Aadikeshava - 2023',
  description: 'Aadikeshava (2023) 1080p - [ H.264 - 6.1 GB | H.265 - 5.55 GB | AV1 - 5.33 GB ] - Tamil, Telugu, Malayalam (DDP 5.1 @ 640kb/s) - 📄 ESubs',
  posterUrl: 'https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/4/6/3/8373364/384908897749.jpg',
  year: 2023,
  genre: ['Action', 'Drama'],
  director: ['Director Name'],
  cast: ['Actor Name 1', 'Actor Name 2'],
  rating: 7.5,
  duration: '2h 20m',
  quality: ['1080p', 'H.264', 'H.265', 'AV1'],
  audio: ['Tamil', 'Telugu', 'Malayalam', 'DDP 5.1'],
  downloads: 150,
  likes: 220,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p - H.264',
      size: '6.1 GB',
      url: 'https://gplinks.co/8WHNb'
    },
    {
      quality: '1080p - H.265',
      size: '5.55 GB',
      url: 'https://gplinks.co/t6XLj'
    },
    {
      quality: '1080p - AV1',
      size: '5.33 GB',
      url: 'https://gplinks.co/rtN4w'
    }
  ]
},
    {
  id: '23',
  title: 'Theri - 2016',
  description: 'Theri (2016) Tamil - [ 1080p AVC - 10.3GB | 1080p AVC - 5.5GB | 1080p x264 - 2.7GB | 1080p HEVC x265 - 1.8GB | 720p x264 - 1.4GB | 700MB ] - Tamil (DD+5.1 @ 640kb/s) - 📄 MSUB',
  posterUrl: 'https://sund-images.sunnxt.com/131380/1000x1500_Theri_131380_c29949dc-d602-483e-bbbb-f5c8621ce93f.jpg',
  year: 2016,
  genre: ['Action', 'Drama'],
  director: ['Atlee'],
  cast: ['Vijay', 'Samantha Ruth Prabhu', 'Amy Jackson'],
  rating: 7.8,
  duration: '2h 39m',
  quality: ['1080p', '720p', 'x264', 'HEVC', 'AVC'],
  audio: ['Tamil', 'DD+5.1'],
  downloads: 450,
  likes: 600,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p TRUE WEB-DL AVC DD+5.1 (640kbps)',
      size: '10.3 GB',
      url: 'https://gplinks.co/9YrycEH'
    },
    {
      quality: '1080p TRUE WEB-DL AVC DD+5.1 (640kbps)',
      size: '5.5 GB',
      url: 'https://gplinks.co/60inRTPd'
    },
    {
      quality: '1080p HQ HDRip x264 DD+5.1 (192kbps)',
      size: '2.7 GB',
      url: 'https://gplinks.co/2o5T7i'
    },
    {
      quality: '1080p HQ HDRip HEVC x265 DD+5.1 (192kbps)',
      size: '1.8 GB',
      url: 'https://gplinks.co/xWyPD'
    },
    {
      quality: '720p HQ HDRip x264 DD+5.1 (192kbps)',
      size: '1.4 GB',
      url: 'https://gplinks.co/SSlEh'
    },
    {
      quality: 'HQ HDRip x264 AAC',
      size: '700 MB',
      url: 'https://gplinks.co/VRwdxA3'
    }
  ]
},
    {
  id: '22',
  title: 'Wallace and Gromit Vengeance Most Fowl - 2025',
  description: 'Wallace and Gromit Vengeance Most Fowl (2025) 1080p - [ H.265 - 4.7 GB | H.264 - 4.38 GB | 720p - 2.43 GB | AAC5.1 - 1.12 GB ] - Tamil, Telugu, Hindi, English (DDP 5.1 Atmos) - 📄 ESubs',
  posterUrl: 'https://www.aardman.com/media/q3gdqibg/w-g_vmf_bbc_key_art_16-9_logojpg.jpg?mode=crop&width=1100',
  year: 2025,
  genre: ['Animation', 'Adventure'],
  director: ['Nick Park'],
  cast: ['Peter Sallis', 'Ralph Fiennes', 'Helena Bonham Carter'],
  rating: 7.8,
  duration: '1h 30m',
  quality: ['1080p', '720p', 'H.264', 'H.265'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1 Atmos', 'AAC5.1'],
  downloads: 320,
  likes: 500,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p NF WEB-DL MULTI DDP5.1 Atmos DV H.265',
      size: '4.7 GB',
      url: 'https://gplinks.co/xRUCIdlz'
    },
    {
      quality: '1080p NF WEB-DL MULTI DDP5.1 Atmos H.264',
      size: '4.38 GB',
      url: 'https://gplinks.co/ONfPzrX'
    },
    {
      quality: '1080p NF WEB-DL MULTI DDP5.1 Atmos H.265',
      size: '3.29 GB',
      url: 'https://gplinks.co/W8ucU'
    },
    {
      quality: '1080p NF WEB-DL MULTI DDP5.1 Atmos HDR H.265',
      size: '3.44 GB',
      url: 'https://gplinks.co/kuqx6'
    },
    {
      quality: '720p NF WEB-DL MULTI DDP5.1 Atmos H.264',
      size: '2.43 GB',
      url: 'https://gplinks.co/4LhyOZ'
    },
    {
      quality: '1080p NF WEB-DL MULTI AAC5.1 AV1',
      size: '1.12 GB',
      url: 'https://gplinks.co/b5a7kdQy'
    },
    {
      quality: '720p NF WEB-DL MULTI DDP5.1 Atmos H.265',
      size: '1.81 GB',
      url: 'https://gplinks.co/e7O8Wk'
    },
    {
      quality: '720p NF WEB-DL MULTI AAC5.1 AV1',
      size: '702.5 MB',
      url: 'https://gplinks.co/ZzhTKnZe'
    }
  ]
},
    {
  id: '21',
  title: 'Youth - Season 1 - 2025',
  description: 'Youth - Season 1 (2025) 1080p - [ H.264 - 49.57 GB | H.265 - 22.88 GB | 720p - 22.57 GB ] - Tamil, Telugu, Hindi, Mandarin (Chinese) (DDP 2.0 @ 248kb/s) - 📄 ESubs',
  posterUrl: 'https://m.media-amazon.com/images/S/pv-target-images/b1a199b33830de222daaa4ac2970e6df91241303dbb194740e87e9ba759d6adf.jpg',
  year: 2025,
  genre: ['Drama', 'Romance', 'Thriller'],
  director: ['Jonathan Levine'],
  cast: ['Zoe Saldana', 'John Boyega', 'Kaitlyn Maher'],
  rating: 8.1,
  duration: '45m - 60m per episode',
  quality: ['1080p', '720p', 'H.264', 'H.265'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'Mandarin', 'DDP 2.0'],
  downloads: 220,
  likes: 320,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p AMZN WEB-DL DDP2.0 H.264 - GDFLIX',
      size: '49.57 GB',
      url: 'https://gplinks.co/wBv62WZE'
    },
        {
      quality: '1080p AMZN WEB-DL DDP2.0 H.264 - HUBCLOUD',
      size: '49.57 GB',
      url: 'https://gplinks.co/TpnjGT76'
    },
    {
      quality: '1080p AMZN WEB-DL DDP2.0 H.265 - GDFLIX',
      size: '22.88 GB',
      url: 'https://gplinks.co/OL1fE'
    },
        {
      quality: '1080p AMZN WEB-DL DDP2.0 H.265 - HUBCLOUD',
      size: '22.88 GB',
      url: 'https://gplinks.co/m1WDbjQ'
    },
    {
      quality: '720p AMZN WEB-DL DDP2.0 H.264 - GDFLIX',
      size: '22.57 GB',
      url: 'https://gplinks.co/YqGspb'
    },
        {
      quality: '720p AMZN WEB-DL DDP2.0 H.264 - HUBCLOUD',
      size: '22.57 GB',
      url: 'https://gplinks.co/wh1KvX'
    },
    {
      quality: '720p AMZN WEB-DL DDP2.0 H.265 - GDFLIX',
      size: '9 GB',
      url: 'https://gplinks.co/anPdXn'
    },
        {
      quality: '720p AMZN WEB-DL DDP2.0 H.265 - HUBCLOUD',
      size: '9 GB',
      url: 'https://gplinks.co/vS03sWGl'
    },
    {
      quality: 'S01-E01',
      size: '2.07 GB',
      url: 'https://gplinks.co/4aeO'
    },
    {
      quality: 'S01-E02',
      size: '2.44 GB',
      url: 'https://gplinks.co/AeGBqWhJ'
    },
    {
      quality: 'S01-E03',
      size: '2.08 GB',
      url: 'https://gplinks.co/PFAcb'
    },
    {
      quality: 'S01-E04',
      size: '2.07 GB',
      url: 'https://gplinks.co/Ddvp5'
    },
    {
      quality: 'S01-E05',
      size: '1.87 GB',
      url: 'https://gplinks.co/4ahr2H5H'
    },
    {
      quality: 'S01-E06',
      size: '2.03 GB',
      url: 'https://gplinks.co/o5HNjX'
    },
    {
      quality: 'S01-E07',
      size: '2.31 GB',
      url: 'https://gplinks.co/hDSCVDG2'
    },
    {
      quality: 'S01-E08',
      size: '1.89 GB',
      url: 'https://gplinks.co/tahSP'
    },
    {
      quality: 'S01-E09',
      size: '2 GB',
      url: 'https://gplinks.co/KebjXJ'
    },
    {
      quality: 'S01-E10',
      size: '2.31 GB',
      url: 'https://gplinks.co/1r9y7Tp4'
    },
    {
      quality: 'S01-E11',
      size: '2.28 GB',
      url: 'https://gplinks.co/gyM8sq'
    },
    {
      quality: 'S01-E12',
      size: '2.07 GB',
      url: 'https://gplinks.co/iRWJ'
    },
    {
      quality: 'S01-E13',
      size: '2.21 GB',
      url: 'https://gplinks.co/k3ZsSx'
    },
    {
      quality: 'S01-E14',
      size: '2.03 GB',
      url: 'https://gplinks.co/QqmwKG'
    },
    {
      quality: 'S01-E15',
      size: '2.02 GB',
      url: 'https://gplinks.co/H90e3e'
    },
    {
      quality: 'S01-E16',
      size: '1.94 GB',
      url: 'https://gplinks.co/RMNoSW'
    },
    {
      quality: 'S01-E17',
      size: '1.91 GB',
      url: 'https://gplinks.co/uWodLmLG'
    },
    {
      quality: 'S01-E18',
      size: '2.01 GB',
      url: 'https://gplinks.co/ZC4A7d'
    },
    {
      quality: 'S01-E19',
      size: '1.87 GB',
      url: 'https://gplinks.co/XKPY'
    },
    {
      quality: 'S01-E20',
      size: '2 GB',
      url: 'https://gplinks.co/6QxsR'
    },
    {
      quality: 'S01-E21',
      size: '1.91 GB',
      url: 'https://gplinks.co/NW3ql'
    },
    {
      quality: 'S01-E22',
      size: '1.88 GB',
      url: 'https://gplinks.co/j4659S'
    },
    {
      quality: 'S01-E23',
      size: '2.63 GB',
      url: 'https://gplinks.co/6jo71XjP'
    },
    {
      quality: 'S01-E24',
      size: '1.76 GB',
      url: 'https://gplinks.co/FE96TeE'
    }
  ]
},
    {
    id: '20',
    title: 'The Man On The Road - 2022',
    description: 'The Man On The Road (2022) 1080p - [ H.264 - 5.51 GB | H.265 - 3.43 GB | 720p - 3.72 GB ] - Tamil, Telugu, Hindi, Italian (DDP 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://m.media-amazon.com/images/S/pv-target-images/da36fe0ff7fd606fc15379a3f8dd975977cbb75726b80eebf226f667eb96b94a.jpg',
    year: 2022,
    genre: ['Drama', 'Thriller'],
    director: ['Marco Bellocchio'],
    cast: ['Toni Servillo', 'Alba Rohrwacher', 'Luigi Lo Cascio'],
    rating: 7.2,
    duration: '2h 15m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Italian', 'DDP 5.1'],
    downloads: 180,
    likes: 290,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p AMZN WEB-DL DDP5.1 H.264',
        size: '5.51 GB',
        url: 'https://gplinks.co/DSkT8YR'
      },
      {
        quality: '1080p AMZN WEB-DL DDP5.1 H.265',
        size: '3.43 GB',
        url: 'https://gplinks.co/YuGiMZ6'
      },
      {
        quality: '720p AMZN WEB-DL DDP5.1 H.264',
        size: '3.72 GB',
        url: 'https://gplinks.co/Ia1pu'
      },
      {
        quality: '720p AMZN WEB-DL DDP5.1 H.265',
        size: '2.16 GB',
        url: 'https://gplinks.co/Xd0Unm'
      }
    ]
},
    {
    id: '19',
    title: 'Big Game - 2014',
    description: 'Big Game (2014) 1080p - [ H.264 - 6.16 GB | H.265 - 3.31 GB | 720p - 2.8 GB ] - Tamil, Telugu, Hindi, English (DDP 2.0 @ 248kb/s) - 📄 ESubs',
    posterUrl: 'https://resizing.flixster.com/YjhU3tjhm1Nmm71_wJwj1a5Z4eI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11308265_v_h9_ah.jpg',
    year: 2014,
    genre: ['Action', 'Adventure', 'Thriller'],
    director: ['Jalmari Helander'],
    cast: ['Samuel L. Jackson', 'Onni Tommila', 'Ray Stevenson'],
    rating: 6.4,
    duration: '1h 30m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 2.0'],
    downloads: 220,
    likes: 340,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p AMZN WEB-DL DDP2.0 H.264',
        size: '6.16 GB',
        url: 'https://gplinks.co/1bDmPHp5'
      },
      {
        quality: '1080p AMZN WEB-DL DDP2.0 H.265',
        size: '3.31 GB',
        url: 'https://gplinks.co/xJIh3uk'
      },
      {
        quality: '720p AMZN WEB-DL DDP2.0 H.264',
        size: '2.8 GB',
        url: 'https://gplinks.co/A9QO6zF'
      },
      {
        quality: '720p AMZN WEB-DL DDP2.0 H.265',
        size: '1.25 GB',
        url: 'https://gplinks.co/BXBHGv'
      }
    ]
},
    {
    id: '18',
    title: 'Yashoda - 2022',
    description: 'Yashoda (2022) 1080p - [ H.264 - 8.67 GB ] - Tamil, Hindi, Telugu, Kannada, Malayalam (DDP 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMWNjNWVmYmUtYWYxYS00NjZkLTliMzEtMjhkNTU2NTVkMDJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    year: 2022,
    genre: ['Action', 'Thriller', 'Drama'],
    director: ['Hari'],
    cast: ['Samantha Ruth Prabhu', 'Unni Mukundan', 'Varalaxmi Sarathkumar'],
    rating: 7.8,
    duration: '2h 15m',
    quality: ['1080p', 'H.264'],
    audio: ['Tamil', 'Hindi', 'Telugu', 'Kannada', 'Malayalam', 'DDP 5.1'],
    downloads: 110,
    likes: 170,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p AMZN WEB-DL DDP5.1 H.264',
        size: '8.67 GB',
        url: 'https://gplinks.co/Fdoab2K'
      }
    ]
},
    {
    id: '16',
    title: 'Kathal- A Jackfruit Mystery - 2023',
    description: 'Kathal: A Jackfruit Mystery (2023) 1080p - [ H.264 - 5.68 GB ] - Tamil, Hindi, Telugu (DDP 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2M5NTllZDctNTlmYy00YTBhLTgzYWItZjQ2OWZkOThiOGE2XkEyXkFqcGc@._V1_.jpg',
    year: 2023,
    genre: ['Comedy', 'Drama', 'Mystery'],
    director: ['Yashowardhan Mishra'],
    cast: ['Sanya Malhotra', 'Rajpal Yadav', 'Anant Vidhate'],
    rating: 7.4,
    duration: '1h 55m',
    quality: ['1080p', 'H.264'],
    audio: ['Tamil', 'Hindi', 'Telugu', 'DDP 5.1'],
    downloads: 120,
    likes: 190,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p NF WEB-DL DDP5.1 Atmos H.264',
        size: '5.68 GB',
        url: 'https://gplinks.co/rWPOLSu'
      }
    ]
},
    {
  id: '15',
  title: 'Squid Game - [ S02 ]',
  description: 'Squid Game - [ S02 ] 1080p - [ HEVC 10bit ] [ AV1 - 8.85 GB ] [ Atmos HEVC - 17.01 GB ] [ HDR HEVC - 15.04 GB ] [ DV HEVC - 15.91 GB ] - Tamil, Hindi, Telugu, Korean, English (DDP 5.1 @ 640kb/s) - 📄 ESubs',
  posterUrl: 'https://iili.io/2eIpbF2.jpg',
  year: 2021,
  genre: ['Drama', 'Thriller', 'Action'],
  director: ['Hwang Dong-hyuk'],
  cast: ['Lee Jung-jae', 'Park Hae-soo', 'Jung Ho-yeon', 'O Yeong-su'],
  rating: 8.0,
  duration: '50m - 60m',
  quality: ['1080p', 'HEVC', 'AV1', 'HDR', 'DV'],
  audio: ['Tamil', 'Telugu', 'Hindi', 'Korean', 'English', 'DDP 5.1', 'Atmos'],
  downloads: 300,
  likes: 450,
  channelName: 'Tamilpasanga',
  channelLink: 'https://t.me/Tamil_New_Movies_4K',
  downloadLinks: [
    {
      quality: '1080p NF WEB-DL DDP5.1 Atmos HEVC',
      size: '17.01 GB',
      url: 'https://gplinks.co/rNCt'
    },
    {
      quality: '1080p NF WEB-DL AAC5.1 AV1',
      size: '8.85 GB',
      url: 'https://gplinks.co/OXM6ZCzA'
    },
    {
      quality: '1080p NF WEB-DL DDP5.1 Atmos HDR HEVC',
      size: '15.04 GB',
      url: 'https://gplinks.co/yJQGsm'
    },
    {
      quality: '1080p NF WEB-DL DDP5.1 Atmos DV HEVC',
      size: '15.91 GB',
      url: 'https://gplinks.co/Wj5d'
    },
    {
      quality: '1080p NF WEB-DL DDP5.1 Atmos HEVC - Making - FILEPRESS',
      size: '1.16 GB',
      url: 'https://gplinks.co/w2olqT'
    },
          {
      quality: '1080p NF WEB-DL DDP5.1 Atmos HEVC - Making - GDTOT',
      size: '1.16 GB',
      url: 'https://gplinks.co/Vs7MEcu'
    },
    {
      quality: '1080p NF WEB-DL AAC5.1 AV1 - Making - FILEPRESS',
      size: '489.2 MB',
      url: 'https://gplinks.co/zI3P6VjI',
    },
          {
      quality: '1080p NF WEB-DL AAC5.1 AV1 - Making - GDTOT',
      size: '489.2 MB',
      url: 'https://gplinks.co/Q375MmQ'
    }
  ]
},
    {
    id: '14',
    title: 'Squid Game - [ S01 ]',
    description: 'Squid Game - [ S01 ] 1080p - [ HEVC 10bit ] [ AV1 - 7.43 GB ] [ Atmos HEVC - 19.17 GB ] - Tamil, Hindi, Telugu, Korean, English (DDP 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://iili.io/2eqFGWl.jpg',
    year: 2021,
    genre: ['Drama', 'Thriller', 'Action'],
    director: ['Hwang Dong-hyuk'],
    cast: ['Lee Jung-jae', 'Park Hae-soo', 'Jung Ho-yeon', 'O Yeong-su'],
    rating: 8.0,
    duration: '50m - 60m',
    quality: ['1080p', 'HEVC'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Korean', 'English', 'DDP 5.1', 'Atmos'],
    downloads: 300,
    likes: 450,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p NF WEB-DL DDP5.1 Atmos HEVC',
        size: '19.17 GB',
        url: 'https://gplinks.co/Vr9WK0uM'
      },
      {
        quality: '1080p NF WEB-DL AAC5.1 AV1',
        size: '7.43 GB',
        url: 'https://gplinks.co/5p0S'
      }
    ]
},
    {
    id: '13',
    title: 'Red Notice (2021)',
    description: 'Red Notice (2021) 1080p, 720p - [ AV1 - 3.44 GB | 2.16 GB ] [ H.264 - 6.57 GB | 3.07 GB ] - Tamil, Telugu, Hindi, English (DDP 5.1 @ 640kb/s) - 📄 ESub',
    posterUrl: 'https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/11/Untitled-design-26.jpg?fit=1200%2C675&ssl=1',
    year: 2021,
    genre: ['Action', 'Comedy', 'Crime'],
    director: ['Rawson Marshall Thurber'],
    cast: ['Dwayne Johnson', 'Gal Gadot', 'Ryan Reynolds'],
    rating: 6.3,
    duration: '118m',
    quality: ['1080p', '720p', 'H.264', 'AV1'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1'],
    downloads: 210,
    likes: 320,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '720p AV1',
        size: '2.16 GB',
        url: 'https://gplinks.co/gW2nQq'
      },
      {
        quality: '720p H.264',
        size: '3.07 GB',
        url: 'https://gplinks.co/w58b4MD'
      },
      {
        quality: '1080p AV1',
        size: '3.44 GB',
        url: 'https://gplinks.co/OYeaL'
      },
      {
        quality: '1080p H.264',
        size: '6.57 GB',
        url: 'https://gplinks.co/YPqV'
      }
    ]
},
    {
    id: '12',
    title: 'Venom: The Last Dance (2024)',
    description: 'Venom: The Last Dance (2024) 2160p, 1080p - [ HEVC 10bit - 34.03 GB ] [ AV1 - 1.73 GB ] [ Atmos TrueHD7.1 - 3.64 GB ] [ DDP 5.1 - 3.95 GB ] - Tamil, Hindi, Telugu, English (DDP 5.1, Atmos TrueHD7.1) - 📄 ESub',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg',
    year: 2024,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    director: ['Ruben Fleischer'],
    cast: ['Tom Hardy', 'Michelle Williams', 'Woody Harrelson', 'Naomie Harris'],
    rating: 7.5,
    duration: '110m',
    quality: ['2160p', '1080p', 'HEVC', 'AV1'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1', 'Atmos TrueHD7.1'],
    downloads: 170,
    likes: 290,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '2160p BluRay HEVC - DRIVE',
        size: '34.03 GB',
        url: 'https://gplinks.co/7rb6Aoa5'
      },
      {
        quality: 'Bonus X-Ray Edition 1080p HEVC - FILEPRESS',
        size: '3.95 GB',
        url: 'https://gplinks.co/DUpP9nwi',
      },
              {
        quality: 'Bonus X-Ray Edition 1080p HEVC - GDTOT',
        size: '3.95 GB',
        url: 'https://gplinks.co/joVgm'
      },
      {
        quality: '1080p NF WEB-DL Atmos HEVC - FILEPRESS',
        size: '3.64 GB',
        url: 'https://gplinks.co/mwUFd',
      },
              {
        quality: '1080p NF WEB-DL Atmos HEVC - GDTOT',
        size: '3.64 GB',
        url: 'https://gplinks.co/DksJJiJe'
      },
      {
        quality: '1080p NF WEB-DL AAC5.1 AV1 - FILEPRESS',
        size: '1.73 GB',
        url: 'https://gplinks.co/vb3HNiae',
      },
              {
        quality: '1080p NF WEB-DL AAC5.1 AV1 - GDTOT',
        size: '1.73 GB',
        url: 'https://gplinks.co/zY4kLlVR'
      }
    ]
},
    {
    id: '11',
    title: 'Venom: Let There Be Carnage (2021)',
    description: 'Venom: Let There Be Carnage (2021) 1080p, 720p - [ H.264 - 6.32 GB | 3.85 GB ] [ H.265 - 3.2 GB | 2.23 GB ] - Tamil, Telugu, Hindi, English (DDP 5.1 @ 640kb/s) - 📄 ESub',
    posterUrl: 'https://i0.wp.com/joethemnmovieman.com/wp-content/uploads/2021/10/venom-2-let-there-be-carnage.jpg?fit=1861%2C1050&ssl=1',
    year: 2021,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    director: ['Andy Serkis'],
    cast: ['Tom Hardy', 'Woody Harrelson', 'Michelle Williams', 'Naomie Harris'],
    rating: 6.0,
    duration: '97m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1'],
    downloads: 180,
    likes: 290,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p H.264',
        size: '6.32 GB',
        url: 'https://gplinks.co/hwK6SmX7'
      },
      {
        quality: '1080p H.265',
        size: '3.2 GB',
        url: 'https://gplinks.co/4giN0'
      },
      {
        quality: '720p H.264',
        size: '3.85 GB',
        url: 'https://gplinks.co/MXTv5'
      },
      {
        quality: '720p H.265',
        size: '2.23 GB',
        url: 'https://gplinks.co/8xFI'
      }
    ]
},
    {
    id: '10',
    title: 'Venom (2018)',
    description: 'Venom (2018) 1080p, 720p - [ H.264 - 8.36 GB | 4.54 GB ] [ H.265 - 4.4 GB | 2.69 GB ] - Tamil, Telugu, Hindi, English (DDP 5.1 @ 640kb/s) - 📄 ESub',
    posterUrl: 'https://preview.redd.it/what-is-your-opinion-on-the-venom-movies-v0-fbk6kvnuevtb1.jpg?width=640&crop=smart&auto=webp&s=28686f78cb641a2d726715d451b951a57fb0587d',
    year: 2018,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    director: ['Ruben Fleischer'],
    cast: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed', 'Woody Harrelson'],
    rating: 6.7,
    duration: '112m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1'],
    downloads: 220,
    likes: 350,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p H.264',
        size: '8.36 GB',
        url: 'https://gplinks.co/yoVNH'
      },
      {
        quality: '1080p H.265',
        size: '4.4 GB',
        url: 'https://gplinks.co/mMiA'
      },
      {
        quality: '720p H.264',
        size: '4.54 GB',
        url: 'https://gplinks.co/STmA'
      },
      {
        quality: '720p H.265',
        size: '2.69 GB',
        url: 'https://gplinks.co/GnJqDF'
      }
    ]
},
    {
    id: '9',
    title: 'My Princess - Season 1',
    description: 'My Princess - Season 1 (2024) 1080p, 720p - [ H.264 - 80.02 GB | 36.02 GB ] [ H.265 - 54.45 GB | 14.68 GB ] - Tamil, Telugu, Hindi, Korea (DDP 2.0 @ 248kb/s) - 📄 ESubs',
    posterUrl: 'https://m.media-amazon.com/images/S/pv-target-images/bfc22e94edb339453694f9b9e05f365de501055180d295c218b0fd1caa5d0511.jpg',
    year: 2024,
    genre: ['Romance', 'Drama', 'Comedy'],
    director: ['Kim Eun-sook'],
    cast: ['Kim Tae-hee', 'Song Seung-heon', 'Park Ye-jin', 'Ryu Soo-young'],
    rating: 8.1,
    duration: '60m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Korean', 'DDP 2.0'],
    downloads: 100,
    likes: 180,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p H.264',
        size: '80.02 GB',
        url: 'https://gplinks.co/ZxEiE'
      },
      {
        quality: '1080p H.265',
        size: '54.45 GB',
        url: 'https://gplinks.co/jZxt'
      },
      {
        quality: '720p H.264',
        size: '36.02 GB',
        url: 'https://gplinks.co/GRNpOuF'
      },
      {
        quality: '720p H.265',
        size: '14.68 GB',
        url: 'https://gplinks.co/bA2mZZ'
      }
    ]
},
    {
    id: '8',
    title: 'Khufiya',
    description: 'Khufiya (2023) 1080p, 720p - [ H.264 - 10.61 GB | 3.69 GB ] [ H.265 - 3.65 GB | 2.51 GB ] - Tamil, Telugu, Hindi (DDP 5.1 @ 640kb/s) - 📄 ESub',
    posterUrl: 'https://www.hindustantimes.com/ht-img/img/2023/10/05/original/Screenshot_2023-10-05_at_12.13.12_PM_1696488234526.png',
    year: 2023,
    genre: ['Thriller', 'Espionage', 'Drama'],
    director: ['Vishal Bhardwaj'],
    cast: ['Tabu', 'Ali Fazal', 'Wamiqa Gabbi', 'Ashish Vidyarthi'],
    rating: 7.5,
    duration: '157m',
    quality: ['1080p', '720p', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'DDP 5.1'],
    downloads: 120,
    likes: 200,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p H.264',
        size: '10.61 GB',
        url: 'https://gplinks.co/vJUMV4lU'
      },
      {
        quality: '1080p H.265',
        size: '3.65 GB',
        url: 'https://gplinks.co/59WiMSh'
      },
      {
        quality: '720p H.264',
        size: '3.69 GB',
        url: 'https://gplinks.co/jXemeS'
      },
      {
        quality: '720p H.265',
        size: '2.51 GB',
        url: 'https://gplinks.co/U2Ez4L6'
      }
    ]
},
    {
    id: '7',
    title: 'Sweet Strawberries S01',
    description: 'Sweet Strawberries - Season 1 (2024) follows a heartfelt journey through love complexities of relationships in the modern world. Set against vibrant backgrounds, it explores emotional depth, humor, and the beauty of life',
    posterUrl: 'https://qqcdnpictest.mxplay.com/pic/1ab3b367e7376e615dd1c9b055f95395/en/16x9/1600x900/test_pic1735541481107.jpg',
    year: 2024,
    genre: ['Comedy', 'Drama', 'Romance'],
    director: ['Jesús Colmenar', 'Frank Darabont', 'Koldo Serra', 'Alejandro Bazzano', 'Javier Quintas'],
    cast: ['Álvaro Morte', 'Úrsula Corberó', 'Itziar Ituño', 'Pedro Alonso'],
    rating: 8.5,
    duration: '50m - 60m',
    quality: ['1080p', 'AV1', 'H.264', 'H.265'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Portuguese', 'DDP 2.0'],
    downloads: 150,
    likes: 250,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p H.264 GDFLIX',
        size: '71.93 GB',
        "url": 'https://gplinks.co/vqAJdyd'
      },
      {
        quality: '1080p H.264 HUBCLOUD',
        size: '71.93 GB',
        url: 'https://gplinks.co/WABBs'
      },
      {
        quality: '1080p H.265 GDFLIX',
        size: '38.69 GB',
        url: 'https://gplinks.co/5AS1m'
      },
      {
        quality: '1080p H.265 HUBCLOUD',
        size: '38.69 GB',
        url: 'https://gplinks.co/Q1AHyjC3'
      },
      {
        quality: '720p H.264 GDFLIX',
        size: '32.37 GB',
        url: 'https://gplinks.co/6QMf7'
      },
      {
        quality: '720p H.264 HUBCLOUD',
        size: '32.37 GB',
        url: 'https://gplinks.co/W2h2zPHS'
      },
      {
        quality: '720p H.265 GDFLIX',
        size: '12.68 GB',
        url: 'https://gplinks.co/MdrLR'
      },
      {
        quality: '720p H.265 HUBCLOUD',
        size: '12.68 GB',
        url: 'https://gplinks.co/NDwMAh'
      },
      {
        quality: 'S01-E01',
        size: '3.67 GB',
        url: 'https://gplinks.co/SDTdV2WW'
      },
      {
        quality: 'S01-E02',
        size: '3.54 GB',
        url: 'https://gplinks.co/d0sKm12'
      },
      {
        quality: 'S01-E03',
        size: '3.55 GB',
        url: 'https://gplinks.co/TtryhN3p'
      },
      {
        quality: 'S01-E04',
        size: '3.67 GB',
        url: 'https://gplinks.co/Xm9nRTk7'
      },
      {
        quality: 'S01-E05',
        size: '3.52 GB',
        url: 'https://gplinks.co/vY9ObcKZ'
      },
      {
        quality: 'S01-E06',
        size: '3.87 GB',
        url: 'https://gplinks.co/ifjh15'
      },
      {
        quality: 'S01-E07',
        size: '3.85 GB',
        url: 'https://gplinks.co/p8ru9'
      },
      {
        quality: 'S01-E08',
        size: '3.41 GB',
        url: 'https://gplinks.co/gBfudAJV'
      },
      {
        quality: 'S01-E09',
        size: '3.31 GB',
        url: 'https://gplinks.co/0b8X1kd'
      },
      {
        quality: 'S01-E10',
        size: '3.8 GB',
        url: 'https://gplinks.co/Dxt61Hr'
      },
      {
        quality: 'S01-E11',
        size: '3.89 GB',
        url: 'https://gplinks.co/P9kizRG'
      },
      {
        quality: 'S01-E12',
        size: '3.18 GB',
        url: 'https://gplinks.co/XWo1w'
      },
      {
        quality: 'S01-E13',
        size: '3.01 GB',
        url: 'https://gplinks.co/iAQPC'
      },
      {
        quality: 'S01-E14',
        size: '3.52 GB',
        url: 'https://gplinks.co/KSZBTO'
      },
      {
        quality: 'S01-E15',
        size: '3.78 GB',
        url: 'https://gplinks.co/aOhE'
      },
      {
        quality: 'S01-E16',
        size: '3.72 GB',
        url: 'https://gplinks.co/O5AwN'
      },
      {
        quality: 'S01-E17',
        size: '3.57 GB',
        url: 'https://gplinks.co/mOpvB2Mm'
      },
      {
        quality: 'S01-E18',
        size: '3.41 GB',
        url: 'https://gplinks.co/UJy8UnjS'
      },
      {
        quality: 'S01-E19',
        size: '4.07 GB',
        url: 'https://gplinks.co/YzvDtay3'
      },
      {
        quality: 'S01-E20',
        size: '3.63 GB',
        url: 'https://gplinks.co/LZ8CWj'
      }
    ]
  },
    {
    id: '17',
    title: 'Money Heist S01 - S05',
    description: 'Money Heist - S01 - S05 (2017-2021)  1080p - [ AV1 - 7.68 GB | 5.14 GB | 5.20 GB | 5.03 GB | 7.09 GB ] - Tamil, Telugu, English, Spanish (DDP 5.1 @ 640kb/s) - 📄 MSubs',
    posterUrl: 'https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg',
    year: 2021,
    genre: ['Horror', 'Drama', 'Fantasy'],
    director: ['Jesús Colmenar', 'Frank Darabont', 'Koldo Serra', 'Alejandro Bazzano', 'Javier Quintas'],
    cast: ['Álvaro Morte', 'Úrsula Corberó', 'Itziar Ituño', 'Pedro Alonso'],
    rating: 9.3,
    duration: '42m - 55m',
    quality: ['1080p', 'AV1'],
    audio: ['Tamil', 'Telugu', 'Spanish', 'English', 'DDP 2.0'],
    downloads: 150,
    likes: 250,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: 'S01 ',
        size: '7.68 GB',
        url: 'https://gplinks.co/T0i9'
      },
      {
        quality: 'S02',
        size: '5.14 GB',
        url: 'https://gplinks.co/GkbmU'
      },
      {
        quality: 'S03',
        size: '5.21 GB',
        url: 'https://gplinks.co/L5T8br7p'
             },
      {
        quality: 'S04',
        size: '5.03 GB',
        url: 'https://gplinks.co/k7ErZb'
              },
      {
        quality: 'S05',
        size: '7.09 GB',
        url: 'https://gplinks.co/g5PAaL06'
      }
    ]
  },
  {
    id: '5',
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
    id: '4',
    title: 'Stranger Things S04',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    posterUrl: 'https://es.web.img2.acsta.net/c_310_420/pictures/22/05/14/13/26/5638861.jpg',
    year: 2022,
    genre: ['Horror', 'Drama', 'Fantasy'],
    director: ['Rebecca Thomas', 'Frank Darabont'],
    cast: ['David Harbour', 'Finn Wolfhard', 'Winona Ryder', 'Natalia Dyer'],
    rating: 8.7,
    duration: '42m - 55m',
    quality: ['1080p', 'AV1', 'HEVC'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English'],
    downloads: 150,
    likes: 250,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p HEVC GDFLIX',
        size: '33.06 GB',
        url: 'https://gplinks.co/4niDbFvG'
      },
      {
        quality: '1080p HEVC GDTOT',
        size: '33.06 GB',
        url: 'https://gplinks.co/Hczs2N4J'
      },
      {
        quality: '1080p AV1 GDTOT',
        size: '14.41 GB',
        url: 'https://gplinks.co/YjhPqN'
             },
      {
        quality: '1080p AV1 GDFLIX',
        size: '14.41 GB',
        url: 'https://gplinks.co/MTHV9idN'
      }
    ]
  },
      {
    id: '3',
    title: 'Stranger Things S03',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    posterUrl: 'https://cdn1-production-images-kly.akamaized.net/3mCRc5_PPOsvKRBtoPimokMdbuk=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2845137/original/008089400_1562293837-Foto_17_-_Poster_Utama_Stranger_Things_3.jpg',
    year: 2019,
    genre: ['Horror', 'Drama', 'Fantasy'],
    director: ['Uta Briesewitz', 'Nimród Antal'],
    cast: ['David Harbour', 'Finn Wolfhard', 'Winona Ryder', 'Natalia Dyer'],
    rating: 8.7,
    duration: '42m - 55m',
    quality: ['1080p', 'AV1', 'HEVC'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English'],
    downloads: 150,
    likes: 250,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p HEVC GDFLIX',
        size: '20.44 GB',
        url: 'https://gplinks.co/gx5cF0I'
      },
      {
        quality: '1080p HEVC GDTOT',
        size: '20.44 GB',
        url: 'https://gplinks.co/Hczs2N4J'
      },
      {
        quality: '1080p AV1 GDTOT',
        size: '10.13 GB',
        url: 'https://gplinks.co/9CymOz'
             },
      {
        quality: '1080p AV1 GDFLIX',
        size: '10.13 GB',
        url: 'https://gplinks.co/X3O1T'
      }
    ]
  },  
    {
    id: '2',
    title: 'Stranger Things S02',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    posterUrl: 'https://www.techoffside.com/wp-content/uploads/2017/11/Stranger-things-season-2.jpg',
    year: 2017,
    genre: ['Horror', 'Drama', 'Fantasy'],
    director: ['Ross Duffer', 'Andrew Stanton'],
    cast: ['David Harbour', 'Finn Wolfhard', 'Winona Ryder', 'Natalia Dyer'],
    rating: 8.7,
    duration: '42m - 55m',
    quality: ['1080p', 'AV1', 'HEVC'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English'],
    downloads: 150,
    likes: 250,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p HEVC GDFLIX',
        size: '16.69 GB',
        url: 'https://gplinks.co/B8FwEjy'
      },
      {
        quality: '1080p HEVC GDTOT',
        size: '16.69 GB',
        url: 'https://gplinks.co/Cwfiq'
      },
      {
        quality: '1080p AV1 GDTOT',
        size: '7.61 GB',
        url: 'https://gplinks.co/FQYi'
             },
      {
        quality: '1080p AV1 GDFLIX',
        size: '7.61 GB',
        url: 'https://gplinks.co/0fgtjj'
      }
    ]
  },  
  {
    id: '1',
    title: 'Stranger Things: Season 1 - 2016',
    description: 'Stranger Things: Season 1 (2016) 1080p - [ HEVC 10bit | AV1 | H.264 ] - Tamil, Telugu, Hindi, English (Dolby Digital Plus 5.1 @ 640kb/s) - 📄 ESubs',
    posterUrl: 'https://img.rgstatic.com/content/show/244c3e6a-0057-4354-b535-8b52fd83c3e1/poster-342.jpg',
    year: 2016,
    genre: ['Sci-Fi', 'Horror', 'Mystery'],
    director: ['The Duffer Brothers'],
    cast: ['Winona Ryder', 'David Harbour', 'Millie Bobby Brown', 'Finn Wolfhard', 'Gaten Matarazzo', 'Caleb McLaughlin'],
    rating: 8.7,
    duration: '8 Episodes (~50m each)',
    quality: ['1080p', 'HEVC 10bit', 'AV1', 'H.264'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'English', 'DDP 5.1'],
    downloads: 320,
    likes: 750,
    channelName: 'Tamilpasanga',
    channelLink: 'https://t.me/Tamil_New_Movies_4K',
    downloadLinks: [
      {
        quality: '1080p HEVC GDFLIX',
        size: '13.48 GB',
        url: 'https://gplinks.co/1V3a3D'
      },
      {
        quality: '1080p HEVC GDTOT',
        size: '13.48 GB',
        url: 'https://gplinks.co/aUAC4'
      },
      {
        quality: '1080p AV1 GDTOT',
        size: '6.42 GB',
        url: 'https://gplinks.co/Hczs2N4J'
             },
      {
        quality: '1080p AV1 GDFLIX',
        size: '6.42 GB',
        url: 'https://gplinks.co/4niDbFvG'
      },
      {
        quality: 'S01E01',
        size: '3.18 GB',
        url: 'https://gplinks.co/iV6Pj0M'
      },
      {
        quality: 'S01E02',
        size: '3.44 GB',
        url: 'https://gplinks.co/q0i37xB'
      },
      {
        quality: 'S01E03',
        size: '2.70 GB',
        url: 'https://gplinks.co/BPocwBj'
      },
      {
        quality: 'S01E04',
        size: '3.49 GB',
        url: 'https://gplinks.co/Dg1A18jC'
      },
      {
        quality: 'S01E05',
        size: '2.76 GB',
        url: 'https://gplinks.co/4GJuhEu'
      },
      {
        quality: 'S01E06',
        size: '2.44 GB',
        url: 'https://gplinks.co/UwvEeUv'
      },
      {
        quality: 'S01E07',
        size: '2.18 GB',
        url: 'https://gplinks.co/qwkKUfmI'
      },
      {
        quality: 'S01E08',
        size: '2.85 GB',
        url: 'https://gplinks.co/tKTCxxmi'
      }
    ]
  }
    // ... (keep other movie data)
];

const allMovies = [
  ...latestMovies,
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
