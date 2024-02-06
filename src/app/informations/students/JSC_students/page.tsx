import Style from './jscstudents.module.css'
export default function JscStudentsPage(){
    return(
        <main id={Style.main} className=' pr-5 pl-5'>
            <h1 className=' underline underline-offset-4 text-center mt-5 lg:text-xl md:text-xl sm:text-xl'>JSC Students</h1>
            <h1 className=' md:text-xl pt-2'>Students:-</h1>
            <p className=' max-sm:text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero esse reiciendis repellendus impedit nulla. Quae esse aut blanditiis architecto explicabo quidem nemo maiores in minima, incidunt assumenda accusantium repellat!
                Laborum tenetur recusandae similique eaque quas odit, quia, maxime error itaque non, aspernatur nostrum voluptatibus molestiae. Culpa id, eaque esse quos ab non consectetur eligendi tempore ipsam accusamus, laudantium harum.
                Id, tempora esse libero quisquam aspernatur facere ab, itaque quam nam eveniet illum dicta eius cumque, neque natus accusamus ad repudiandae? Excepturi molestias?
            </p>
            <div className='  flex justify-center max-sm:flex-col max-sm:items-center gap-10  max-sm:gap-2 mt-5 text-white'>

                <div className='rounded-md bg-emerald-700 max-sm:h-32 h-52 w-52 flex flex-col justify-center items-center'>
                    There are <span className=' text-3xl text-orange-300'>(2K)</span>students in <br/>
                    in our college
                </div>

                <div className=' rounded-md bg-teal-700 max-sm:h-32 h-52 w-52 flex flex-col justify-center items-center'>
                    <p className=''>
                        This is our passing <br/> Rate is <span className=' text-3xl text-orange-300'>99%</span>
                    </p>
                </div>
                
            </div>
            <h1 className=' pt-5 text-center sm:text-xl underline underline-offset-4'>Students Rules</h1>
            <p className=' max-sm:text-xs pb-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur beatae eos voluptatem neque sit recusandae eveniet commodi quidem ducimus aut, magni earum ratione quaerat sunt id esse quae laboriosam! Voluptates.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi omnis earum odit repellat expedita laudantium aliquid deserunt quibusdam recusandae delectus sed esse, ipsa cupiditate obcaecati cumque eveniet similique ipsam reprehenderit.
            </p>
            <div className=' pl-5 flex justify-between pr-5 max-sm:text-sm pb-5'>
                <ul className=' list-decimal'>
                    <li>Weare College Dress</li>
                    <li>Have to fill monthly cost</li>
                    <li>Respects all senior</li>
                    <li>Have to obay Teachers</li>
                    <li>Do not any qurells</li>
                </ul>
                <div>
                    <h1 className=' sm:text-xl underline underline-offset-8'>Responsibilities</h1>
                    <ul className=' list-decimal'>
                        <li>Clean the school floor</li>
                        <li>Take care of younger</li>
                        <li>Teach to younger</li>
                        <li>Respect to the all Teachers</li>
                        <li>Decipiline to class room</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}