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
      <h1 className="text-4xl font-bold">Job Postings</h1>
      <div className="flex flex-wrap justify-center">
        {/* Replace this with actual job data */}
        {Array(10).fill(null).map((_, index) => (
          <Link href={`/job/${index + 1}`} key={index}>
            <a className="m-4 p-4 border rounded shadow flex flex-col items-center">
              <Image src="/path/to/image.jpg" alt="Job Image" width={200} height={150} />
              <h2 className="text-xl font-bold mt-4">JOB TITLE {index + 1}</h2>
              <p className="mt-2">Job Type: Long-term Internship</p>
              <div className="flex items-center mt-2">
                <Image src="/path/to/logo.jpg" alt="Company Logo" width={50} height={50} />
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