'use client'
import Style from './signup.module.css';
import {useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function SignUp(){
    const router = useRouter()
    const[signupdata, setSignupData]=useState({name:"",fatherName:"",motherName:"",dateOfBirth:"",regNo:"",degOrClass:"",nid:"",mertialStaus:"",mobile:"",email:"",password:"",reTypepassword:"",country:"",present_address:{village:"",post:"",thana:"",district:"",postcode:""}, permanant_address:{village:"",post:"",thana:"",district:"",postcode:""},gender:"",image:"",policy:false});
    const[present_address,setPresenaddress]=useState({village:"",post:"",thana:"",district:"",postcode:""});
    const[permanat_address,setPermanataddress]=useState({village:"",post:"",thana:"",district:"",postcode:""});
  
    const onSignUpData = async(e:any)=>{
            e.preventDefault()
            signupdata.present_address.village = present_address.village;
            signupdata.present_address.post = present_address.post;
            signupdata.present_address.thana = present_address.thana;
            signupdata.present_address.district = present_address.district;
            signupdata.present_address.postcode = present_address.postcode;
            console.log(signupdata);
            try{
                if(signupdata.password == signupdata.reTypepassword){
                    await axios.post("/api/user/signup",signupdata)
                    router.refresh()
                    router.push("/")
                }else{
                    alert("retype password")
                }
            }catch(error:any){
                
                 throw new Error("File not sending")
            } 
            
    }


    const oncheckBox = (e:any)=>{
        if(e.target.checked == true){
            permanat_address.village = present_address.village;
            permanat_address.post = present_address.post;
            permanat_address.thana = present_address.thana;
            permanat_address.district = present_address.district;
            permanat_address.postcode = present_address.postcode;

            signupdata.permanant_address.village = present_address.village;
            signupdata.permanant_address.post = present_address.post;
            signupdata.permanant_address.thana = permanat_address.thana;
            signupdata.permanant_address.district = present_address.district;
            signupdata.permanant_address.postcode = present_address.postcode;

            router.refresh()
        }else{
            permanat_address.village = "";
            permanat_address.post = "";
            permanat_address.thana = "";
            permanat_address.district = "";
            permanat_address.postcode = "";



            signupdata.permanant_address.village = permanat_address.village;
            signupdata.permanant_address.post = permanat_address.post;
            signupdata.permanant_address.thana = permanat_address.thana;
            signupdata.permanant_address.district = permanat_address.district;
            signupdata.permanant_address.postcode = permanat_address.postcode;
            router.refresh()
            
        }
    }
    const onBase64Value = (e:any)=>{
        e.preventDefault()
        let reader:any = new FileReader;
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            setSignupData({...signupdata,image:reader.result})
        }
        reader.onerror = (error:any)=>{
            console.log("Error",error)
        }
        
       
    }

    return(
        <main id={Style.main} className=' flex items-center justify-center   text-black'>
            <div className='flex-col flex justify-center items-center  w-full'>
                <h1 className=' backdrop:filter backdrop-blur-3xl opacity-95 bg-zinc-860/100 rounded-md p-2 mt-4 mb-4 border'>Please Fill This Resistration Page</h1>
                <form className=' backdrop:filter backdrop-blur-3xl opacity-95 bg-zinc-860/100 border  rounded-md max-sm:p-8 p-10 flex flex-col justify-center gap-5 max-sm:gap-4 max-sm:text-xs'> 
                    <span className=' flex items-center  w-96  max-sm:w-72 justify-between'>
                        <label htmlFor='userName'>Full Name:</label>
                        <input
                        type='text'
                        placeholder='Full Name'
                        className=' h-10 pl-2 rounded-sm max-sm:h-9'
                        value={signupdata.name}
                        onChange={(e)=>setSignupData({...signupdata,name:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96  justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Father&#39;s Name:</label>
                        <input
                        type='text'
                        placeholder="Father's Name"
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.fatherName}
                        onChange={(e)=>setSignupData({...signupdata,fatherName:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Mother&#39;s Name:</label>
                        <input
                        type='text'
                        placeholder="Mother's Name"
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.motherName}
                        onChange={(e)=>setSignupData({...signupdata,motherName:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Date of birth:</label>
                        <input
                        type='date'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.dateOfBirth}
                        onChange={(e)=>setSignupData({...signupdata,dateOfBirth:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Birth Reg. No:</label>
                        <input
                        type='number'
                        placeholder='Birth Reg. No'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.regNo}
                        onChange={(e)=>setSignupData({...signupdata,regNo:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Degree or Class:</label>
                        <select className=' h-9 w-36' name='degree' value={signupdata.degOrClass} onChange={(e)=>setSignupData({...signupdata,degOrClass:e.target.value})}>
                            <option value={""}>Select Courses</option>
                            <option value={"MA"}>M.A</option>
                            <option value={"HSC"}>HSC</option>
                            <option value={"SSC"}>SSC</option>
                            <option value={"JSC"}>JSC</option>
                            <option value={"PSC"}>PSC</option>
                        </select>
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Nid No (optional):</label>
                        <input
                        type='number'
                        placeholder='NID No'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.nid}
                        onChange={(e)=>setSignupData({...signupdata,nid:e.target.value})}
                        />
                    </span>

                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>

                        <label htmlFor='userName'>Mertial Status:</label>
                        <span className=' flex  w-48 items-center justify-between'>
                            <span className=' flex items-center gap-3'>
                                <span>single</span>
                                <span><input type='radio' value={"single"} name='mertialStaus' onChange={(e)=>setSignupData({...signupdata,mertialStaus:e.target.value})}/></span>
                            </span>

                            <span className=' flex items-center gap-3'>
                                <span>married</span>
                                <span><input type='radio' value={"married"} name='mertialStaus' onChange={(e)=>setSignupData({...signupdata,mertialStaus:e.target.value})}/></span>
                            </span>
                        </span>
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Mobile:</label>
                        <input
                        type='number'
                        placeholder='Mobile No'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.mobile}
                        onChange={(e)=>setSignupData({...signupdata,mobile:e.target.value})}
                        />
                    </span>
                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Email:</label>
                        <input
                        type='email'
                        placeholder='Email'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.email}
                        onChange={(e)=>setSignupData({...signupdata,email:e.target.value})}
                        />
                    </span>



                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Password:</label>
                        <input
                        type='password'
                        placeholder='Password'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.password}
                        onChange={(e)=>setSignupData({...signupdata,password:e.target.value})}
                        />
                    </span>

                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Re-Type Password:</label>
                        <input
                        type='password'
                        placeholder='Re-Type Password'
                        className=' h-10 pl-2 rounded-sm'
                        value={signupdata.reTypepassword}
                        onChange={(e)=>setSignupData({...signupdata,reTypepassword:e.target.value})}
                        />
                    </span>




                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label  htmlFor='userName'>Country:</label>
                        <select id="country" name="country " className=' w-48 h-9'
                        
                         value={signupdata.country}
                        onChange={(e)=>setSignupData({...signupdata,country:e.target.value})}
                        
                        >
                            <option value="">Select Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D&#39;ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People&#39;s Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People&#39;s Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </span>
                    <div className=' border flex justify-between text-nowrap max-sm:flex-col'>




                        <div className=' w-full p-5'>
                            <h1 className=' text-center text-xl pb-5'>Present Address</h1>
                            <div className=' flex items-center justify-center flex-col gap-2 '>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Village:</span><span><input type='address' placeholder='village' className=' pl-2 w-32 rounded-sm' value={present_address.village} onChange={(e)=>setPresenaddress({...present_address,village:e.target.value})}/> </span></span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Post:</span><span><input type='address' placeholder='Post Office' className=' pl-2 w-32 rounded-sm' value={present_address.post} onChange={(e)=>setPresenaddress({...present_address,post:e.target.value})}/></span></span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'>
                                        
                                        <span>Thana:</span>
                                        <span>
                                            <select name='thana' value={present_address.thana} onChange={(e)=>setPresenaddress({...present_address,thana:e.target.value})}>
                                                <option value={""}>Select Thana</option>
                                                <option value={"Manirampur"}>Manirampur</option>
                                                <option value={"Keshobpur"}>Keshobpur</option>
                                                <option value={"Balia_Danga"}>Balia Danga</option>
                                            </select>
                                        </span>
                                </span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'>
                                    <span>District:</span>
                                    <span>
                                            <select name='district' value={present_address.district} onChange={(e)=>setPresenaddress({...present_address,district:e.target.value})}>
                                                <option value={""}>Select District</option>
                                                <option value={"Khulna"}>Khulna</option>
                                                <option value={"Jessore"}>Jessore</option>
                                                <option value={"Narail"}>Narail</option>
                                                <option value={"Bagerha"}>Bagerha</option>
                                                <option value={"Magura"}>Magura</option>
                                                <option value={"Jhenaidah"}>Jhenaidah</option>
                                                <option value={"Kushtia"}>Kushtia</option>
                                                <option value={"Chuadanga"}>Chuadanga</option>
                                                <option value={"Satkhira"}>Satkhira</option>
                                                <option value={"Meherpur"}>Meherpur</option>
                                            </select>
                                        </span>
                                </span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Post Code:</span><span><input type='number' placeholder='Post Code' className=' pl-2 w-32 rounded-sm' value={present_address.postcode} onChange={(e)=>setPresenaddress({...present_address,postcode:e.target.value})}/></span></span>
                            </div>
                        </div>


                        <div className=' border w-full p-5'>
                            <h1 className=' text-center text-xl pb-5'><span>Parmanent Address</span> <span> <input id='parmanentChecbox' type='checkbox' name="test" onClick={oncheckBox}/> </span></h1>
                            
                            <div id='permanantAddress' className=' flex items-center justify-center flex-col gap-2'>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Village:</span><span><input type='address' placeholder='village' className=' pl-2 w-32 rounded-sm' value={permanat_address.village} onChange={(e)=>setPermanataddress({...permanat_address,village:e.target.value})}/></span></span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Post:</span><span><input type='address' placeholder='Post Office' className=' pl-2 w-32 rounded-sm' value={permanat_address.post} onChange={(e)=>setPermanataddress({...permanat_address,post:e.target.value})}/></span></span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'> 
                                        <span>Thana:</span>
                                        <span>
                                            <select name='thana' value={permanat_address.thana} onChange={(e)=>setPermanataddress({...permanat_address,thana:e.target.value})}>
                                                <option value={""}>Select Thana</option>
                                                <option value={"Manirampur"}>Manirampur</option>
                                                <option value={"Keshobpur"}>Keshobpur</option>
                                                <option value={"Balia Danga"}>Balia Danga</option>
                                            </select>
                                        </span>
                                </span>
                                </span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'>
                                        
                                        <span>District:</span>
                                        <span>
                                        <select name='district' value={permanat_address.district} onChange={(e)=>setPermanataddress({...permanat_address,district:e.target.value})}>
                                                <option value={""}>Select District</option>
                                                <option value={"Khulna"}>Khulna</option>
                                                <option value={"Jessore"}>Jessore</option>
                                                <option value={"Narail"}>Narail</option>
                                                <option value={"Bagerha"}>Bagerha</option>
                                                <option value={"Magura"}>Magura</option>
                                                <option value={"Jhenaidah"}>Jhenaidah</option>
                                                <option value={"Kushtia"}>Kushtia</option>
                                                <option value={"Chuadanga"}>Chuadanga</option>
                                                <option value={"Satkhira"}>Satkhira</option>
                                                <option value={"Meherpur"}>Meherpur</option>
                                            </select>
                                        </span>
                                </span>
                                </span>
                                <span className=' flex gap-2 text-base w-full items-center justify-between'><span>Post Code:</span><span><input type='number' placeholder='Post Code' className=' pl-2 w-32 rounded-sm' value={permanat_address.postcode} onChange={(e)=>setPermanataddress({...permanat_address,postcode:e.target.value})}/></span></span>
                            </div>
                        </div>


                    </div>

                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName'>Gender:</label>
                        <span className=' flex  w-48 items-center justify-between'>
                            <span className=' flex items-center gap-3'>
                                <span>Male</span>
                                <span><input type='radio' value={"male"} name='gender' onChange={(e)=>setSignupData({...signupdata,gender:e.target.value})}/></span>
                            </span>
                            <span className=' flex items-center gap-3'>
                                <span>female</span>
                                <span><input type='radio' value={"female"} name='gender' onChange={(e)=>setSignupData({...signupdata,gender:e.target.value})}/></span>
                            </span>
                            
                        </span>
                    </span>


                    <span className=' flex items-center  w-96 justify-between max-sm:w-72'>
                        <label htmlFor='userName' className=' pr-10'>Photos:</label>
                        <input
                        type='file'
                        accept='image/*'
                        name='myfile'
                        onChange={onBase64Value}
                        className=' border bg-white'
                        />
                        <span>
                            <img
                                src={signupdata.image}
                                alt='upload_image'
                                height={100}
                                width={100}
                                className=' pl-5'                     
                            />
                        </span>
                    </span>

                    <span className=' flex items-center justify-between  max-sm:w-72 text-nowrap'>
                        <div className=' flex items-center gap-4'>
                            <input
                            type='checkbox'
                            placeholder='User Name'
                            className=' h-10 pl-2 rounded-sm'
                            onChange={(e)=>setSignupData({...signupdata,policy:e.target.checked})}
                            />
                            <label htmlFor='userName'>Policy:</label>
                        </div>
                        <p>The policy you are reading is <br className=' sm:hidden'/> totaly agree with us</p>

                    </span>
                    <button onClick={onSignUpData} className=' border h-10 rounded-md hover:bg-slate-800 active:bg-black'>Resistration</button>
                </form>
            </div>
        </main>
    )
}