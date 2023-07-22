import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'Muhamad Rizki',
    template: '%s | Muhamad Rizki',
  },
  description: 'Muhamad Rizki portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
