import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="text-white">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
