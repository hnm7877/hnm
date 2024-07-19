import "../styles/main.css"

export default function RootLayout({ children }) {
  return (
    <html className="h-full scroll-smooth bg-zinc-950 text-white antialiased" lang="en">
      <body className="h-full">{children}</body>
    </html>
  )
}
