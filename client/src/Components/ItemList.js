import ItemCard from "./ItemCard"
import { Card } from 'semantic-ui-react'

function ItemList({ items, onAdd }) {
    return (
        <main className=" block col-2">
            <h2>Request Pickup</h2>
            <div >
                <Card.Group >
                    {items.map((item) => {
                        return (
                            <ItemCard key={item.id} item={item} onAdd={onAdd} />
                        )
                    })}
                </Card.Group>
            </div>
        </main>
    )
}

export default ItemList