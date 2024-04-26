"use client"
import Header from "./components/common/header/header"
import Footer from "./components/common/footer/footer"

const mainLayout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}
export default mainLayout;