import Image from 'next/image'
import NavBar from '@/Components/NavBar'
import SideBar from '@/Components/SideBar'

export default function Home() {
  return (
    <main className='bg-gray-400 h-screen'>
      <SideBar />
      {/* <h1>Test Page</h1> */}
    </main>
  )
}
