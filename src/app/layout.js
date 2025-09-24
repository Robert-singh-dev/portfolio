import ClientLayout from "./clientLayout";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  );
}
