import { useState } from "react";

const ToggleBtn = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <button onClick={toggle}>
            {open? "OPEN" : "CLOSE"}
        </button>
    )
}

export default ToggleBtn;