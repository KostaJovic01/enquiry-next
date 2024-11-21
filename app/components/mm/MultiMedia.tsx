'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
type Props = {
  currentEntryPoint?: string;
}
export default function MultiMedia(props:Props) {
  const externalAppEntryPoint = props.currentEntryPoint? null : 'tutorial';
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
        if (!props.currentEntryPoint) {
          router.push(`/mm${route}`);
        } else {
          router.push(`/${props.currentEntryPoint}${route}`); // Update the Next.js route
        }
      }
    };

    // Add event listener for messages from iframe
    window.addEventListener('message', handleMessage);

    return () => {
      // Clean up event listener when component unmounts
      window.removeEventListener('message', handleMessage);
    };
  }, [router, props.currentEntryPoint]);

  useEffect(() => {
    const objectElement = document.querySelector('object')
    if (objectElement) {
      objectElement.onload = () => {
        const message = { entrypoint : externalAppEntryPoint }
        const targetOrigin = 'http://localhost:42069'
        if (!objectElement.contentWindow) return;
        objectElement.contentWindow.postMessage(message, targetOrigin);
      }
    }
  }, [externalAppEntryPoint]);


  /** 
   * ---!!!--- WERY IMPORTANT ---!!!---
   * wen need to implement some kind of authentication or user validation because we dont want to access/modify someone elses content 
   * if the external app is running on the same domain then the external app can read the coockies without any problems and we can pass the auth tokens like this 
   * however if they run on different domains then we need to implement cross domain coockie tracking
   *  
   * TODO: could we implement it in some other way 
   * if we click on a button which is located somwhere in the host application just append the /mm route to it and render the Multi media component
   * 
   *  TODO: find a more elegant and stable solution instead of a iframe
   * TODO: implemet the external app in such a way that i can define which route i want to be visible the favorite videos ore tutorial videos
   */


  return (
      <object
        className="w-full h-full"
        data={iframeSrc}
        style={{ border: 'none' }}
      />
  );
}
