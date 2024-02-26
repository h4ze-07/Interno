
import "./globals.css";


export const metadata = {
  title: "Interno",
  description: "Furniture for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#FFFFFF] font-main'>
        {children} 
      </body>
    </html>
  );
}
