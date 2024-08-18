import type { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer text-base-content absolute inline-block bottom-0 right-0 w-auto p-2 dark:text-white">
      <p>Copyright © {year} - All right reserved by Tsuku</p>
    </div>
  );
};

export default Footer;
