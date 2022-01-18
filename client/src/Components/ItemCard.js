import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function ItemCard({ item, onAdd }) {
    return(
        <Card>
          <Card.Content>
            {/* <Image
              floated='left'
              size='small'
              src={item.image}
              alt={item.name}
            /> */}
            <img className='small' src={item.image}
              alt={item.name} />
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>${item.price}</Card.Meta>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='button'>
              <Button onClick={() => onAdd(item)} basic color='blue' > Add To Cart </Button>
            </div>
          </Card.Content>
        </Card>
      
    )
}
export default ItemCard

