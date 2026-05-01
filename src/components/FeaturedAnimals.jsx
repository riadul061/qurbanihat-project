import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const FeaturedAnimals = async () => {

  const res = await fetch(
    "https://qurbanihat-project.vercel.app/data.json",
    { cache: "no-store" } // ✅ always fresh
  );

  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Animals
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topPhotos.map((photo) => (
          <div
            key={photo.id}
            className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* ✅ Proper Image usage */}
            <Image
              src={photo.image}
              alt={photo.name}
              width={400}
              height={300}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{photo.name}</h3>
              <p className="text-sm text-gray-500">{photo.breed}</p>

              <p className="text-green-700 font-semibold mt-2">
                ৳ {photo.price}
              </p>

              {/* ✅ Correct route */}
              <Link href={`/details/${photo.id}`}>
                <Button className="mt-3 w-full bg-green-700 text-white hover:bg-green-800">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAnimals;