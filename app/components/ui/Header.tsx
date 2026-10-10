'use client';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from './Nav';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (lang: 'en' | 'ar') => {
    const newPath = pathname.replace(/^\/(en|ar)/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <header className="p-4 bg-gray-100 flex justify-between">
      {/* <h1 className="font-bold text-xl">My Landing Page</h1>
      <div>
        <button onClick={() => switchLang('en')} className="mr-2">
          EN
        </button>
        <button onClick={() => switchLang('ar')}>AR</button>
      </div> */}
      {/* <Navbar locale=''/> */}
    </header>
  );
}
