'use client'

import { useState } from "react";

type ModalProps = {
    children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <form method="dialog">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=>{
                            setIsOpen(isOpen=> !isOpen)
                        }}
                    >
                        ✕
                    </button>
                </form>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;
