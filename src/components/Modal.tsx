'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ModalProps = {
    children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();
    return (
        <dialog
            id="my_modal_3"
            className={`modal ${
                isOpen && 'transition-all ease-in opacity-1 modal-open'
            }`}
            open={isOpen}
        >
            <div className="modal-box">
                <form method="dialog">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => {
                            setIsOpen((isOpen) => !isOpen);
                            router.back();
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
