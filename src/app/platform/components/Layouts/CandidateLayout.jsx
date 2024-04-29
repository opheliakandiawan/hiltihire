import styled from 'styled-components';
import CustomerHeader from '../Header/CustomerHeader';
import CandidateSideNavBar from '../SideNav/CandidateSideNavBar';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem 4rem;
    min-height: calc(100vh - 4rem);
`;

const ContentContainer = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 7fr;
`;
const Content = styled.div`
    padding: 0 2rem;
`;

export default function CandidateLayout() {
    return (
        <LayoutContainer>
            <CustomerHeader />
            <ContentContainer>
                <CandidateSideNavBar />
                <Content>
                    <Outlet />
                </Content>
            </ContentContainer>
        </LayoutContainer>
    );
}
