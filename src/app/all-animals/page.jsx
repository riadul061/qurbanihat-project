import Image from "next/image";
import Link from "next/link";

export default async function AllAnimalsPage({ searchParams }) {

  // ✅ Get query params (NO await)
  const category = searchParams?.category;
  const sort = searchParams?.sort;
  const search = searchParams?.search;


  // ✅ Fetch data from API
  const res = await fetch(
    "https://qurbanihat-project.vercel.app/data.json",
    { cache: "no-store" } // always fresh data
  );

  const animals = await res.json();

  let filteredAnimals = [...animals];

  //  Filter by category (optional)
  if (category) {
    filteredAnimals = filteredAnimals.filter(
      (animal) => animal.category === category
    );
  }

  //  Sort by price
  if (sort === "price") {
    filteredAnimals.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_desc") {
  filteredAnimals.sort((a, b) => b.price - a.price);
}


if (search) {
  filteredAnimals = filteredAnimals.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );
}



  return (
    <div className="p-6">

      {/* 🔽 Buttons */}
      <div className="flex gap-4 justify-end mb-4">
        <Link href="/all-animals?sort=price">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Sort by Price
          </button>
        </Link>

        <Link href="/all-animals?category=Large Animal">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Large Animals
          </button>
        </Link>
      </div>

      {/* 🐐 Animal Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <div
            key={animal.id}
            className="border rounded-xl shadow hover:shadow-lg overflow-hidden"
          >
            <Image
              src={animal.image}
              alt={animal.name}
               width={100}
                height={100}
                 className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-bold">{animal.name}</h2>
              <p className="text-sm text-gray-500">{animal.breed}</p>

              <p className="text-green-700 font-semibold mt-2">
                ৳ {animal.price}
              </p>

              <Link href={`/all-animals/${animal.id}`}>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ❗ Empty State */}
      {filteredAnimals.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No animals found
        </p>
      )}

    </div>
  );
}