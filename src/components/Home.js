import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return (
        <Container>
            {/* Home */}
            <Section
            title="Model S"
            description="Order Online forTouchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custon Order"
            rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online forTouchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custon Order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Model 3"
                description="Order Online forTouchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custon Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online forTouchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custon Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in Amewrica"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a  New Roof Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accesories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container=styled.div`
height:100vh;

`