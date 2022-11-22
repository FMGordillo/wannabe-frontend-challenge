import type { FunctionComponent, PropsWithChildren } from "react";

type LayoutProps = {
  className?: string;
};

const Layout: FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  children,
  className,
}) => (
  <section className={`container mx-auto h-screen ${className}`}>
    {children}
  </section>
);

export default Layout;
