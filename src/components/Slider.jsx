import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Slider = ({ data }) => {
  return (
    <div className='d-flex overflow_custom my-5'>
        {
            data.map((item)=>{
                return(
                    <Card className='mx-3'
                    style={{
                        minWidth:'200px',
                        cursor:'pointer'
                    }}
                    >
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        {item.title}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
            })
        }
    </div>
  )
}

export default Slider