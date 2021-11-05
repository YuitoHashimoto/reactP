import { useState, useEffect } from "react";

const ToggleBtn = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prevState => !prevState)
    }

    useEffect(() => {
        console.log("現在の公開状況 : ", open)
        if (open) {
            console.log("更新する")
        }
        return () => {
            console.log("更新終了")
        }
    })

    return (
        <button onClick={toggle}>
            {open ? "OPEN" : "CLOSE"}
        </button>
    )
}

export default ToggleBtn;