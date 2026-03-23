"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
  backgroundColor: '#5977EF',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-4 py-16 px-16 sm:items-start">
        <Image
          className="" //dark:invert
          src="/logocropped.png"
          alt="RoadStyx Logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Swapping cars just got effortless. And it’s a fraction of what you’d burn on a rental. Seriously, check it out.
          </h1>
         <p className="max-w-md text-lg leading-8 text-black">
  Check our{" "}
  <a
    href="https://www.linkedin.com/company/roadstyx/about/"
    className="font-medium hover:underline"
    style={{ color: '#000000' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn Page
  </a>
</p>
        </div>
      </main>
    </div>
  );
}
