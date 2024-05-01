// import PlatformReusableStyles from '../../platform/Style/PlatformReusableStyles';

import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import styled from 'styled-components';
import { assets } from '../../../../platform/assets/assets';
const StyledText = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
`;

const StyledDiv = styled.div`
    padding: 300;
`;

export default function Candidates() {
    return (
        <StyledDiv>
            <StyledText>Vinnie Tiang Wen Ying</StyledText>
            <img
                src={assets.vinnie_photo}
                alt=""
            />
        </StyledDiv>
    );
}
