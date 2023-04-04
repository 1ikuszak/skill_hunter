import { Button } from '@/components/Button';

export default async function Home() {
  return (
    <>
      <main>
        <p>Home Page</p>
        <Button size="sm" variant="link">
          button 1
        </Button>
        <Button size="default" variant="destructive">
          button 1
        </Button>
        <Button size="lg" variant="subtle">
          button 1
        </Button>
      </main>
    </>
  );
}
