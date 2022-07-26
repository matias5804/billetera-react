import { useRef } from "react";

const useForm = (data) => {

    const myRef = useRef()

    const submit = e => {
        e.preventDefault()
        console.log(myRef.current);
        console.log(data.value);
        alert("bienvenido")
    }

  return [data, myRef, submit]
}

export default useForm