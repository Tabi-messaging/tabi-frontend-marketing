import Image from "next/image";
import Link from "next/link";

import GoogleButton from "@/components/auth/GoogleButton";

interface IAuthLayoutProps {
  title: string;
  subtitle: string;
  linkText?: string;
  linkHref?: string;
  isGoogleButtonVisibile?: boolean;
}

function AuthLayout({
  children,
  linkHref,
  linkText,
  title,
  subtitle,
  isGoogleButtonVisibile = true,
}: React.PropsWithChildren<IAuthLayoutProps>) {
  return (
    <main
      className="min-h-screen items-center flex flex-col justify-center max-w-8xl "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
    radial-gradient(circle at 50% 0%, rgba(168, 140, 255, 0.55) 0%, transparent 35%), /* bright purple core */
    radial-gradient(circle at 20% 0%, rgba(255, 210, 210, 0.35) 0%, transparent 60%),
    radial-gradient(circle at 80% 0%, rgba(210, 240, 255, 0.35) 0%, transparent 60%),
    radial-gradient(circle at 50% 0%, rgba(200, 190, 255, 0.25) 0%, transparent 70%)
  `,
      }}
    >
      <div className="mx-auto w-10/12 lg:w-1/3 max-w-100.25">
        <Link href={"/"}>
          <Image
            src={"/images/tabi-logo-without-text.svg"}
            alt="Tabi Logo"
            width={34}
            height={34}
            className="mx-auto mt-20"
          />
        </Link>
        <div className="text-center">
          <h1 className="font-medium text-xl my-2">{title}</h1>
          <p className="text-sm">
            {subtitle}{" "}
            {linkHref && linkText && (
              <Link href={linkHref} className="text-primary hover:underline">
                {linkText}
              </Link>
            )}
          </p>
        </div>

        {isGoogleButtonVisibile && <GoogleButton />}
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
