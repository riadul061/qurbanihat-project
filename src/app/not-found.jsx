import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div class="bg-white flex items-center justify-center min-h-screen">

  <div class="text-center px-4">
    
    <h1 class="text-7xl md:text-8xl font-extrabold text-gray-900">
      404
    </h1>

    <h2 class="text-2xl md:text-3xl font-semibold mt-3 text-gray-800">
      Page Not Found
    </h2>

    <p class="text-gray-500 mt-3 max-w-md mx-auto">
      Looks like this friendship link is broken. The page you're looking for
      doesn't exist or has been moved.
    </p>

    
    <Link href="/" 
       class="inline-flex items-center gap-2 mt-6 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition">
       
      
      <svg xmlns="http://www.w3.org/2000/svg" 
           class="w-5 h-5" fill="none" viewBox="0 0 24 24" 
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0H5a2 2 0 01-2-2V10m14 10a2 2 0 002-2V10m-5 10h5"/>
      </svg>

      Back to Home
    </Link>

  </div>

</div>

  );
};

export default NotFoundPage;