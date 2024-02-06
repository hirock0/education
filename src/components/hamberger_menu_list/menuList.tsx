import Style from './menuList.module.css'


export default function Side_menu(){


    return(
        <div id={Style.main} className=' h-full backdrop:filter backdrop-blur-3xl opacity-95 bg-slate-800/80 w-52'>
            <ul id={Style.SideUl} className=' p-5 flex flex-col gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Catagory</li>
                <li>Contacts</li>
                <li>our reviwew</li>
            </ul>
        </div>
    )
}