import "./home/css/global.css";
import "./home/css/varibles.css";
import "./home/css/utilities.css";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
