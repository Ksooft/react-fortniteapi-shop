import { useContext } from 'react'
import { ShopContext } from '../Context/context'
import TagsRarity from './TagsRarity'

const GoodsItem = (props) => {
    const {desc, name, id, price, img, rarity} = props
    const {addToBasket} = useContext(ShopContext)
    const colors = ['3D217A', 'F04482', 'BFA499', 'C27643', '91C0CB', '82CD99', 'F57A16', '6B566B', '0FD1E6', '6AFC17', 'C1BE3A', 'FCF9A4', '002FB1', 'F57060', '8184E6']
    const randomColors = () => Math.floor(0 + Math.random() * (14 + 1 - 0))
    const defaultImg = `https://dummyimage.com/1024/${colors[randomColors()]}/ffffff.png&text=${name}`

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={img} alt={name} onError={e => e.target.src = defaultImg} />
            </div>
            <div className="card-content">
                <span className="card-title" style={{ fontWeight: 400}}>{name}</span>
                <p style={{marginBottom: '15px'}}>{desc}</p>
                <TagsRarity rarity={rarity} />
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price})}>Купить</button>
                <span className="right" style={{ fontSize: '1.8rem' }}>{price} руб.</span>
            </div>
        </div>
    )
}

export default GoodsItem
