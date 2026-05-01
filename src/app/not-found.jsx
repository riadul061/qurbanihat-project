import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">

      <div className="text-center px-4">

        <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Looks like this link is broken. The page you're looking for
          doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          {/* ✅ Fixed SVG for React */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0H5a2 2 0 01-2-2V10m14 10a2 2 0 002-2V10m-5 10h5"
            />
          </svg>

          Back to Home
        </Link>

      </div>

    </div>
  );
}