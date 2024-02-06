
import Style from './sports.module.css'
import Image from 'next/image'

export default function SportsCornerPage(){
    return(
        <main className=' pl-5 pr-5 pt-5' id={Style.main}>
            <div>
                <h1 className=' text-center font-semibold text-xl underline underline-offset-4'>Sports</h1>
                <p className=' max-sm: text-xs sm:text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquid? Accusamus quod, tempore minus earum, nisi nulla mollitia corporis error quia consequatur ratione voluptas fugiat autem explicabo architecto quas doloribus?
                    Dolorem, unde numquam eius quod sunt quis consectetur aspernatur maiores officiis, sequi minus provident, tempore similique animi temporibus cumque. Maxime at optio ipsum sunt fuga fugit facere voluptate voluptatem consequatur.
                    Voluptatem rerum ratione voluptate modi suscipit. Architecto adipisci odit repellat, ea perspiciatis velit voluptatibus harum veniam quibusdam, quasi, quod ipsa voluptate voluptatem temporibus quas odio! Corrupti inventore aut nulla excepturi.
                    Ex, illum fugiat? Dolorum odit similique optio est. Iure perspiciatis, culpa voluptates magni sapiente cumque? Praesentium autem incidunt, temporibus sed dolor odit obcaecati tempora cupiditate nulla officiis! Rerum, placeat eveniet!
                    Pariatur accusamus ipsa dicta dolores earum voluptatum sunt blanditiis impedit quas, explicabo ratione necessitatibus nisi minus cupiditate asperiores quam facilis, aliquid porro nesciunt, fugiat iure saepe. Adipisci consequatur perspiciatis provident!
                </p>
                <h1 className=' pt-3 pb-3 text-center text-xl underline underline-offset-4'>Category</h1>
                <ul id={Style.Ul} className=' list-disc w-full flex flex-col gap-7'>
                    <li><span>Cricket</span><span><Image src={'https://cdn.pixabay.com/photo/2022/02/16/04/15/cricketer-7015983_1280.jpg'} alt='cricket' height={100} width={100}></Image></span></li>
                    <li><span>Football</span><span><Image src={'https://cdn.pixabay.com/photo/2023/02/25/12/30/man-7813108_1280.jpg'} alt='football' height={100} width={100}></Image></span></li>
                    <li><span>Volleyball</span><span><Image src={'https://cdn.pixabay.com/photo/2016/01/28/07/52/volleyball-1165916_1280.jpg'} alt='volleyball' height={100} width={100}></Image></span></li>
                    <li><span>Chess</span><span><Image src={'https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_1280.jpg'} alt='chess' height={100} width={100}></Image></span></li>
                    <li><span>Hockey</span><span><Image src={'https://cdn.pixabay.com/photo/2019/08/03/06/38/ice-hockey-4381206_1280.jpg'} alt='hockey' height={100} width={100}></Image></span></li>
                    <li><span>Badminton</span><span><Image src={'https://cdn.pixabay.com/photo/2019/04/19/10/13/badminton-4139024_1280.jpg'} alt='badminton' height={100} width={100}></Image></span></li>
                    <li><span>BasketBall</span><span><Image src={'https://cdn.pixabay.com/photo/2017/04/25/05/44/basketball-2258650_1280.jpg'} alt='basketball' height={100} width={100}></Image></span></li>
                </ul>
            </div>
        </main>
    )
}