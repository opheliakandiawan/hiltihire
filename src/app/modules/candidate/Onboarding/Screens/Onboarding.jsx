import styled from 'styled-components';
import FONTWEIGHT from '../../../../platform/Style/FontWeight';
import FONTSIZE from '../../../../platform/Style/FontSize';
import { assets } from '../../../../platform/assets/assets';
import { Button } from '@mui/material';
import PlatformReusableStyles from '../../../../platform/Style/PlatformReusableStyles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const StyledTitle = styled.h1`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE['x-large']};
    margin-bottom: 20px; /* Adjust margin as needed */
    margin-left: 50px; /* Add margin to the left to position near the center */
`;

const CenteredContent = styled.div`
    text-align: center; /* Center the text and image */
`;

const StyledText = styled.p`
    font-weight: ${FONTWEIGHT.small};
    font-size: ${FONTSIZE.small};
    text-align: center; /* Center the text */
    margin-bottom: 40px; /* Add margin at the bottom */
`;

const StyledImage = styled.img`
    max-width: 45%;
    height: auto;
    margin: 0 auto 20px; /* Center the image horizontally and add 20px margin at the bottom */
    display: block; /* Ensure the margin auto works */
`;

const StyledText2 = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE.large};
    margin-left: 50px;
`;

const StyledText3 = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE.large};
    margin-left: 50px;
    margin-top: 50px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
`;

const Box = styled.div`
    width: 450px;
    height: 250px;
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const PersonImage1 = styled.img`
    width: 430px; /* Adjust the width as needed */
    height: 390px; /* Adjust the height as needed */
    margin-left: -100px;
    margin-bottom: -15px;
`;

const PersonImage2 = styled.img`
    width: 490px; /* Adjust the width as needed */
    height: 570px; /* Adjust the height as needed */
    margin-left: -150px;
`;

const PersonImage3 = styled.img`
    width: 520px; /* Adjust the width as needed */
    height: 555px; /* Adjust the height as needed */
    margin-left: -145px;
    margin-bottom: 10px;
`;

const PersonImage4 = styled.img`
    width: 550px; /* Adjust the width as needed */
    height: 550px; /* Adjust the height as needed */
    margin-left: -180px;
`;

const Label = styled.span`
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-size: ${FONTSIZE.small};
`;

const Details1 = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: -110px;
    margin-top: -20px;
    align-items: flex-start;
    padding: 10px; /* Add padding to the details box */
    border-radius: 5px; /* Add border radius for a rounded appearance */
`;

const Details2 = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: -155px;
    margin-top: -20px;
    align-items: flex-start;
    padding: 10px; /* Add padding to the details box */
    border-radius: 5px; /* Add border radius for a rounded appearance */
`;

const Details3 = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: -200px;
    margin-top: -20px;
    align-items: flex-start;
    padding: 10px; /* Add padding to the details box */
    border-radius: 5px; /* Add border radius for a rounded appearance */
`;

const Details4 = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: -185px;
    margin-top: 15px;
    align-items: flex-start;
    padding: 10px; /* Add padding to the details box */
    border-radius: 5px; /* Add border radius for a rounded appearance */
`;

const PersonName = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const PersonEmail = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const PersonPosition = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const FunFact = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const Experience = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const Skill = styled.p`
    font-size: ${FONTSIZE.small};
    margin-top: 10px;
`;

const CindyPhoto = styled.img`
    width: 690px; /* Adjust the width as needed */
    height: 680px; /* Adjust the height as needed */
    margin-left: -200px;
`;

const CindyDetails = styled.div`
    margin-left: -150px;
    align-items: center;
    margin-top: 10px;
`;

const Box2 = styled.div`
    margin-left: 30px;
    padding: 20px;
    margin-top: 40px; /* Add margin at the top */
    width: 980px;
    height: 270px;
    background-color: rgba(210, 5, 30, 0.2); /* Red color with 25% opacity */
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const StyledTextMei = styled.p`
    font-weight: ${FONTWEIGHT.MEDIUM};
    font-size: ${FONTSIZE.small};
    margin-top: 20px;
    line-height: 1.2; /* Adjust line height as needed */
`;

const ButtonDiv = styled.div`
    display: flex;
    padding: 1rem;
    margin-bottom: -220px;
    margin-left: 40px;
`;

const ContactButton = styled(Button)`
    && {
        background-color: ${PlatformReusableStyles.PrimaryButtonStyles.backgroundColor};
        color: ${PlatformReusableStyles.PrimaryButtonStyles.color};
        border: ${PlatformReusableStyles.PrimaryButtonStyles.border};
        width: 150px; /* Adjust width as needed */
        font-weight: ${PlatformReusableStyles.PrimaryButtonStyles.fontWeight}; /* Make text bold */
        &:hover {
            background-color: ${PlatformReusableStyles.PrimaryButtonStyles
                .backgroundColor}; /* Prevent color change on hover */
        }
    }
`;
const StickyBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    padding: 20px;
    background-color: #f0f0f0; /* Background color for the "school board" */
    border-radius: 10px;
    width: 980px;
    height: 480px;
    margin-left: 30px;
`;

const StickyNote = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    position: relative;
`;

const Title = styled.h2`
    font-weight: ${FONTWEIGHT.SEMI_BOLD};
    font-size: ${FONTSIZE.medium};
    margin-bottom: 25px;
    text-decoration: underline; /* Add underline to the title */
`;

const Content = styled.p`
    font-weight: ${FONTWEIGHT.REGULAR};
    font-size: ${FONTSIZE.small};
    line-height: 1.5; /* Adjust line height as needed */
`;

// Styled component for the checklist items
const StyledFormGroup = styled(FormGroup)`
    margin-left: 50px;
`;

const Subtitle = styled.h3`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: ${FONTSIZE.MEDIUM};
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 20px;
    background-color: #d2051e; /* Red color for the background */
    color: white; /* White color for the font */
    padding: 10px 20px; /* Add padding to create some space around the text */
    border-radius: 5px; /* Add border radius for rounded corners */
    display: inline-block; /* Ensure the background only wraps around the text */
`;

export default function Onboarding() {
    return (
        <div>
            <StyledTitle>Welcome, Vinnie!</StyledTitle>
            <CenteredContent>
                <StyledImage
                    src={assets.Onboardingdecopic}
                    alt="Onboarding Picture"
                />
                <StyledText>Welcome to UI Designer Team! We&apos;re so happy you&apos;re here with us.</StyledText>
            </CenteredContent>
            <StyledText2>Meet your team members !</StyledText2>
            <Row>
                <Box>
                    <PersonImage1
                        src={assets.Onboarding1}
                        alt="Person1"
                    />
                    <Details1>
                        <PersonName>
                            <Label>Name:</Label> Roy
                        </PersonName>
                        <PersonEmail>
                            <Label>Email:</Label> roy@hiltihire.com
                        </PersonEmail>
                        <PersonPosition>
                            <Label>Position:</Label> UI Designer Lead
                        </PersonPosition>
                        <FunFact>
                            <Label>Fun Fact:</Label> I can solve a Rubik&apos;s Cube in under two minutes.
                        </FunFact>
                    </Details1>
                </Box>
                <Box>
                    <PersonImage2
                        src={assets.Onboarding2}
                        alt="Person2"
                    />
                    <Details2>
                        <PersonName>
                            <Label>Name:</Label> Cindy
                        </PersonName>
                        <PersonEmail>
                            <Label>Email:</Label> cindy@hiltihire.com
                        </PersonEmail>
                        <PersonPosition>
                            <Label>Position:</Label> Senior UI Designer
                        </PersonPosition>
                        <FunFact>
                            <Label>Fun Fact:</Label> I have a black belt in karate.
                        </FunFact>
                    </Details2>
                </Box>
            </Row>
            <Row>
                <Box>
                    <PersonImage3
                        src={assets.Onboarding3}
                        alt="Person3"
                    />
                    <Details3>
                        <PersonName>
                            <Label>Name:</Label> Mei
                        </PersonName>
                        <PersonEmail>
                            <Label>Email:</Label> mei@hiltihire.com
                        </PersonEmail>
                        <PersonPosition>
                            <Label>Position:</Label> Junior UI Designer
                        </PersonPosition>
                        <FunFact>
                            <Label>Fun Fact:</Label> I&apos;ve bungee jumped off a 300-foot bridge.
                        </FunFact>
                    </Details3>
                </Box>
                <Box>
                    <PersonImage4
                        src={assets.Onboarding4}
                        alt="Person4"
                    />
                    <Details4>
                        <PersonName>
                            <Label>Name:</Label> James
                        </PersonName>
                        <PersonEmail>
                            <Label>Email:</Label> james@hiltihire.com
                        </PersonEmail>
                        <PersonPosition>
                            <Label>Position:</Label> Junior UI Designer
                        </PersonPosition>
                        <FunFact>
                            <Label>Fun Fact:</Label> I once traveled to five different countries in one month, exploring
                            everything from ancient ruins to modern cityscapes.
                        </FunFact>
                    </Details4>
                </Box>
            </Row>
            <StyledText3>Meet and contact your buddy !</StyledText3>
            <Box2>
                <CindyPhoto
                    src={assets.Onboarding2}
                    alt="Mei"
                />
                <CindyDetails>
                    <PersonName>
                        <Label>Name:</Label> Cindy
                    </PersonName>
                    <PersonEmail>
                        <Label>Email:</Label> cindy@hiltihire.com
                    </PersonEmail>
                    <PersonPosition>
                        <Label>Position:</Label> Senior UI Designer
                    </PersonPosition>
                    <Experience>
                        <Label>Experience:</Label> 3 Years{' '}
                    </Experience>
                    <Skill>
                        <Label>Skills:</Label> HTML, CSS, JavaScript, React
                    </Skill>
                    <StyledTextMei>
                        I&apos;m here to help you prepare your skills and understand the working culture before
                        onboarding. If you have any questions or need a hand with anything, just contact me. Looking
                        forward to working together!
                    </StyledTextMei>
                </CindyDetails>
                <ButtonDiv>
                    <ContactButton>Contact Me</ContactButton>
                </ButtonDiv>
            </Box2>
            <StyledText3> Tips and reminders from your fellow colleagues !</StyledText3>
            <StickyBoard>
                <StickyNote>
                    <Title>You&apos;ve got this!</Title>
                    <Content>
                        Don&apos;t stress too much about getting everything perfect right away. We&apos;re all about
                        that learning curve here, so take your time and soak it all in.
                    </Content>
                </StickyNote>
                <StickyNote>
                    <Title>Stay organized</Title>
                    <Content>
                        Keeping your tasks organized will help you stay on track and ensure nothing falls through the
                        cracks. Consider using tools like Trello or Asana to manage your tasks efficiently.
                    </Content>
                </StickyNote>
                <StickyNote>
                    <Title>Ask for help</Title>
                    <Content>
                        Don&apos;t hesitate to reach out to your team members or mentors if you encounter any challenges
                        or need clarification on something. We&apos;re here to support each other!
                    </Content>
                </StickyNote>
                <StickyNote>
                    <Title>Embrace feedback</Title>
                    <Content>
                        Feedback is essential for growth. Be open to receiving feedback from your colleagues and use it
                        as an opportunity to improve your skills and work.
                    </Content>
                </StickyNote>
            </StickyBoard>

            {/* Checklist section */}
            <StyledText3> Tick your checklist!</StyledText3>
            {/* Pre-Arrival Tasks */}
            <Subtitle>Pre-Arrival Tasks</Subtitle>
            <StyledFormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Connect with assigned buddy for initial guidance and support"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Review and sign employment contract and other necessary paperwork"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Complete any required pre-employment screenings or assessments"
                />
            </StyledFormGroup>

            {/* First Day Orientation */}
            <Subtitle>First Day Orientation</Subtitle>
            <StyledFormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Attend orientation session"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Complete any required training modules or safety briefings"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Tour the office and get acquainted with facilities and amenities"
                />
            </StyledFormGroup>

            {/* Integration and Socialization */}
            <Subtitle>Integration and Socialization</Subtitle>
            <StyledFormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Attend team meetings, events and social activities to meet colleagues and build relationships"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Schedule one-on-one meetings with team members and stakeholders to get to know them better"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Participate in team lunches, coffee breaks or other informal gatherings to foster a sense of belonging"
                />
            </StyledFormGroup>

            {/* Check-in Points */}
            <Subtitle>Check-in Points</Subtitle>
            <StyledFormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Attend scheduled check-in meetings with manager to provide feedback and address any questions or concerns"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Seek clarification or additional support as needed to overcome challenges or obstacles"
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Reflect on progress and identify areas for growth or improvement during onboarding process"
                />
            </StyledFormGroup>
        </div>
    );
}
