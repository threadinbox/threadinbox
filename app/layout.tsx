import "./globals.css"

export const metadata = {
  title: "ThreadInbox",
  description: "One Inbox. Every DM. Zero Chaos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}