
import Side_menu from "@/components/hamberger_menu_list/menuList";
import AboutUs from "@/components/navBar/aboutUs/about";
import Contact from "@/components/navBar/contactUs/contact";
import CoursePage from "@/components/navBar/courses/course";
import Nav from "@/components/navBar/homeNav";
import Students from "@/components/navBar/students/student";
import Teachers from "@/components/navBar/teachers/teacher";
import RightSideNav from "@/components/rightsideNav/rightNav";
import RightNavArrow from "@/components/rightsideNav/right_side_nav-arrow/arrow";
import AboutUs_side from "@/components/rightsideNav/side_aboutUs/about";
import Contact_side from "@/components/rightsideNav/side_contactUs/contact";
import CoresePage_side from "@/components/rightsideNav/side_courses/course";
import Students_side from "@/components/rightsideNav/side_students/student";
import Teachers_side from "@/components/rightsideNav/side_teachers/teacher";
import Link from "next/link";
import Slider from "@/components/HomePage_Components/Slider/page";
import AnnounceMent from "@/components/HomePage_Components/announcement/Announcement";
import Image from "next/image";
export default function Home(){
  return(
    <main id="home_page" className=" h-full w-full">
              <div className="flex items-center justify-start w-full">
                  <Nav/>
              </div>
              
              <div id="Side_menu_list">
                <Side_menu/>
              </div>

                <div id="rightNavArrow" className=" fixed right-0 w-28 flex items-center justify-center cursor-pointer z-50">
                  <RightNavArrow/>
                </div>

                <div id="Right_nav_List" className=" z-50 fixed right-0 top-28 w-28">
                  <RightSideNav/>
                </div>
        
              <div id="navHoverDiv" className=" fixed z-50 top-24 w-full items-center justify-around flex">
                <div><CoursePage/></div>
                <div><Students/></div>
                <div><Teachers/></div>
                <div><AboutUs/></div>
                <div><Contact/></div>
              </div>

              <div id="Side-Nav" className=" z-50 fixed top-20 right-32">
                <CoresePage_side/>
                <Students_side/>
                <Teachers_side/>
                <AboutUs_side/>
                <Contact_side/>
              </div>

      



        <div id="page_1" className="flex flex-col justify-center items-center pt-24">
              <div id="inside_page_1" className="  min-h-screen relative container ">
                  <h1 className=" w-full text-2xl max-sm: pb-8 text-center pt-5">Please  Send Your Childs School</h1>
                  <div className=" flex justify-between h-full ">
                    <div className=" w-full">
                      <h1 className=" w-full text-center">Our School Raputaions</h1>
                        
                        <div className=" h-52 mt-5 max-sm:mt-5 flex flex-col items-center justify-center">
                          <div id="awardDiv" className=" rounded-md lg:p-5 lg:pl-10 lg:pr-10 sm:p-3  max-sm:p-3 max-sm:pr-1 max-sm:pl-1">
                              <h1 className=" text-center pb-2 underline underline-offset-4 font-semibold">Awards</h1>
                              <ul id="awardDiskUl" className=" lg:list-disc font-thin flex flex-col gap-2 max-sm:list-none sm:list-none">
                                <Link href={''}><li>Prime minister award 2023</li></Link>
                                <Link href={''}><li>National award 2015</li></Link>
                                <Link href={''}><li>B.S.C award 2001</li></Link>
                                <Link href={''}><li>Best Edu award 1998</li></Link>
                                <Link href={''}><li>Mujib award 1996</li></Link>
                              </ul>
                          </div> 
                        </div>
                        <div className=" h-52 sm:mt-10 lg:mt-10 flex flex-col items-center justify-center">
                          <div id="awardDiv" className="rounded-md lg:p-5 lg:pl-10 lg:pr-10 sm:p-3  max-sm:p-3 max-sm:pr-1 max-sm:pl-1">
                              <h1 className=" text-center pb-2 underline underline-offset-4 font-semibold">Achievments</h1>
                              <ul id="awardDiskUl" className=" lg:list-disc font-thin flex flex-col gap-2 max-sm:list-none sm:list-none">
                                <Link href={''}><li>Passing Rate 99%</li></Link>
                                <Link href={''}><li>Global Ranking 8</li></Link>
                                <Link href={''}><li>Strong Commity</li></Link>
                                <Link href={''}><li>Best Teacher Pannel</li></Link>
                                <Link href={''}><li>Beautiful Buildings</li></Link>
                              </ul>
                          </div> 
                        </div>


                    </div>

                    <div className=" w-full">
                      <h1 className=" text-center">School Rivew</h1>
                      <p className=" max-sm:text-xs p-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore veniam deserunt voluptatibus nobis unde aliquid facilis sint? Distinctio impedit iusto qui illo ipsum nulla, assumenda ut culpa animi dolore!
                        Corporis voluptatem nam voluptatum soluta accusantum vel. Repudiandae id necessitatibus, eveniet fugiat incidunt quis ducimus voluptates officia voluptatibus est placeat!
                      </p>
                      <div id="image_div" className=" relative h-48 flex items-center">
                        <div className=" flex justify-center items-center w-full">
                            <Slider/>
                        </div>
                      </div>
                     
                    </div>
                    
                  </div>
                  <div className=" w-full flex flex-col justify-center items-centerh-56 sm:mt-5">
                    <h1 className=" text-center">Annucement</h1>
                    
                    <div className=" flex justify-center">
                      <AnnounceMent/>
                    </div>
                    
                  </div>
              </div>
              
        </div>



        

        <div id="page_2" className=" min-h-screen">
              <div id="inside_page_1" className=" relative  ">
                  <h1 className=" w-full sm:text-2xl max-sm:text-xl underline underline-offset-8 font-semibold text-center">Result Corner</h1>
                  <div className="">       
                      <div className=" flex justify-between pr-20 pl-20">
                            <ul className=" pt-2 list-disc list-inside max-sm:text-xs sm:text-xs md:text-sm flex flex-col gap-2 select-none">
                            <h1 className=" sm:text-xl font-thin ">Boardwise Result</h1>
                              <Link href={'https://eboardresults.com/bn/ebr.app/home/'}><li>SSC RESULT</li></Link>
                              <Link href={'http://www.educationboardresults.gov.bd/'}><li>HSC RESULT</li></Link>
                              <Link href={'http://results.nu.ac.bd/'}><li>DEGREE RESULT</li></Link>
                            </ul>
                            <ul className=" pt-2 list-disc list-inside max-sm:text-xs sm:text-xs md:text-sm flex flex-col gap-2 select-none">
                            <h1 className=" sm:text-xl font-thin ">Institutionwise Result</h1>
                              <Link href={'/institutionresults/all_results'}><li>Result</li></Link>
                            </ul>
                      </div>

                  </div>
              </div>


              <div className="  w-full h-full">
                  <div id="btmLine" className="bg-white mt-5 mb-5"></div>
                  
                  
                  <div className=" flex justify-between pr-10 pl-10 max-sm:flex-col">
                    <div className=" w-52 max-sm:w-full">
                      <h1 className=" text-xl">Students</h1>
                      <p className=" pt-2 max-sm:text-xs sm:text-sm">
                        Lorem pisicing elit. Repellendus nobis excepturi possimus accusantium temporibus atque assumenda placeat illo! Omnis aperiam ipsum nihil asperiores porro explicabo perspiciatis quibusdam libero consequuntur nulla!
                      </p>
                    </div>


                    <div>
                      <h1 className=" text-xl max-sm:pt-5">Discover</h1>
                      <ul className=" pt-2 max-sm:pt-0  max-sm:text-xs">
                        <li>Science</li>
                        <li>Geography</li>
                        <li>Bangla</li>
                        <li>English</li>
                        <li>History</li>
                        <li>Mythology</li>
                      </ul>
                    </div>

                    
                    <div>
                      <h1 className=" text-xl max-sm:pt-5">Comminity</h1>
                      <ul className=" mt-2 max-sm:mt-0 max-sm:text-xs">
                        <li>Teachers</li>
                        <li>Guardian</li>
                        <li>Students</li>
                      </ul>
                    </div>


                    <div>
                      <h1 className=" text-xl max-sm:pt-5">About</h1>
                      <ul className="max-sm:pt-0 max-sm:text-xs">
                        <li>School</li>
                        <li>Teacher Pannel</li>
                        <li>School Pannel</li>
                        <li>Student Details</li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div id="btmLine" className="bg-white mt-5 mb-5"></div>
              <div>
                <ul className=" flex justify-around">
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/facebook-fill.svg"} alt="facebook" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">facebook</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/facebook-messenger.svg"} alt="massenger" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">massenger</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/whatsapp-fill.svg"} alt="whatsapp" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">whatsapp</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/twitter-fill.svg"} alt="twitter" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">twitter</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/instagram-line.svg"} alt="instagram" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">instagram</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/linkedin.svg"} alt="linkedin" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">linkedin</span></li></Link>
                  <Link href={""}><li className=" flex flex-col items-center gap-1"><Image src={"/all_svg/mail-line.svg"} alt="mail" height={20} width={20}/> <span className=" max-sm:text-xs sm:text-xs md:text-sm">mail</span></li></Link>
                </ul>
              </div>

              <div className=" mt-4">
                <h1 className=" text-center pb-2 md:text-xl">Policy</h1>
                <p className=" max-sm:text-xs max-sm:pr-5 max-sm:pl-5 sm:text-xs md:text-sm sm:pr-8 sm:pl-8 md:pr-10 md:pl-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit molestiae odit aut deleniti exercitationem quisquam, quia explicabo ipsam sunt commodi eos quidem quo non, nisi iure assumenda reiciendis maiores.
                  Eveniet at, quis incidunt nesciunt maxime aperiam laborum quas impedit laudantium eos officia quisquam ad natus corporis distinctio voluptatem culpa nulla veritatis molestias dolorem! Cum cupiditate facilis dignissimos aspernatur consectetur.
                  Omnis laudantium mollitia magni quasi ad totam voluptatem iste qui! Repellendus aspernatur numquam qui similique ipsam placeat minus autem neque, adipisci asperiores consectetur veniam eos quia doloribus quam, deserunt est?
                  Unde, facere inventore illo fugit odit neque minima, nihil dolores eius et expedita impedit voluptatum! Accusamus sed rem, consectetur veniam voluptatum, facere mollitia quam quibusdam eum numquam aliquam sequi! Iste.
                  Facere aliquid quibusdam deserunt possimus similique nesciunt voluptatem aperiam mollitia! Voluptatibus, dignissimos. Quasi in optio harum doloremque minus facilis illo. Odio, inventore enim ut quia magni vel quasi temporibus sequi.
                </p>
              </div>
        </div>

    </main>
  )
};