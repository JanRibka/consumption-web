import { Footer } from "@web/widgets/Footer";
import { Header } from "@web/widgets/Header";

import { BaseLayout } from "./BaseLayout";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <BaseLayout>
      <Header />
      <main className="pt-24 lg:pt-32">{children}</main>
      <Footer />
    </BaseLayout>
  );
};

PublicLayout.displayName = "PublicLayout";
