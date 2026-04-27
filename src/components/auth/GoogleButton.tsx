import Image from "next/image";

function GoogleButton() {
  return (
    <div className="flex items-center justify-center gap-1 border-[#E2E2E2] rounded-lg border  py-1 mt-6 cursor-pointer">
      <Image
        src={"/images/brands/google.svg"}
        alt="Google Logo"
        width={24}
        height={24}
      />
      <p className="text-[#454A53] mt-0.5">Continue with Google</p>
    </div>
  );
}

export default GoogleButton;
