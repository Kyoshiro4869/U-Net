import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">Job Postings</h1>
      <div className="flex flex-wrap justify-center">
        {/* Replace this with actual job data */}
        {Array(10).fill(null).map((_, index) => (
          <div key={index} className="m-4 p-4 border rounded shadow">
            <h2 className="text-xl font-bold">Job Title {index + 1}</h2>
            <p>Job Description {index + 1}</p>
          </div>
        ))}
      </div>
    </main>
  )
}