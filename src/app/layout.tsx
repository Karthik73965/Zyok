import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  publishableKey='pk_test_cGxlYXNhbnQtbWFsbGFyZC02OC5jbGVyay5hY2NvdW50cy5kZXYk' appearance={{
      baseTheme: dark,
      signIn: { baseTheme: dark },
      signUp:{baseTheme:dark}
    }}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}