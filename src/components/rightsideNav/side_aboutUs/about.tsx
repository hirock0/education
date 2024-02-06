import Link from 'next/link'
import Style from './about.module.css'
import Image from 'next/image'
export default function AboutUs_side(){
    return(
        <div id='AboutUs_side' className={Style.main}>
            <ul id={Style.aboutusUL} className=' h-full gap-5 flex flex-col justify-around p-5 backdrop:filter backdrop-blur-3xl bg-zinc-900/30 opacity-100'>
                <Link href={`/informations/about_us/our_educations`}><li><span><Image src={`/all_svg/smartphone-fill.svg`} alt='Educations' width={15} height={15}/></span><span>Our Educations</span></li></Link>
                <Link href={`/informations/about_us/sports_corner`}><li><span><Image src={`/all_svg/mail-line.svg`} alt='Spots_corner' width={15} height={15}/></span><span>Sports Corner</span></li></Link>
                <Link href={`/informations/about_us/annual_functions`}><li><span><Image src={`/all_svg/facebook.svg`} alt='Annual_function' width={15} height={15}/></span><span>Annual Functions</span></li></Link>
                <Link href={`/informations/about_us/weekly_task`}><li><span><Image src={`/all_svg/whatsapp-line.svg`} alt='Weekly_task' width={15} height={15}/></span><span>Weekly Task</span></li></Link>
                <Link href={`/informations/about_us/caring_students`}><li><span><Image src={`/all_svg/linkedin.svg`} alt='Caring_students' width={15} height={15}/></span><span>Caring of Students</span></li></Link>

            </ul>
        </div>
    )
}