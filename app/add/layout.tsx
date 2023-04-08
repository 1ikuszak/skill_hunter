type RootLayoutProps = {
  children: React.ReactNode;
};

export default function Add({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-neutral-100">{children}</body>
    </html>
  );
}
