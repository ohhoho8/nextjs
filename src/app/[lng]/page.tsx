'use client'
import { usePathname } from 'next/navigation';

const HomePage = () => {
  const lng = usePathname()

  return (
    <div>
      <h1>{lng}</h1>
    </div>
  );
};

export default HomePage;
