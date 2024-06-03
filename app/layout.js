
import "./globals.css";


export const metadata = {
  title: "Interno",
  description: "Furniture for everyone!",
  name: 'viewport',
  content: 'width=device-width, initial-scale=1, minimum-scale=1'
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
