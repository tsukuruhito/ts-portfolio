function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="text-base-content text-center p-2 dark:text-white">
            <p>Copyright © {year} - All right reserved by Tsuku</p>
        </div>
    );
}

export default Footer;
