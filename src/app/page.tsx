'use client';

import MusicianCard from '../components/MusicianCard';
import { 
  Camera, 
  Play, 
  Globe 
} from 'lucide-react';

export default function Home() {
  // Example data - replace with your client's actual information
  const musicianData = {
    name: "Ethan Chaparro",
    university: "California State University, Northridge",
    imageUrl: "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/453274328_1231437041621742_5627126441537695466_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFQSdAMYpOg4c0mYDWA_N99BgJrfVSYcLUak02NKT3Z5VsRt-JoMjHIk0fJwzRf9zE&_nc_ohc=l4sYg2TArGEQ7kNvwGqmGjN&_nc_gid=SEWbZ7AeRQuBKCHZH33XRg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXMjuV-pDJOx-aqmL9pUIWtK5SK7QLCZT_LIwqbc2uB7Q&oe=68AC6901&_nc_sid=7a9f4b",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/ethanchaparro20",
        icon: <Camera size={20} />
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@ethanchaparro20",
        icon: <Play size={20} />
      },
      {
        platform: "Website",
        url: "https://ethan-frontend.vercel.app",
        icon: <Globe size={20} />
      }
    ]
  };

  return (
    <div className="m-auto min-h-screen bg-gradient-to-br from-white to-indigo-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <MusicianCard {...musicianData} />
        </div>
      </div>
    </div>
  );
}
