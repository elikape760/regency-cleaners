import ItemCard from "./ItemCard"
// import { Card } from 'semantic-ui-react'

function ItemList({ items, onAdd }) {
    return (
        <main className="card mb-3">
            <h2>Request Pickup</h2>
            <div >
                <>
                    {items.map((item) => {
                        return (
                            <ItemCard key={item.id} item={item} onAdd={onAdd} />
                        )
                    })}
                </>
            </div>
        </main>
    )
}

export default ItemList