import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../Style/Colors';
import FONTSIZE from '../../Style/FontSize';
import NavLinkUtils from '../../Utils/NavLinkUtils';

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${COLORS.grey};
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: ${FONTSIZE.medium};
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    border-radius: 10px;

    /* region animation */
    &:after {
        transition: all ease-in-out 0.3s;
        content: '';
        display: block;
        height: 2px;
        width: 0;
    }

    &:hover {
        background-color: ${COLORS.lightGrey};
    }

    &:hover:after {
        width: 100%;
    }
`;

export default function HrSideNavBar() {
    return (
        <NavLinkContainer>
            <StyledNavLink
                to="/hr/candidates"
                style={NavLinkUtils.activeStyleWithFontWeight}
            >
                Candidates
            </StyledNavLink>
            <StyledNavLink
                to="/hr/analytics"
                style={NavLinkUtils.activeStyleWithFontWeight}
            >
                Analytics
            </StyledNavLink>
        </NavLinkContainer>
    );
}
