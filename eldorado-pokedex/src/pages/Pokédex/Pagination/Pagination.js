import React from 'react'
import { usePoke } from '../../../Context/Provider'
import { Container, Item } from './StylesPagination'

function Pagination() {
    const {active} = usePoke()

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
