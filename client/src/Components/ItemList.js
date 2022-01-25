import ItemCard from "./ItemCard"
// import { Card } from 'semantic-ui-react'

function ItemList({ items, onAdd }) {
    return (
        <main className="container">
            <div className="row">
                <div className="col-sm offset-2 col-xl-6 offset-2">
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
                </div>
            </div>
        </main>
    )
}

export default ItemList