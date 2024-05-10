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
    align-items: flex-start;
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

const SubTextQuestion = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
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
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    flex-grow: 1;
`;

const StyledTitle = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
`;

const StyledInfoTitle = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
`;

const InfoWrapper = styled.div`
    display: flex;
`;

const StyledVideo = styled.video`
    max-width: 100%;
    padding-bottom: 10px;
`;

const VideoWrapper = styled.div`
    flex: 1;
    align-items: flex-start;
    margin-right: 20px;
`;

const TranscriptWrapper = styled.div`
    flex: 1;
`;

const NoteInput = styled.textarea`
    width: 95%;
    height: 100px;
    resize: vertical;
    margin-top: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export default function VinnieInterview() {
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
                        <StyledButton style={PlatformReusableStyles.PrimaryButtonStyles}>Interview</StyledButton>
                    </Link>
                    <Link to="/hr/candidate/report">
                        <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>AI Reports</StyledButton>
                    </Link>
                </ButtonsDiv>
            </StyledDiv>
            <StyledDiv>
                <VideoWrapper>
                    <StyledVideo
                        src={assets.vinnie_video}
                        controls
                    ></StyledVideo>
                    <StyledTitle>Notes:</StyledTitle>
                    <NoteInput placeholder="Type your notes here"></NoteInput>
                </VideoWrapper>
                <TranscriptWrapper>
                    <StyledTitle>Transcript:</StyledTitle>
                    <InfoWrapper>
                        <StyledInfoTitle>00:00</StyledInfoTitle>
                        <SubTextQuestion>
                            Can you describe your approach to designing user interfaces that prioritize both
                            functionality and aesthetics ?
                        </SubTextQuestion>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:12</StyledInfoTitle>
                        <SubText>
                            In crafting user interfaces that seamlessly integrate functionality and aesthetics,
                        </SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:16</StyledInfoTitle>
                        <SubText>my approach centers on a comprehensive understanding of user experience.</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:20</StyledInfoTitle>
                        <SubTextQuestion>
                            Can you walk us through your design process and how you approach a new project?
                        </SubTextQuestion>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:26</StyledInfoTitle>
                        <SubText>
                            Absolutely. My design process typically starts with understanding the project requirements
                            and user needs
                        </SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:32</StyledInfoTitle>
                        <SubText>through research and stakeholder interviews.</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:36</StyledInfoTitle>
                        <SubText>Once I have a clear understanding of the goals and target audience, </SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>00:40</StyledInfoTitle>
                        <SubText>
                            I move on to wireframing and prototyping to explore different layout options and user flows
                        </SubText>
                    </InfoWrapper>
                </TranscriptWrapper>
            </StyledDiv>
        </div>
    );
}
