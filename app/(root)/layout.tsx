import MobilNav from "@/components/MobilNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Abdul', lastName: 'Muhammad' }

  return (
    <main className="flex h-screen w-full">
        <Sidebar
        user={loggedIn}
        />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
          <div>
            <MobilNav user={loggedIn} />
          </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}
