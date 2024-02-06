import Link from 'next/link'
import Style from './course.module.css'
import Image from 'next/image'
export default function CoresePage_side(){
    return(
        <div id='Courses_side' className={Style.main}>
            <ul id={Style.CoursesUL} className=' h-full gap-5 flex flex-col justify-around p-5 backdrop:filter backdrop-blur-3xl bg-zinc-900/30 opacity-100'>
                <Link href={`/informations/courses/MA_courses`}><li><span><Image src={`/all_svg/graduation-cap-line.svg`} alt='MA_course' width={15} height={15}/></span><span>M.A Courses</span></li></Link>
                <Link href={`/informations/courses/HSC_courses`}><li><span><Image src={`/all_svg/graduation-cap-line.svg`} alt='HSC_course' width={15} height={15}/></span><span>HSC Courses</span></li></Link>
                <Link href={`/informations/courses/SSC_courses`}><li><span><Image src={`/all_svg/graduation-cap-line.svg`} alt='SSC_course' width={15} height={15}/></span><span>SSC Courses</span></li></Link>
                <Link href={`/informations/courses/JSC_courses`}><li><span><Image src={`/all_svg/graduation-cap-line.svg`} alt='JSC_course' width={15} height={15}/></span><span>JSC Course</span></li></Link>
                <Link href={`/informations/courses/PSC_courses`}><li><span><Image src={`/all_svg/graduation-cap-line.svg`} alt='PSC_course' width={15} height={15}/></span><span>PSC Course</span></li></Link>
        
            </ul>
        </div>
    )
}