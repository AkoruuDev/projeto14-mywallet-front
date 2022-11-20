import styled from "styled-components"

export default function ItemList({ item }) {
    const money = String(item.value).replace('.', ',');
    console.log(money)
    return(
        <Container isInput={item.isInput}>
            <Date>{item.date?.date}</Date>
            <Title>{item.title}</Title>
            <Value>{money}</Value>
        </Container>
    )
}

const Container = styled.div`
    margin: 15px 0;
    height: 20px;
    color: ${props => (props.isInput ? 'green' : 'red')};

    display: flex;
    position: relative;
`

const Date = styled.p`
    font-family: 'Raleway', sans-serif;
    margin-right: 15px;
    color: #737373;
`

const Title = styled.p`
    font-family: 'Raleway', sans-serif;
    width: calc(70% - 80px);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Value = styled.p`
    position: absolute;
    right: 0;
    font-family: 'Raleway', sans-serif;
    width: 80px;
    text-align: right;
`

