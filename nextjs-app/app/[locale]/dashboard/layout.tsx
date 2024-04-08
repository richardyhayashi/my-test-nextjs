import React from "react";
import Navbar from "@/components/Navbar";

type LayoutProps = {
    children: React.ReactNode;
}

const layout = ({
    children,
}: LayoutProps) => {
  return (
    <section>
        <Navbar />

        {children}
    </section>
  );
}

export default layout;