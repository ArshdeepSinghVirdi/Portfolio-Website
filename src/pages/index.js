import { Inter } from "next/font/google";
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout"
import profile from "../../public/Arsh2.png"
import HireMe from "../components/HireMe"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Layout className="pt-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <Image src={profile} alt="Arsh"  className='w-20 h-30 mr-7 top-0.5 fixed' />
        </div>
      </div>
      <div className="flex  text-dark w-full min-h-screen">
        <div className="flex  w-full">
          <div className="w-full flex flex-col  self-center">
          </div>
        </div>
      </div>
      <HireMe />
    </Layout>
    </>
  );
};
