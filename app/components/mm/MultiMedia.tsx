'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MultiMedia() {
  const { slug } = useParams();
  const router = useRouter();

  // Normalize slug to always be an array
  const normalizedSlug = Array.isArray(slug) ? slug : slug ? [slug] : [];

  // Handle the case where no slug is provided (i.e., base /mm route)
  const iframeSrc = normalizedSlug.length > 0 
    ? `http://localhost:42069/${normalizedSlug.join('/')}` 
    : 'http://localhost:42069';

  useEffect(() => {
    // Function to handle messages from iframe
    const handleMessage = (event: MessageEvent) => {
      // Ensure it's coming from a trusted origin and we always trust 42069
      if (event.origin !== 'http://localhost:42069') return;

      const { route } = event.data;
      if (route) {
        console.log(`External app is on route: ${route}`);
        router.push(`/mm${route}`); // Update the Next.js route
      }
    };

    // Add event listener for messages from iframe
    window.addEventListener('message', handleMessage);

    return () => {
      // Clean up event listener when component unmounts
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);


  /** 
   * ---!!!--- WERY IMPORTANT ---!!!---
   * wen need to implement some kind of authentication or user validation because we dont want to access/modify someone elses content 
   * if the external app is running on the same domain then the external app can read the coockies without any problems and we can pass the auth tokens like this 
   * however if they run on different domains then we need to implement cross domain coockie tracking
   *  
   */


  return (
      <iframe
        className="w-full h-full"
        src={iframeSrc}
        sandbox="allow-scripts allow-same-origin"
        style={{ border: 'none' }}
      />
  );
}