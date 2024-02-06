'use client'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Style from './ourEdu.module.css'
import Link from 'next/link'
export default function OurEducations(){
    return(
        <main id={Style.main} className=" text-black pl-5 pr-5 pt-5">
            <div className=' max-sm:text-xs sm:text-sm md:text-base'>
                <h1 className=' underline underline-offset-4 text-center font-semibold text-xl'>Our Educations</h1>
                <p className=' pt-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem autem distinctio non quasi rerum necessitatibus illum et facere voluptates veritatis animi minus tenetur, atque obcaecati doloribus quidem, ratione maiores laboriosam.
                    Odit, quos doloribus fugit minima sint dolores assumenda obcaecati exercitationem numquam itaque tempore. Ipsum laboriosam in beatae corrupti, maxime minima impedit aspernatur iure, perferendis commodi possimus ab vero reiciendis rem.
                    Repellat voluptates earum necessitatibus, recusandae quam placeat ullam. Impedit, explicabo ipsam fugiat blanditiis quia itaque culpa delectus. Voluptates laudantium dignissimos itaque qui, fuga vel laboriosam, ex consequuntur nesciunt quasi exercitationem!
                    Non quas doloremque cumque vel pariatur? Blanditiis fugiat id sapiente dignissimos officiis beatae eum eius repudiandae ab! Incidunt est quasi eum. Reiciendis facilis, perferendis quisquam assumenda sequi debitis. Placeat, at.
                    Culpa repudiandae corrupti error, neque, porro aperiam possimus, sapiente commodi in iste aspernatur autem. Quos reprehenderit vitae ipsum temporibus, consectetur dolores dolor? Odio quidem repellat, animi libero ex voluptates numquam.
                </p>
                <h1 className=' text-center pt-5 pb-5 text-xl underline underline-offset-4'>Coures</h1>
                <TableContainer className=' border'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Course Name</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Course Fee</TableCell>
                                <TableCell>Tution Fee</TableCell>
                                <TableCell>Hostel Fee</TableCell>
                                <TableCell>Apply</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>M.A</TableCell>
                                <TableCell>4 year</TableCell>
                                <TableCell>10,0000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1500 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>HSC</TableCell>
                                <TableCell>2 year</TableCell>
                                <TableCell>10,0000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1500 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>JSC</TableCell>
                                <TableCell>2 year</TableCell>
                                <TableCell>10,0000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1500 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>SSC</TableCell>
                                <TableCell>2 year</TableCell>
                                <TableCell>10,0000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1500 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>JSC</TableCell>
                                <TableCell>2 year</TableCell>
                                <TableCell>10,0000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1500 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>PSC</TableCell>
                                <TableCell>2 year</TableCell>
                                <TableCell>10,000 tk</TableCell>
                                <TableCell>Free</TableCell>
                                <TableCell>1000 tk</TableCell>
                                <TableCell><Link href={''}><button className=' bg-green-600 p-1 pr-2 pl-2 rounded-md text-white hover:bg-green-800 active:bg-green-950'>Click</button></Link></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <p className=' pb-10'>
                    <span className=' font-semibold '>Note:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, reiciendis at voluptatum molestiae quibusdam ea accusamus expedita debitis error aliquam alias quisquam unde doloremque similique, eaque, laborum qui incidunt! Consectetur.
                    inima sit consequuntur similique, repellat odio necessitatibus, amet omnis provident incidunt dolorem nobis perferendis iure a! Eius in temporibus mollitia, illum eligendi eveniet.
                    Consequatur ut distinctio doloribus nemo ex consequuntur hic rerum aspernatur eaque quibusdam architecto blanditiis necessitatibus pariatur, molestias officiis quaerat, quia enim natus vel! Explicabo placeat laboriosam, tempore magni sunt eum.
                </p>
            </div>
        </main>
    )
}