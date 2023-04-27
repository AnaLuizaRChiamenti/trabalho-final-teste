import React from 'react';
import { Grid } from '@mui/material';
import ResponsiveAppBar from '../../components/AppBarDefault';

interface DefaultLayoutProps {
    component: React.FC;
}

const DefaultLayoutHome: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
    return (
        <Grid container direction="column" style={{ height: '100vh' }}>
            <Grid item>
                <ResponsiveAppBar />
            </Grid>
            <Grid item xs>
                <Component />
            </Grid>
        </Grid>
    );
};

export default DefaultLayoutHome;
