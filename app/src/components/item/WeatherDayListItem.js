import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { getDayTitle } from '../../core/utils/dates';
import { Box } from '@material-ui/core';

const styles = theme => ({});

const WeatherDayListItem = function (props) {
    const { item, onClickItem } = props;
    const main = item.hours[0].weather;
    return (
        <ListItem alignItems="flex-start" divider={true} button={true} onClick={onClickItem}>
            <ListItemAvatar>
                <img src={item.hours[0].weather.iconPath} alt="logo" height="64" width="64"/>
            </ListItemAvatar>
            <ListItemText
                disableTypography={true}
                primary={
                    <Box flexDirection="row" p={1} m={0} textAlign="center" alignContent="center">
                        <Typography color="textPrimary">
                            {getDayTitle(item.date)}
                        </Typography>
                    </Box>
                }
                secondary={
                    <Box display="flex" flexDirection="row" p={0} m={0} >
                        <Box width={1/2} flexDirection="column" textAlign="center">
                            <Typography variant="body2" component="p" color="textSecondary">
                                {main.main}
                            </Typography>
                            <Typography
                                component="p"
                                variant="body2"
                                align="center"
                            >
                                {main.description}
                            </Typography>
                        
                        </Box>
                        <Box width={1/2} flexDirection="column">
                            <Typography variant="body2" component="p" color="textPrimary" align="center" font={16} >
                                {item.minTemp} K
                            </Typography>
                            <Typography
                                variant="body2" component="p" color="textPrimary" align="center" font={16}
                            >
                                {item.maxTemp} K
                            </Typography>
                        </Box>
                    </Box>
                }
            />
        </ListItem>
    );
};

export default withStyles(styles)(WeatherDayListItem);