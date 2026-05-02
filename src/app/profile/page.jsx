"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/login");
    }
  }, [user, isPending, router]);

  // Loading state
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    );
  }

  // Not logged in — render nothing while redirecting
  if (!user) return null;

  return (
    <div className="px-4 py-8">
      <Card className="max-w-sm mx-auto flex flex-col items-center gap-3 p-6 border">
        <Avatar
          className="h-20 w-20 text-2xl"
          src={user?.image ?? undefined}
          name={user?.name}
          referrerPolicy="no-referrer"
        />

        <div className="text-center">
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;