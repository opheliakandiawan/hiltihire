import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import styled from 'styled-components';
import { assets } from '../../../../platform/assets/assets';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';

const StyledText = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: 30px;
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 300;
`;
const StyledImage = styled.img`
    margin-right: 20px;
`;

const Spacing = styled.div`
    margin-top: 80px;
`;

const StyledIcon = styled.img`
    margin-right: 5px;
    width: 25px;
    height: 25px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HorizontalTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const SubText = styled.p`
    margin-top: 10px;
    display: inline-block;
`;

const HorizontalSpacing = styled.div`
    margin-right: 50px;
`;

const ButtonsDiv = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 2rem;
    padding: 1rem;
`;

const StyledButton = styled(Button)`
    flex-grow: 1; /* Make the buttons fill the available horizontal space */
`;

export default function Candidates() {
    return (
        <div>
            <StyledDiv>
                <StyledImage
                    src={assets.vinnie_photo}
                    alt=""
                />
                <TextWrapper>
                    <StyledText>Vinnie Tiang Wen Ying</StyledText>
                    <SubText>UI/UX Designer</SubText>
                    <Spacing></Spacing>
                    <HorizontalTextWrapper>
                        <StyledIcon
                            src={assets.profile_phone}
                            alt=""
                        />

                        <SubText>+601155093081</SubText>
                        <HorizontalSpacing></HorizontalSpacing>
                        <StyledIcon
                            src={assets.profile_email}
                            alt=""
                        />

                        <SubText>vinnieying223@gmail.com</SubText>
                    </HorizontalTextWrapper>
                </TextWrapper>
            </StyledDiv>
            <StyledDiv>
                <ButtonsDiv>
                    <StyledButton style={PlatformReusableStyles.PrimaryButtonStyles}>Summary</StyledButton>
                    <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>Interview</StyledButton>
                    <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>AI Reports</StyledButton>
                </ButtonsDiv>
            </StyledDiv>
        </div>
    );
}
