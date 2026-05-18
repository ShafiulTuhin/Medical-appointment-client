import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const EditProfile = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  const updateUser = async () => {
    const { data: res, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      return;
    }

    if (res) {
      router.push("/profile");
    }
  };
  return (
    <Modal>
      <button className="mt-4 btn bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition cursor-pointer">
        Update Profile
      </button>

      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-5">
        <h2 className="text-2xl font-bold text-center">Update Profile</h2>

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full bg-slate-100"
          placeholder="Name"
        />

        {/* Image */}
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full bg-slate-100"
          placeholder="Image URL"
        />

        {/* Save Button */}
        <div className="flex gap-3 pt-3">
          {/* Cancel */}
          <Link href="/profile" className="flex-1">
            <button className="w-full btn bg-gray-200 py-2 rounded-lg cursor-pointer">
              Cancel
            </button>
          </Link>

          {/* Save */}
          <button
            onClick={updateUser}
            className="flex-1 btn bg-cyan-500 text-[#081f30] py-2 rounded-lg cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;
