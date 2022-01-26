import ItemCard from "./ItemCard"
// import { Card } from 'semantic-ui-react'

function ItemList({ items, onAdd }) {
    return (
        <main className="container">
            <div className="row">

                <h2>Request Pickup</h2>
                <div className="my-fancy-grid" >
                    <>
                        {items.map((item) => {
                            return (
                                <ItemCard key={item.id} item={item} onAdd={onAdd} />
                            )
                        })}
                    </>
                </div>
            </div>
        </main>
    )
}

export default ItemList