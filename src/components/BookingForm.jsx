"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const { data: session, isPending } = authClient.useSession(); 
  const user = session?.user;

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("❌ Please login first");
      router.push("/login");
      return;
    }

    const form = e.target;

    const bookingData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      notes: form.notes.value.trim(),
    };

    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.address) {
      return toast.error("❌ All fields are required");
    }

    if (!/^01[3-9]\d{8}$/.test(bookingData.phone)) {
      return toast.error("❌ Invalid Bangladeshi phone number");
    }

    setLoading(true);

    // ⏳ Simulate API call
    setTimeout(() => {
      console.log("Booking:", bookingData);
      toast.success("✅ Booking Confirmed!");
      form.reset();
      setLoading(false);
    }, 1200);
  };

  // ⏳ Loading state
  if (isPending) { // ✅ correct better-auth loading flag
    return <p className="text-center mt-10">Loading user...</p>;
  }

  return (
    <div className="mt-10 bg-white shadow-xl rounded-2xl p-6 border">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🐄 Book This Animal
      </h2>

      {!user ? (
        <div className="text-center">
          <p className="text-red-500 mb-4">
            ⚠ You must be logged in to book
          </p>
          <button
            onClick={() => router.push("/login")}
            className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800"
          >
            Go to Login
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="grid md:grid-cols-2 gap-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              defaultValue={user.name || ""}
              className="w-full p-3 border rounded-lg focus:outline-green-600"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              defaultValue={user.email || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              className="w-full p-3 border rounded-lg focus:outline-green-600"
              placeholder="01XXXXXXXXX"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              name="address"
              className="w-full p-3 border rounded-lg focus:outline-green-600"
              placeholder="Your address"
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              rows="3"
              className="w-full p-3 border rounded-lg focus:outline-green-600"
              placeholder="Optional..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`md:col-span-2 py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>

        </form>
      )}
    </div>
  );
}