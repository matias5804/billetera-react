import { useState } from 'react'

export const useModal = (initialValue = false) => {

    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal];
}

//el hook personalizado me devuelve 3 cosas: a) la variable de estado para saber si esta abierto(isOpen),  b) el metodo que abre(openModal),  c) el metodo que cierra(closeModal)
