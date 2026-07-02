import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "./globals.css"

export const metadata = {
  title: "Next.js App",
  description: "Next.js is fun"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        <Navigation />
        <main className="grow p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
