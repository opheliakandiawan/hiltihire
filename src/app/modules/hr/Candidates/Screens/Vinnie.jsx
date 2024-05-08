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
    color: white;
    font-weight: ${FONTWEIGHT.BOLD};
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 50px;
`;

const StyledContainer = styled.div`
    background-color: black;
    padding: 10px;
    display: inline-block;
    border-radius: 8px;
    margin-top: 10px;
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
    flex-direction: row;
`;

export default function Vinnie() {
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
                    <Link to="/hr/candidates">
                        <StyledButton style={PlatformReusableStyles.PrimaryButtonStyles}>Summary</StyledButton>
                    </Link>
                    <Link to="/hr/candidate/interview">
                        <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>Interview</StyledButton>
                    </Link>
                    <Link to="/hr/candidate/report">
                        <StyledButton style={PlatformReusableStyles.BlackOutlineButtonStyles}>AI Reports</StyledButton>
                    </Link>
                </ButtonsDiv>
            </StyledDiv>
            <StyledDiv>
                <StyledWrapper>
                    <StyledContainer>
                        <StyledTitle>Personal Information</StyledTitle>
                    </StyledContainer>
                    <InfoWrapper>
                        <StyledInfoTitle>NAME :</StyledInfoTitle>
                        <SubText>Vinnie Tiang Wen Ying</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>EMAIL :</StyledInfoTitle>
                        <SubText>vinnieying223@gmail.com</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>CONTACT :</StyledInfoTitle>
                        <SubText>+601155093081</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>DOB :</StyledInfoTitle>
                        <SubText>23 FEBRUARY 2003</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>PROFESSION :</StyledInfoTitle>
                        <SubText>UI/UX Designer</SubText>
                    </InfoWrapper>
                    <StyledContainer>
                        <StyledTitle>Working Experience</StyledTitle>
                    </StyledContainer>
                    <InfoWrapper>
                        <StyledInfoTitle>YEARS OF EXPERIENCE :</StyledInfoTitle>
                        <SubText>3</SubText>
                    </InfoWrapper>
                    <StyledContainer>
                        <StyledTitle>Education</StyledTitle>
                    </StyledContainer>
                    <InfoWrapper>
                        <StyledInfoTitle>ACADEMIC QUALIFICATION : </StyledInfoTitle>
                        <SubText>Degree</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>CGPA :</StyledInfoTitle>
                        <SubText>3.75</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>INSTITUTION :</StyledInfoTitle>
                        <SubText>University of Malaya</SubText>
                    </InfoWrapper>
                    <StyledContainer>
                        <StyledTitle>Professional Summary</StyledTitle>
                    </StyledContainer>
                    <InfoWrapper>
                        <StyledInfoTitle>STRENGTH :</StyledInfoTitle>
                        <SubText>Diligent</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>WEAKNESS :</StyledInfoTitle>
                        <SubText>-</SubText>
                    </InfoWrapper>
                    <InfoWrapper>
                        <StyledInfoTitle>GOAL :</StyledInfoTitle>
                        <SubText>-</SubText>
                    </InfoWrapper>
                </StyledWrapper>

                <StyledWrapper>
                    <StyledContainer>
                        <StyledTitle>Uploaded CV </StyledTitle>
                    </StyledContainer>
                    <img
                        src={assets.vinnie_resume}
                        alt=""
                    />
                </StyledWrapper>
            </StyledDiv>
        </div>
    );
}
