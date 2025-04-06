import React from "react";

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">{title || "My App"}</h1>
        {description && <p className="text-sm">{description}</p>}
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
export { Layout };