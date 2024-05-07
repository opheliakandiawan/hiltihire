
import SearchField from '../Components/SearchField.jsx';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Candidates() {
    const StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `;

    return (
        <StyledDiv>
            <SearchField />
            <Card>
                <CardMedia></CardMedia>
                <CardContent></CardContent>
            </Card>
        </StyledDiv>
    );
}
