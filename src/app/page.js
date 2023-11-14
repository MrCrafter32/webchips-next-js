import Image from 'next/image'
import styles from './globals.css'
import { Navbar } from '@/components/navbar/navbar.js'
import bg from 'public/bg.png'

export default function Home() {
  return (
    
    <><Navbar />
    <div>
      <Image src={bg} alt="Picture of the author" placeholder='blur' quality={100}  sizes='100vw' style={{objectFit: 'cover'}} />
    </div>




    
    </>
      )
      }  
