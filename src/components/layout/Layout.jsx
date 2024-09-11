import {Outlet} from 'react-router-dom';
import Footer from '../shared/Footer';
export default function Layout(){
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
}