import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const DashboardContainer = ({mode, children}) => {
    const narrow = mode === "narrow";
    return (
        <Grid item={true} xs={narrow ? 4 : 8}>
            <Paper
                sx={{
                    p: 2
                }}
            >
                {children}
            </Paper>
        </Grid>
    );
};

export default DashboardContainer;
