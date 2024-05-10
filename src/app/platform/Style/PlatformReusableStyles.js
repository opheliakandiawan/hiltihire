import COLORS from './Colors';
import FONTWEIGHT from './FontWeight';

export default class PlatformReusableStyles {
    static PrimaryButtonStyles = {
        backgroundColor: COLORS.red,
        color: COLORS.white,
        fontWeight: FONTWEIGHT.SEMI_BOLD,
        padding: '0.5rem 1rem',
    };

    static SecondaryButtonStyles = {
        color: COLORS.red,
        fontWeight: FONTWEIGHT.SEMI_BOLD,
        padding: '0.5rem 1rem',
    };

    static OutlineButtonStyles = {
        color: COLORS.red,
        border: `1px solid ${COLORS.red}`,
        fontWeight: FONTWEIGHT.SEMI_BOLD,
        padding: '0.5rem 1rem',
    };

    static BlackOutlineButtonStyles = {
        color: COLORS.black,
        border: `1px solid ${COLORS.black}`,
        fontWeight: FONTWEIGHT.SEMI_BOLD,
        padding: '0.5rem 1rem',
    };
}
