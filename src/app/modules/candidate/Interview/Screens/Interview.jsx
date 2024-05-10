import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';
import { assets } from '../../../../platform/assets/assets';
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import CameraRecorder from './CameraRecorder';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 300;
`;
const StyledHeaderContainer = styled.div`
    position: relative;
    width: 100%;
`;
const StyledHeaderPicture = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const StyledHeaderText = styled.p`
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    font-size: 24px;
    font-weight: bold;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`;

const InterviewQuestionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    margin-left: 20px;
`;

const SubTextQuestion = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    margin-top: 10px;
    display: inline-block;
`;
const VideoContainer = styled.div`
    width: 640px;
    height: 480px;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;
export default function Interview() {
    return (
        <div>
            <StyledDiv>
                <StyledHeaderContainer>
                    <StyledHeaderText>UI/UX Designer Application</StyledHeaderText>
                    <StyledHeaderPicture
                        src={assets.interview_header}
                        alt=""
                    />
                </StyledHeaderContainer>
            </StyledDiv>
            <StyledDiv>
                <img
                    src={assets.bot_full}
                    alt=""
                />
                <InterviewQuestionDiv>
                    <SubTextQuestion>
                        Can you describe your approach to designing user interfaces that prioritize both functionality
                        and aesthetics ?
                    </SubTextQuestion>
                </InterviewQuestionDiv>
            </StyledDiv>
            <StyledDiv>
                <VideoContainer>
                    <CameraRecorder />
                </VideoContainer>
            </StyledDiv>
        </div>
    );
}
