import Link from 'next/link'
import Style from './teacher.module.css'
import Image from 'next/image'
export default function Teachers(){
    return(
        <div id='Teachers' className={Style.main}>
            <ul id={Style.TeachersUL} className=' h-full gap-5 flex flex-col justify-around p-5 backdrop:filter backdrop-blur-3xl bg-zinc-860/100 opacity-95 border'>
                <Link href={`/informations/teachers/science_teachers`}><li><span><Image src={`/all_svg/presentation-fill.svg`} alt='Science' width={15} height={15}/></span><span>Science Teachers</span></li></Link>
                <Link href={`/informations/teachers/arts_teachers`}><li><span><Image src={`/all_svg/presentation-fill.svg`} alt='Atrs' width={15} height={15}/></span><span>Arts Teachers</span></li></Link>
                <Link href={`/informations/teachers/commerce_teachers`}><li><span><Image src={`/all_svg/presentation-fill.svg`} alt='Commerce' width={15} height={15}/></span><span>Commerce Teachers</span></li></Link>
                <Link href={`/informations/teachers/primary_teachers`}><li><span><Image src={`/all_svg/presentation-fill.svg`} alt='Primary' width={15} height={15}/></span><span>Primary Teachers</span></li></Link>
                <Link href={`/informations/teachers/private_teachers`}><li><span><Image src={`/all_svg/presentation-fill.svg`} alt='Private' width={15} height={15}/></span><span>Private Tutors</span></li></Link>
        
            </ul>
        </div>
    )
}