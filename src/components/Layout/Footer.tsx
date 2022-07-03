import { FunctionComponent } from "react";

const Footer : FunctionComponent =()=> {
    const year = new Date().getFullYear();
    return(
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
                <p>Copyright © {year} - All right reserved by Tsukuruhito</p>
            </div>
        </footer>
    )
}

export default Footer