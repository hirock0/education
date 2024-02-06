
'use client'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Style from './science.module.css'

export default function ScienceTeachers(){
    return(
        <main className='pl-5 pr-5 pt-5' id={Style.main}>
            <div className=''>
                <h1 className=' underline underline-offset-4 text-xl'>Science Teachers:</h1>
                <p className=' max-sm:text-xs sm:text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima sunt, quasi assumenda necessitatibus aspernatur! Itaque beatae voluptates eveniet expedita dolor distinctio nihil sequi nostrum. Corporis minus assumenda dicta fuga.
                    Magni omnis sint excepturi voluptatem non dignissimos ipsam, doloribus, unde similique id aliquid molestias illo, debitis enim dicta facilis molestiae sapiente. Quidem facere necessitatibus qui pariatur quibusdam corrupti officia inventore.
                    Sunt cumque, omnis deleniti eligendi hic cupiditate beatae odit a itaque quis minima magnam tenetur officiis quia molestiae eum quidem doloribus asperiores aut est ipsa adipisci, blanditiis incidunt! Debitis, sapiente?
                    Perferendis itaque est exercitationem. Natus iusto rerum placeat tenetur accusamus vero adipisci eaque nemo, quaerat velit voluptatibus exercitationem ab totam libero saepe dolorum voluptatem quae perferendis, minus veritatis illum? Deserunt.
                    Perspiciatis ex dignissimos quae aliquam, sunt ipsam vel est magni modi velit ducimus exercitationem deleniti omnis, distinctio in ea corporis laudantium aut esse nihil cumque voluptate. Perspiciatis debitis delectus fugiat.
                </p>
                <h1 className=' text-center pt-5 underline underline-offset-4 sm:text-xl '>Teachers List</h1>
                
                <div className=' '>
                <TableContainer className='lg:pl-48 sm:pl-16 md:pl-20 max-sm:p-0'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className=' text-base font-semibold'>Teacher Name</TableCell>
                                    <TableCell className=' text-base font-semibold'>Post</TableCell>
                                    <TableCell className=' text-base font-semibold'>Subjects</TableCell>
                                    <TableCell className=' text-base font-semibold'>Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Ragav</TableCell>
                                    <TableCell>Principle</TableCell>
                                    <TableCell>Offical</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>MD.Rahaman</TableCell>
                                    <TableCell>Lecturer</TableCell>
                                    <TableCell>Physics</TableCell>
                                    <TableCell>10:00am - 1:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Panday</TableCell>
                                    <TableCell>Lecturer</TableCell>
                                    <TableCell>Chemisrty</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Devnath Mallick</TableCell>
                                    <TableCell>Asstance Teacher</TableCell>
                                    <TableCell>Math</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Kollol Mallick</TableCell>
                                    <TableCell>Lecturer</TableCell>
                                    <TableCell>Physics</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Jeet Sarker</TableCell>
                                    <TableCell>Lecturer</TableCell>
                                    <TableCell>Biology</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Md:Kahek</TableCell>
                                    <TableCell>Lecturer</TableCell>
                                    <TableCell>Higher Math</TableCell>
                                    <TableCell>9:00am - 2:00pm</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </main>
    )
}