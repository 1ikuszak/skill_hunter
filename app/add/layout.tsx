type AddLayoutProps = {
  children: React.ReactNode;
};

export default function AddLayout({ children }: AddLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-100">{children}</body>
    </html>
  );
}
