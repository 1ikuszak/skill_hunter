import { MainNav } from '@/components/Nav';
import { marketingConfig } from '@/config/marketing';
export default async function Home() {
  return (
    <>
      <MainNav items={marketingConfig.mainNav} />
    </>
  );
}
