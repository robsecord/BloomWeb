// Frameworks
import { createMuiTheme } from '@material-ui/core/styles';

import { GLOBALS } from '../../utils/globals';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        background: {
            default: GLOBALS.BRANDING.BACKGROUND.DEFAULT,
            paper:   GLOBALS.BRANDING.BACKGROUND.PAPER,
        },
        primary: {
            main: GLOBALS.BRANDING.PRIMARY,
        },
        secondary: {
            main: GLOBALS.BRANDING.SECONDARY,
        },
    },
});
