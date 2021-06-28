import { useContext } from 'react'
import { ShopContext } from '../Context/context'
import GoodsItem from './GoodsItem'

const GoodsList = () => {
    const { goods = [] } = useContext(ShopContext)

    if (!goods.length) {
        return <h2 className="red-text">Nothing found!</h2>
    }

    return (
        <div className="goods">
            {goods.map(item => item.granted.map(i => <GoodsItem key={i.id} desc={i.description}
                    name={i.name} id={i.id} price={item.price.finalPrice}
                    img={i.images.full_background} rarity={i.rarity.id} /> ))}
        </div>
    )
}

export default GoodsList
