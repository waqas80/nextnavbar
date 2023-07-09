import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-flow-col gap-34 min-h-screen">
      <div className="bg-blue-100 col-span-4">
        <div className=' p-2 ml-5'>1st col</div>
      </div>
      <div className="bg-red-100 col-span-1">
        <div className='p-2 mr-5'>2nd col</div>
      </div>
    </main>
  )
}
