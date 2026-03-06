import Logo from "@web/shared/components/Logo";

import { ActionButtons } from "./components/ActionButtons";
import { DesktopNav } from "./components/DesktopNav";
import { MobileMenu } from "./components/MobileMenu";
import { MobileToggle } from "./components/MobileToggle";
import { useNavbarMobile } from "./hooks/useNavbarMobile";
import { useNavbarScroll } from "./hooks/useNavbarScroll";
import { navbarVariants } from "./styles/navbarVariants";

export const Header = () => {
  const { scrolled } = useNavbarScroll(20);
  const { mobileOpen, toggleMobileMenu } = useNavbarMobile();

  const styles = navbarVariants({ scrolled, mobileOpen });

  return (
    <header>
      <div className={styles.header()}>
        <div className={styles.container()}>
          <div className={styles.logoContainer()}>
            <Logo scrolled={scrolled} />
          </div>
          <DesktopNav />
          <ActionButtons />
          <MobileToggle
            mobileOpen={mobileOpen}
            toggleMobileMenu={toggleMobileMenu}
            styles={styles.mobileToggle()}
          />
        </div>
        <MobileMenu styles={styles.mobileMenu()} />
      </div>
    </header>
  );
};

Header.displayName = "Header";
