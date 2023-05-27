import Image from 'next/image'
import styles from './page.module.css'
import Products from './products/page'
export const metadata={
  title:'ISTAD Institute of Science and Technology Advanced Development',
  description:'ISTAD is a noteworthy science and technology institute in Cambodia. ISTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.'
  }
export default function Home() {
  return (
    <main className="container-fluid">
      <Products />
    </main>
  )
}
