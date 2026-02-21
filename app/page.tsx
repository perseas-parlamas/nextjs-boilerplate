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
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Image
          className="" //dark:invert
          src="/LogoRoad.PNG"
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
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
           className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-white transition-colors md:w-[158px]" style={{ backgroundColor: '#5977EF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A5AD9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5977EF'}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border-2 px-5 transition-colors bg-white md:w-[158px]" style={{ borderColor: '#5977EF', color: '#5977EF' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5977EF'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#5977EF'; }}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
