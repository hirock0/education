import Style from './psc.module.css'
import Link from 'next/link'
export default function PscCoursePage(){
    return(
        <main id={Style.main}>
            <h1 className=' text-center underline underline-offset-4 pt-5 lg:text-xl'>PSC Course</h1>
            <div className='pb-10'>
                <p className=' max-sm:text-xs sm:text-sm md:text-base p-5 lg:pr-10 lg:pl-10'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic esse eaque nam assumenda! Aliquid deleniti quam, eaque voluptas velit ab id dolore rem repellat nisi aspernatur omnis quod provident assumenda.
                    Cupiditate distinctio harum ipsam autem unde, possimus nihil corporis itaque aliquam sequi cumque, numquam dolor ullam voluptate ab explicabo nulla fugit animi? Esse labore provident illum corrupti ducimus. Nam, quasi.
                    Quia veritatis illum, consectetur sapiente molestias voluptates sunt vero tempora, modi harum iure maiores, a in officia dolores non ad atque. Distinctio nobis fugit rerum nam reprehenderit. Dicta, illum ipsum.
                    Error temporibus magni incidunt eum quo et minus velit, eos deleniti distinctio aliquam alias placeat quis vel porro obcaecati consequatur sapiente nobis. Animi, blanditiis reiciendis possimus consequatur quisquam dolorem sed!
                    Excepturi reiciendis dolorum veritatis, quisquam asperiores cum molestiae ab vitae magnam quibusdam ipsam, amet odio voluptatum libero! Libero reiciendis, magnam soluta architecto aut, delectus assumenda ea repellendus vero doloribus eaque.
                </p>
                <h1 className='text-center underline underline-offset-4 lg:text-xl'>Benifits</h1>
                
                <div className=' flex justify-center pt-3'>
                    <u className=' list-disc no-underline' id={Style.benefitsUl}>
                        <li>You will get enough knoledges</li>
                        <li>Finding Jobs</li>
                        <li>Will improve teaching quality</li>
                        <li>Communication Skills</li>
                        <li>Strong Minded</li>
                    </u>
                </div>
                <div className='p-5 lg:pr-10 lg:pl-10'>
                    <span className=''>Note:</span>
                    <p className='max-sm:text-xs sm:text-sm md:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque, architecto deleniti quasi cumque rerum sint, quaerat incidunt veniam, consectetur vel neque. Sed pariatur nemo impedit voluptatem, expedita eveniet repudiandae.
                        Magnam reiciendis voluptate error dolore quas dolor, doloremque eum nesciunt deleniti optio quos illum consequuntur neque quae perspiciatis saepe enim et vel minus. Voluptate ad quisquam adipisci, ullam sit temporibus.
                        Porro quam illum voluptatum quos, vero ut dolorem pariatur omnis incidunt! At eaque adipisci laudantium placeat voluptate, consequatur consequuntur q.
                    </p>
                       
                </div>

                <div className=' flex justify-center w-full '>
                    <Link href={''}>
                        <button className=' bg-emerald-700 rounded-md text-white p-2 pr-10 pl-10'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}