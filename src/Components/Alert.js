import { useEffect, useRef } from 'react'

const Alert = ({ name, closeAlert }) => {
    const toastOut = useRef()
    const timerId = useRef()
    const ww = window.innerWidth
    useEffect(() => {
        if (name.length < 5) {
            toastOut.current = setTimeout(() => {
                document.querySelector('#toast-container').classList.add('close')
            }, 2800);
            timerId.current = setTimeout(closeAlert, 3000)
        } else {
            document.querySelector('#toast-container').classList.add('close')
            setTimeout(closeAlert, 200)
        }
        
        return () => {
            clearTimeout(toastOut.current)
            clearTimeout(timerId.current)
        }
        // eslint-disable-next-line
    }, [name])

    
    return (
        <div className="toast-block">
            {name.map((t, ind) => <div key={t.id} id="toast-container" style={{top: `${ww <= 400 ? ind * 80 : ind * 60}px`}}>
                    <div className="toast">{t.name} добавлен в корзину!</div>
                </div>
            )}
        </div>
    )
}

export default Alert
