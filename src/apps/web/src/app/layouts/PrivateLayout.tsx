import { Footer } from "@web/widgets/Footer";
import { Header } from "@web/widgets/Header";

import { BaseLayout } from "./BaseLayout";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <BaseLayout>
      <Header />
      // TODO: Přidat sidebar s menu. Menu bude stejné jako na tlačítku pro
      <main className="pt-24 lg:pt-32">{children}</main>
      <Footer />
    </BaseLayout>
  );
};

PrivateLayout.displayName = "PrivateLayout";
