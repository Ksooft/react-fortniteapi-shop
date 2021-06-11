const TagsRarity = ({ rarity }) => { // Epic, Uncommon, Rare, Legendary
    const value = {
        Uncommon: { name: 'Необычный', color: 'green' },
        Rare: { name: 'Редкий', color: 'blue darken-4' },
        Epic: { name: 'Эпический', color: 'purple' },
        Legendary: { name: 'Легендарный', color: 'orange' }
    }
    return (
        <div className={`chip right card-rarity ${value[rarity].color}`}>
            {value[rarity].name}
        </div>
    )
}

export default TagsRarity
