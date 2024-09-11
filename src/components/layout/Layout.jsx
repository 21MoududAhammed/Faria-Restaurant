import {Outlet} from 'react-router-dom';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';
export default function Layout(){
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
}