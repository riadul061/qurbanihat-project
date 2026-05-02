import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DetailsPage({ params }) {
  // ✅ Check session first — server-side protection
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { id } = await params;

  const res = await fetch(
    "https://qurbanihat-project.vercel.app/data.json",
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const photos = await res.json();

  const photo = photos.find((item) => item.id === parseInt(id));

  if (!photo) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={photo.image}
          alt={photo.name}
          width={600}
          height={400}
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