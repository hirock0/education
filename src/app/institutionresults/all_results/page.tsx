'use client'
import Style from './allResult.module.css'
import { useRouter } from 'next/navigation'

export default function AllResults(){

    const router = useRouter()


    const SubmitBtn = async(e:any)=>{
        e.preventDefault()
        router.push("/institutionresults/all_results/kjjj")
    }

    return(
        <main className=" text-black bg-slate-500 min-h-screen flex pr-20 pl-20  justify-center ">

            <div className=" border h-full max-sm:w-96 mt-10 flex flex-col items-center p-5">
                <div className=" border w-full h-20">
                    df
                </div>
                <div id={Style.resultInfo} className="border w-full h-96 mt-5 p-5" >
                    <form>
                    <ul className=" flex flex-col gap-4">
                        <li className=" flex gap-5 max-sm:text-xs items-center justify-between"><span>Examination :</span><span>
                            <select className=" rounded-sm h-6 text-xs w-40 sm:w-60">
                                <option value={"HSC/Alim/Equivalent"}>HSC/Alim/Equivalent</option>
                                <option value={"JSC/JDC"}>JSC/JDC</option>
                                <option value={"SSC/Dakhil"}>SSC/Dakhil</option>
                                <option value={"SSC(Vocational)"}>SSC(Vocational)</option>
                                <option value={"HSC/Alim"}>HSC/Alim</option>
                                <option value={"HSC(Vocational)"}>HSC(Vocational)</option>
                                <option value={"HSC/BM"}>HSC/BM</option>
                                <option value={"Degree"}>Degree</option>
                            </select></span>
                        </li>


                        <li className=" flex gap-5 max-sm:text-xs items-center justify-between"><span>Year :</span><span>
                            <select className=" rounded-sm h-6 text-xs w-40 sm:w-60">
                                <option value={""}>Select One</option>
                                <option value={"2024"}>2024</option>
                                <option value={"2023"}>2023</option>
                                <option value={"2022"}>2022</option>
                                <option value={"2021"}>2021</option>
                                <option value={"2020"}>2020</option>
                                <option value={"2019"}>2019</option>
                                <option value={"2018"}>2018</option>
                                <option value={"2017"}>2017</option>
                                <option value={"2016"}>2016</option>
                                <option value={"2015"}>2015</option>
                                <option value={"2014"}>2014</option>
                                <option value={"2013"}>2013</option>
                                <option value={"2012"}>2012</option>
                                <option value={"2011"}>2011</option>
                                <option value={"2010"}>2010</option>
                                <option value={"2009"}>2009</option>
                                <option value={"2008"}>2008</option>
                                <option value={"2007"}>2007</option>
                                <option value={"2006"}>2006</option>
                                <option value={"2005"}>2005</option>
                                <option value={"2004"}>2004</option>
                                <option value={"2003"}>2003</option>
                                <option value={"2002"}>2002</option>
                                <option value={"2001"}>2001</option>
                                <option value={"2000"}>2000</option>
                                <option value={"1999"}>1999</option>
                                <option value={"1998"}>1998</option>
                            </select></span>
                        </li>


                        <li className=" flex gap-5 max-sm:text-xs items-center justify-between"><span>Board :</span><span>
                            <select className=" rounded-sm h-6 text-xs w-40 sm:w-60">
                                <option value={""}>Select One</option>
                                <option value={"Barisal"}>Barisal</option>
                                <option value={"Comilla"}>Comilla</option>
                                <option value={"Dhaka"}>Dhaka</option>
                                <option value={"Dinajpur"}>Dinajpur</option>
                                <option value={"Jessore"}>Jessore</option>
                                <option value={"Mymensingh"}>Mymensingh</option>
                                <option value={"Rajshahi"}>Rajshahi</option>
                                <option value={"Sylhet"}>Sylhet</option>
                                <option value={"Madrasah"}>Madrasah</option>
                                <option value={"Technical"}>Technical</option>
                                <option value={"DIBS(Dhaka)"}>DIBS(Dhaka)</option>
                            </select></span>
                        </li>
                        <li className=" flex gap-5 max-sm:text-xs items-center justify-between">
                            <span>Roll :</span>
                            <input type="number" className=" rounded-sm h-6 text-xs w-40 sm:w-60"/>
                        </li>
                        <li className=" flex gap-5 max-sm:text-xs items-center justify-between">
                            <span> Reg: No : </span>
                            <input type="number" className=" rounded-sm h-6 text-xs w-40 sm:w-60"/>
                        </li>
                    </ul>

                    <div className='  flex justify-end gap-3 max-sm:text-sm mt-3'>
                        <button className=' border rounded-md p-1'>Reset</button>
                        <button onClick={SubmitBtn} className=' border rounded-md p-1'>Submit</button>
                    </div>
                    </form>
                </div>
                <div className="border w-full h-32 mt-5">
                    btm
                </div>
            </div>
        </main>

    )
}