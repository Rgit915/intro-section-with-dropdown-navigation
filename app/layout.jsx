import localFont from "next/font/local";
import "./globals.css";

const epilogue = localFont({
  src: "/font/Epilogue/Epilogue-VariableFont_wght.ttf",
  weight: "500 700",
});

export const metadata = {
  title: "Intro section",
  description: "Intro section with dropdown navigation menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </head>
      <body className={`${epilogue.className} bg-white antialiased`}>

        {children}
      </body>
    </html>
  );
}
