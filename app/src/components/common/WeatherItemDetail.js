import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const styles = theme => ({});

const WeatherItemDetail = function (props) {
    const {
        minWidth = 70,
        fontSize =  9,
        width = 1 / 4,
        icon,
        textLine1,
        textLine2 = undefined,
    } = props;
    return (
        <Box width={width} flexDirection="column" fontSize={fontSize} minWidth={minWidth}>
            <Typography
                component="p"
                variant="body2"
                color="textPrimary"
                align="center"
            >
                {icon}
            </Typography>
            <Typography
                component="p"
                variant="body2"
                color="textPrimary"
                align="center"
            >
                {textLine1}
            </Typography>
            <Typography
                component="p"
                variant="body2"
                color="textPrimary"
                align="center"
            >
                {textLine2}
            </Typography>
        </Box>
    );
};

export default withStyles(styles)(WeatherItemDetail);