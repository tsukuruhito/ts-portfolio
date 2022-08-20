import { useAtom } from "jotai";
import { FunctionComponent } from "react";
import { sceneAtom } from "../../atom";

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();

  const [scene] = useAtom(sceneAtom);
  return (
    <>
      {!scene && (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content dark:bg-zinc-600 dark:text-slate-100">
          <div>
            <p>Copyright © {year} - All right reserved by Tsuku</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
