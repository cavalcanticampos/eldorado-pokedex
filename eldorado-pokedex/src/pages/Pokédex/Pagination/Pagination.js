import React, { useState } from 'react'
import { Container, Item } from './StylesPagination'

function Pagination() {
    const [active, setActive] = useState(1)

    return (
        <Container>
            {
                active - 1 === 0 ?
                '' :
                <Item >
                    {active - 1}
                </Item> 
            }
            <Item>
                {active}
            </Item> 
            <Item>
                {active + 1}
            </Item> 
        </Container>



    )
    }

export default Pagination
