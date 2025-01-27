'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello')
      const { message } = await res.json()
      setMessage(message)
    }
    fetchData()
  }, [])

  if (!message) return <p>Loading...</p>

  return (
    <h1 className="text-3xl font-semibold">
      {message}
    </h1>
  )
}
