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
    id: '6',
    title: 'Money Heist S01 - S05',
    description: 'Money Heist - S01 - S05 (2017-2021)  1080p - [ AV1 - 7.68 GB | 5.14 GB | 5.20 GB | 5.03 GB | 7.09 GB ] - Tamil, Telugu, English, Spanish (DDP 5.1 @ 640kb/s) - 📄 MSubs',
    posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRzf_ZG1zfHNiqWtuJFc8KmDo4RSreCxyOKGeLabjO4YfcSidAJ6TRIDGRcIEOHpQsSQ&usqp=CAU',
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
    title: 'Stranger Things S01',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    posterUrl: 'https://img.rgstatic.com/content/show/244c3e6a-0057-4354-b535-8b52fd83c3e1/poster-342.jpg',
    year: 2016,
    genre: ['Horror', 'Drama', 'Fantasy'],
    director: ['Matt Duffer', 'Shawn Levy'],
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
