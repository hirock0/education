import Link from 'next/link'
import Style from './students.module.css'
import Image from 'next/image'
export default function Students(){
    return(
        <div id='Students' className={Style.main}>
            <ul id={Style.StudentsUL} className=' h-full gap-5 flex flex-col justify-around p-5 backdrop:filter backdrop-blur-3xl bg-zinc-860/100 opacity-95 border'>
                <Link href={`/informations/students/MA_students`}><li><span><Image src={`/all_svg/team-line.svg`} alt='M.A' width={15} height={15}/></span><span>M.A Students</span></li></Link>
                <Link href={`/informations/students/HSC_students`}><li><span><Image src={`/all_svg/team-line.svg`} alt='HSC' width={15} height={15}/></span><span>HSC Students</span></li></Link>
                <Link href={`/informations/students/SSC_students`}><li><span><Image src={`/all_svg/team-line.svg`} alt='SSC' width={15} height={15}/></span><span>SSC Students</span></li></Link>
                <Link href={`/informations/students/JSC_students`}><li><span><Image src={`/all_svg/team-line.svg`} alt='JSC' width={15} height={15}/></span><span>JSC Students</span></li></Link>
                <Link href={`/informations/students/PSC_students`}><li><span><Image src={`/all_svg/team-line.svg`} alt='PSC' width={15} height={15}/></span><span>PSC Students</span></li></Link>
        
            </ul>
        </div>
    )
}