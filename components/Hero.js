import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"


export default function Hero() {
    return (
        <section className="flex justify-between h-[90vh] sm:px-5" id="home">
            <div className='m-auto'>

                <p className='text-[20px]'>Hi, I'm Peter Mwaura. </p>
                <p>A Freelance Web Developer</p>
                <span className='text-green-400 text-[35px] hover:text-blue-600 cursor-pointer'>Based in Nairobi, Kenya</span>
                <div className='flex gap-2 mt-4'>
                    <Link href="https://github.com/Ngumi22" target='blank'>
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/peterngumimwaura" target='blank'>
                        <FaLinkedinIn />
                    </Link>
                    <Link href="https://twitter.com/ngumi21" target='blank'>
                        <FaXTwitter />
                    </Link>
                </div>
            </div>
            <div className='m-auto hidden sm:block'>
                <Image
                    src="/lee.jpg"
                    width={600}
                    height={500}
                    alt="Picture of the author"
                    className='bg-blend-color-burn'
                />
            </div>
        </section>
    )
}
