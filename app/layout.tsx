import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
  title: "Wenyu Wei | Machine Learning Researcher",
  description: "Research on HGNN, Graph Learning and Genomics",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
