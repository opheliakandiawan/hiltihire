import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import styled from 'styled-components';
import { assets } from '../../../../platform/assets/assets';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';
import { Link } from 'react-router-dom';

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

const SentimentText = styled.p`
    font-size: 22px;
    font-weight: ${FONTWEIGHT.BOLD};
    color: #00ff00;
    margin-top: 8px;
`;
const HorizontalSpacing = styled.div`
    margin-right: 50px;
`;

const ButtonsDiv = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    flex-grow: 1;
`;

const StyledTitle = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 50px;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export default function VinnieReport() {
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
                    <Link to="/hr/candidate/Vinnie Tiang">
                        <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>Summary</StyledButton>
                    </Link>
                    <Link to="/hr/candidate/interview">
                        <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>Interview</StyledButton>
                    </Link>
                    <Link to="/hr/candidate/report">
                        <StyledButton style={PlatformReusableStyles.PrimaryButtonStyles}>AI Reports</StyledButton>
                    </Link>
                </ButtonsDiv>
            </StyledDiv>
            <StyledDiv>
                <img
                    src={assets.bot}
                    alt=""
                />
                <InfoWrapper>
                    <StyledTitle>Overall Sentiment</StyledTitle>
                    <SentimentText>Positive</SentimentText>
                </InfoWrapper>
            </StyledDiv>
        </div>
    );
}
