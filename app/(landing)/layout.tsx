import { ReactNode } from 'hono/jsx'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

