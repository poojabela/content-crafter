import Header from "./Header";
import Footer from "./Footer"

export const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Header />
            { children }
            <Footer />
        </div>
     );
}
 