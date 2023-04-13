import { Navbar } from '@/components/Navbar';
import { marketingConfig } from '@/config/marketing';

export default async function Home() {
  return (
    <>
      <Navbar items={marketingConfig.mainNav} />
    </>
  );
}
