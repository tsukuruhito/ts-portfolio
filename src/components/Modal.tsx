type ModalProps = {
    children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
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
