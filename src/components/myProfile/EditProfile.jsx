import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
      setOpen(false);
      toast.success("Profile updated successfully!");
      router.push("/profile");
    }
  };
  return (
    // <Modal>
    //   <Button
    //     variant="outline"
    //     className="rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-4"
    //   >
    //     <BiEdit /> Update Profile
    //   </Button>

    //   <Modal.Backdrop>
    //     <Modal.Container placement="auto">
    //       <Modal.Dialog className="sm:max-w-xl">
    //         <Modal.CloseTrigger />
    //         <Modal.Header>
    //           <Modal.Heading>Edit Appointment</Modal.Heading>
    //         </Modal.Header>
    //         <Modal.Body className="lg:p-6">
    //           <Surface variant="default">
    //             <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-5">
    //               <h2 className="text-2xl font-bold text-center">
    //                 Update Profile
    //               </h2>

    //               {/* Name */}
    //               <input
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 className="input input-bordered w-full bg-slate-100"
    //                 placeholder="Name"
    //               />

    //               {/* Image */}
    //               <input
    //                 value={image}
    //                 onChange={(e) => setImage(e.target.value)}
    //                 className="input input-bordered w-full bg-slate-100"
    //                 placeholder="Image URL"
    //               />

    //               {/* Save Button */}
    //               <div className="flex gap-3 pt-3">
    //                 {/* Cancel */}
    //                 <Link href="/profile" className="flex-1">
    //                   <button className="w-full btn bg-gray-200 py-2 rounded-lg cursor-pointer">
    //                     Cancel
    //                   </button>
    //                 </Link>

    //                 {/* Save */}
    //                 <button
    //                   onClick={updateUser}
    //                   className="flex-1 btn bg-cyan-500 text-[#081f30] py-2 rounded-lg cursor-pointer"
    //                 >
    //                   Save
    //                 </button>
    //               </div>
    //             </div>
    //           </Surface>
    //         </Modal.Body>
    //       </Modal.Dialog>
    //     </Modal.Container>
    //   </Modal.Backdrop>
    // </Modal>

    <Modal>
      <Button
        onPress={() => setOpen(true)}
        variant="outline"
        className="rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-2"
      >
        <BiEdit /> Update Profile
      </Button>
      {open && (
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Update Profile</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold text-center">
                    Update Profile
                  </h2>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full bg-slate-100"
                    placeholder="Name"
                  />

                  <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="input input-bordered w-full bg-slate-100"
                    placeholder="Image URL"
                  />

                  <div className="flex gap-3 pt-3">
                    <Link href="/profile" className="flex-1">
                      <button
                        onClick={() => setOpen(false)}
                        className="w-full btn bg-gray-200 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </Link>

                    <button
                      onClick={updateUser}
                      className="flex-1 btn bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold py-2 rounded-lg cursor-pointer "
                    >
                      <h2 className="flex gap-2 items-center justify-center">
                        {" "}
                        <FaSave /> Save
                      </h2>
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      )}
    </Modal>
  );
};

export default EditProfile;
