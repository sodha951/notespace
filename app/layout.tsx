export const metadata = {
  title: "notespace",
  description: "Online notepad for writing and sharing notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fb] text-gray-900">
        {children}
      </body>
    </html>
  );
}
