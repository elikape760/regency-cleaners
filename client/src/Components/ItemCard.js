import React from 'react'
// import { Card } from 'semantic-ui-react'

function ItemCard({ item, onAdd }) {
  return (
    <div className="card-body">
      <div className="col-1">
        <img className=" img-thumbnail rounded float-end" src={item.image} alt={item.name} />
      </div>

      <div className="col-0 mb-3">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">
          <small className="text-muted">${item.price}</small>
        </p>
        <button type="button" class="btn btn-outline-primary" onClick={() => onAdd(item)}>Add To Cart</button>
      </div>
    </div>
  )
}
export default ItemCard
  // <Card >
  //   <Card.Content>
  //     {/* <Image
  //           floated='left'
  //           size='small'
  //           src={item.image}
  //           alt={item.name}
  //         /> */}
  //     <img className='small' src={item.image}
  //       alt={item.name} />
  //     <Card.Header>{item.name}</Card.Header>
  //     <Card.Meta>${item.price}</Card.Meta>
  //     <Card.Description>{item.description}</Card.Description>
  //   </Card.Content>
  //   <Card.Content extra>
  //     {/* <div className=''> */}
  //     <button className='button' onClick={() => onAdd(item)} basic color='blue' > Add To Cart </button>
  //     {/* </div> */}
  //   </Card.Content>
  // </Card>

