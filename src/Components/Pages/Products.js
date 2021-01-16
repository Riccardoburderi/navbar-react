import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import {Player} from './holder';

export default function Products() {
    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    const myStyle = {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
      };

      Player.sort(dynamicSort("name"));

      /* Player.sort(); */
    return (
        <div>
            <h2>This is the Products Page</h2>
            <CardColumns style={myStyle}>
                {Player.map((item, index)=>{
                    return(
                        <Card key={index} style={{maxWidth:200, margin:10}}>
                            <Card.Img src={item.img} style={{maxWidth:200}} />
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text> 
                                This player has this abilities:
                                {item.abilities}
                            </Card.Text>
                            <Card.Text>
                                And has {item.equip}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardColumns>
            
           
        </div>
    )
}
