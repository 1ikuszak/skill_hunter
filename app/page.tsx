import { Button } from '@/components/Button';
import { Input } from '@/components/UserInput';

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
        <div className="flex flex-col gap-12">
          <Input name="Name" type="text" />
          <Input name="Email" type="text" _size="default" />
          <Input name="password" type="password" _size="default" />
        </div>
      </main>
    </>
  );
}
