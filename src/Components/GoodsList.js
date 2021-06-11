import GoodsItem from './GoodsItem'

const GoodsList = ({ goods = [], addToBasket }) => {

    if (!goods.length) {
        return <h2 className="red-text">Nothing found!</h2>
    }

    return (
        <div className="goods">
            {goods.map(item => item.granted.map(i => <GoodsItem key={i.id} desc={i.description}
                    name={i.name} id={i.id} price={item.price.finalPrice}
                    img={i.images.full_background} rarity={i.rarity.id} addToBasket={addToBasket} /> ))}
        </div>
    )
}

export default GoodsList
