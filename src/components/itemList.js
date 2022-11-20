import styled from "styled-components"

export default function ItemList({ item, total, setTotal }) {
    const newValue = Number(total) + Number(item.value);
    // setTotal(Number(newValue));
    console.log(item)
    return(
        <Container isInput={item.isInput}>
            <Date>{item.date?.date}</Date>
            <Title>{item.title}</Title>
            <Value>{item.value}</Value>
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
    width: 70%;
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
`

