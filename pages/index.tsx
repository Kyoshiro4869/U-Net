import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaBookmark } from 'react-icons/fa'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="font-bold text-4xl">Job Postings</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Replace this with actual job data */}
        {Array(10).fill(null).map((_, index) => (
          <Link href={`/job/${index + 1}`} key={index}>
            <a className="flex flex-col items-center p-4 border rounded shadow">
              <Image src="/path/to/image.jpg" alt="Job Image" width={100} height={75} />
              <h2 className="mt-4 font-bold text-xl">JOB TITLE {index + 1}</h2>
              <p className="mt-2">Job Type: Long-term Internship</p>
              <div className="flex items-center mt-2">
                <Image src="/path/to/logo.jpg" alt="Company Logo" width={25} height={25} />
                <p className="ml-2">Company Name</p>
              </div>
              <div className="mt-2">
                <FaBookmark size={24} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  )
}