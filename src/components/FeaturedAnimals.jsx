import Image from "next/image";
import Link from "next/link";


const FeaturedAnimals = async () => {
    const res = await fetch('https://qurbanihat-project.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 4)




    return (
       <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Animals
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topPhotos.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                 className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.breed}</p>

                <p className="text-green-700 font-semibold mt-2">
                  ৳ {item.price}
                </p>

                <Link href={`/details/${item.id}`}>
                  <button className="mt-3 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
export default FeaturedAnimals;