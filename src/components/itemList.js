import styled from "styled-components"

export default function ItemList({ item, total, setTotal }) {
    const newValue = Number(total) + Number(item.value);
    // setTotal(Number(newValue));
    return(
        <EssaDIV isInput={item.isInput}>
            <h4>{item.title}</h4>
            <p>{item.value}</p>
        </EssaDIV>
    )
}

const EssaDIV = styled.div`
    margin: 15px 0;
    height: 20px;
    color: ${props => (props.isInput ? 'green' : 'red')};

    display: flex;
    position: relative;

    & h4 {
        font-family: 'Raleway', sans-serif;
    }

    & p {
        position: absolute;
        right: 0;
        font-family: 'Raleway', sans-serif;
    }
`