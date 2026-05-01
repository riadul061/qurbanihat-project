import Image from "next/image";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";

export default async function DetailsPage({ params }) {
  // Bug 1: `await params` gives you the params object, then destructure `id` from it
  const { id } = await params;

  const res = await fetch(
    "https://qurbanihat-project.vercel.app/data.json",
    { cache: "no-store" }
  );

  // Bug 2: Must check res.ok BEFORE calling res.json()
  if (!res.ok) return notFound();

  const photos = await res.json();

  // Bug 3: Was using undefined `id` variable — now correctly uses destructured id
  // Bug 4: Was checking `!photos` (the array) instead of `!photo` (the found item)
  const photo = photos.find(
    (item) => item.id === parseInt(id)
  );

  if (!photo) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={photo.image}
          alt={photo.name}
          width={100}
          height={100}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{photo.name}</h1>
          <p className="text-gray-600 mt-2">{photo.description}</p>

          <div className="mt-4 space-y-2 text-sm">
            <p><b>Breed:</b> {photo.breed}</p>
            <p><b>Weight:</b> {photo.weight} kg</p>
            <p><b>Age:</b> {photo.age} years</p>
            <p><b>Location:</b> {photo.location}</p>
          </div>

          <p className="text-green-700 text-2xl font-bold mt-4">
            ৳ {photo.price}
          </p>
        </div>
      </div>

      <BookingForm />
    </div>
  );
}