import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    {/* Sticky mobile CTA */}
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-card border-t border-border p-2 flex gap-2 z-40">
      <a
        href="tel:+12407808930"
        className="flex-1 flex items-center justify-center gap-1.5 bg-accent text-accent-foreground py-2.5 rounded-md text-sm font-medium"
      >
        Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-primary-foreground py-2.5 rounded-md text-sm font-medium"
      >
        Book Appointment
      </a>
    </div>
    <div className="lg:hidden h-14" /> {/* spacer for sticky CTA */}
  </div>
);

export default PageLayout;
