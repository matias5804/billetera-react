import "./styles/modal.css"

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();

  return (
    <article className={`modall ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modall-container" onClick={handleModalContainerClick}>
            {children }
        </div>
    </article>
  )
}

export default Modal