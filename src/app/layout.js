import ClientLayout from "./clientLayout";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio site",
  icons: {
    icon: '/assets/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}