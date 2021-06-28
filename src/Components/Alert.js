import { useContext } from 'react'
import { ShopContext } from '../Context/context'
import { useEffect, useRef } from 'react'

const Alert = () => {
    const { alertName = [], closeAlert } = useContext(ShopContext)
    const toastOut = useRef()
    const timerId = useRef()
    const ww = window.innerWidth
    useEffect(() => {
        if (alertName.length < 5) {
            if (alertName.length > 2) {
            toastOut.current = setTimeout(() => {
                document.querySelector('#toast-container').classList.add('close')
            }, 1300);
            timerId.current = setTimeout(closeAlert, 1500)
            } else {
            toastOut.current = setTimeout(() => {
            document.querySelector('#toast-container').classList.add('close')
            }, 2800);
            timerId.current = setTimeout(closeAlert, 3000)
            }
            
        } else {
            document.querySelector('#toast-container').classList.add('close')
            setTimeout(closeAlert, 200)
        }
        
        return () => {
            clearTimeout(toastOut.current)
            clearTimeout(timerId.current)
        }
        // eslint-disable-next-line
    }, [alertName])

    
    return (
        <div className="toast-block">
            {alertName.map((t, ind) => <div key={t.id} id="toast-container" style={{top: `${ww <= 400 ? ind * 80 : ind * 60}px`}}>
                    <div className="toast">{t.name} добавлен в корзину!</div>
                </div>
            )}
        </div>
    )
}

export default Alert
