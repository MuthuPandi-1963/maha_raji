import navItems from './datas/navItems'
import {Link} from 'react-router-dom'
export default function Navbar() {
    
    return(
        <>
        <ul className='flex items-center justify-center gap-x-10  py-2 bg-amber-200'>
            {
                navItems.map((value,id)=>(
                    <li key={id}>
                        <Link to={value.ulrLink}>{value.name}</Link>
                    </li>
                )
                )
            }
        </ul>
        </>
    )
}