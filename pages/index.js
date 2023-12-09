import { Inter } from 'next/font/google'
import Layout from './layout';
import Herosection from './components/Herosection';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Herosection />
      <Projects />
      <ContactMe/>
    </Layout>
  )
}

