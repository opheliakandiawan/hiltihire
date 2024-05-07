import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';
import { Button } from '@mui/material';

// Import custom font weight and size variables
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import FONTSIZE from '../../../../platform/Style/FontSize';

const StyledTitle = styled.h1`
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 20px;
    margin-left: 50px;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    padding: 1rem;
    margin-top: 20px;
`;

const Container = styled.div`
    margin-top: 38px;
    height: 320px;
    overflow-y: auto;
`;

const InputContainer = styled(Box)`
    display: flex;
    align-items: flex-end;
    margin-left: 50px;
    margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
    flex-grow: 1;
    max-width: 500px;
`;

const StyledText = styled.p`
    font-weight: ${FONTWEIGHT.MEDIUM};
    font-size: ${FONTSIZE.small};
    margin-left: 50px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const SliderContainer = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 50px;
    margin-bottom: 20px;
`;

const SliderWrapper = styled.div`
    margin-right: 20px;
`;

const ValueDisplay = styled(Typography)`
    font-size: ${FONTSIZE.small};
`;

export default function Feedback() {
    const [sliderValues, setSliderValues] = React.useState({
        clarityResponsibilities: 5,
        clarityTeamDynamics: 5,
        communicateWorkflows: 5,
        fairOnboarding: 5,
        effectivenessCommunication: 5,
        satisfactionResponsiveness: 5,
        qualityFeedback: 5,
        trainingSupport: 5,
        userFriendlyInterfaces: 5,
    });

    const handleSliderChange = (question, newValue) => {
        setSliderValues({ ...sliderValues, [question]: newValue });
    };

    return (
        <>
            <StyledTitle>Feedback Form</StyledTitle>
            <InputContainer>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <StyledTextField
                    id="input-name"
                    label="Enter your name"
                    variant="standard"
                />
            </InputContainer>
            <InputContainer>
                <MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <StyledTextField
                    id="input-email"
                    label="Enter your email"
                    variant="standard"
                />
            </InputContainer>

            <Container>
                {/* Question 1 */}
                <StyledText>
                    How well did the onboarding process clarify your responsibilities and objectives within your role?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.clarityResponsibilities}
                            onChange={(event, newValue) => handleSliderChange('clarityResponsibilities', newValue)}
                            aria-labelledby="clarity-responsibilities-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.clarityResponsibilities} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 2 */}
                <StyledText>How would you rate the clarity of team dynamics and roles within your team?</StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.clarityTeamDynamics}
                            onChange={(event, newValue) => handleSliderChange('clarityTeamDynamics', newValue)}
                            aria-labelledby="clarity-team-dynamics-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.clarityTeamDynamics} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 3 */}
                <StyledText>
                    Did the onboarding process effectively communicate the company&apos;s workflows and processes?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.communicateWorkflows}
                            onChange={(event, newValue) => handleSliderChange('communicateWorkflows', newValue)}
                            aria-labelledby="communicate-workflows-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.communicateWorkflows} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 4 */}
                <StyledText>
                    Did you feel that the onboarding process was fair and equitable for all new hires?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.fairOnboarding}
                            onChange={(event, newValue) => handleSliderChange('fairOnboarding', newValue)}
                            aria-labelledby="fair-onboarding-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.fairOnboarding} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 5 */}
                <StyledText>
                    How would you rate the effectiveness of communication channels used during the onboarding process?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.effectivenessCommunication}
                            onChange={(event, newValue) => handleSliderChange('effectivenessCommunication', newValue)}
                            aria-labelledby="effectiveness-communication-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.effectivenessCommunication} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 6 */}
                <StyledText>
                    How satisfied were you with the responsiveness of your manager and colleagues to your needs?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.satisfactionResponsiveness}
                            onChange={(event, newValue) => handleSliderChange('satisfactionResponsiveness', newValue)}
                            aria-labelledby="satisfaction-responsiveness-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.satisfactionResponsiveness} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 7 */}
                <StyledText>How would you rate the quality and frequency of feedback provided to you?</StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.qualityFeedback}
                            onChange={(event, newValue) => handleSliderChange('qualityFeedback', newValue)}
                            aria-labelledby="quality-feedback-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.qualityFeedback} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 8 */}
                <StyledText>
                    Were you provided with adequate training and support to utilize the technology tools required for
                    your role?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.trainingSupport}
                            onChange={(event, newValue) => handleSliderChange('trainingSupport', newValue)}
                            aria-labelledby="training-support-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.trainingSupport} / 10</ValueDisplay>
                </SliderContainer>

                {/* Question 9 */}
                <StyledText>
                    How intuitive and user-friendly did you find the interfaces of the technology tools used during
                    onboarding?
                </StyledText>
                <SliderContainer>
                    <SliderWrapper>
                        <Slider
                            value={sliderValues.userFriendlyInterfaces}
                            onChange={(event, newValue) => handleSliderChange('userFriendlyInterfaces', newValue)}
                            aria-labelledby="user-friendly-interfaces-slider"
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            sx={{ width: '800px' }}
                        />
                    </SliderWrapper>
                    <ValueDisplay>{sliderValues.userFriendlyInterfaces} / 10</ValueDisplay>
                </SliderContainer>
            </Container>

            <ButtonDiv>
                <Button style={PlatformReusableStyles.PrimaryButtonStyles}>Submit</Button>
            </ButtonDiv>
        </>
    );
}
