import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Job() {
  const router = useRouter()
  const { id } = router.query
  const [job, setJob] = useState({ title: '', type: '', company: '', image: '', logo: '' })

  useEffect(() => {
    // Fetch job data from API
    // setJob(data)
  }, [id])

  if (!job) return <div>Loading...</div>

  return (
    <div>
      {/* Display job details */}
      <h1>{job.title}</h1>
      <p>{job.type}</p>
      <p>{job.company}</p>
      <Image src={job.image} alt="Job Image" width={500} height={300} />
      <Image src={job.logo} alt="Company Logo" width={100} height={100} />
    </div>
  )
}