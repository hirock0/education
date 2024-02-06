import Link from 'next/link'
import Style from './contact.module.css'
import Image from 'next/image'
export default function Contact_side(){
    return(
        <div id='Contact-side' className={Style.main}>
            <ul id={Style.ContactUL} className=' h-full gap-5 flex flex-col justify-around p-5 backdrop:filter backdrop-blur-3xl bg-zinc-900/30 opacity-100'>
                <Link href={``}><li><span><Image src={`/all_svg/smartphone-fill.svg`} alt='mobile' width={15} height={15}/></span><span>Mobile</span></li></Link>
                <Link href={``}><li><span><Image src={`/all_svg/mail-line.svg`} alt='email' width={15} height={15}/></span><span>Email</span></li></Link>
                <Link href={``}><li><span><Image src={`/all_svg/facebook.svg`} alt='facebook' width={15} height={15}/></span><span>Facebook</span></li></Link>
                <Link href={``}><li><span><Image src={`/all_svg/whatsapp-line.svg`} alt='whatsapp' width={15} height={15}/></span><span>WhatsApp</span></li></Link>
                <Link href={``}><li><span><Image src={`/all_svg/linkedin.svg`} alt='linkedin' width={15} height={15}/></span><span>LinkedIn</span></li></Link>
        
            </ul>
        </div>
    )
}