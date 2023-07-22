import '../styles/globals.css'

export const metadata = {
  title: 'Rizki | Home',
  description: 'Muhamad Rizki 3D portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
