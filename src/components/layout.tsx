import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <main className="overflow-y-hidden">{children}</main>
      <Footer />
    </div>
  );
}
