import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
