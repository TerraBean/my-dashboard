import Image from 'next/image'
import AcmeLogo from './ui/acme-log'
import { lusitana } from './ui/fonts'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-6'>
      <div className='flex justify-start align-baseline bg-blue-600 text-white p-4 rounded-lg'>
        <AcmeLogo />
      </div>
      <div className='flex flex-col justify-center gap-6 bg-slate-100 mt-4 py-10 px-6 rounded-lg'>
        <p className={`${lusitana.className} text-xl text-gray-800`}><strong>Welecome to Acme.</strong>This is the example for the <a className='text-blue-500' href="#">Next.js Learn Course</a>, brought to you by Vercel</p>

      </div>
    </main>
  )
}
