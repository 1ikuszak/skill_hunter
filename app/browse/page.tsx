import Card from '@/components/Card';
import Container from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import { marketingConfig } from '@/config/marketing';
import elfTigerImage from '@/public/elf-tiger.png';

export default function Home() {
  const cards = [];

  for (let index = 0; index < 100; index++) {
    cards.push(
      <Card
        key={index}
        title="title"
        author="author"
        reviews={100}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        rating={4.8}
        price={100}
        isFavorite={false}
        image={elfTigerImage}
      />
    );
  }

  return (
    <>
      <Container>
        <Navbar items={marketingConfig.mainNav} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {cards}
        </div>
      </Container>
    </>
  );
}
