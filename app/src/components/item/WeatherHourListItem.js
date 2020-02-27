import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { getHourTitle } from '../../core/utils/dates';
import { OpacityOutlined, ToysOutlined, GetAppOutlined, WbSunny, InvertColors } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import WeatherItemDetail from '../common/WeatherItemDetail';

const styles = theme => ({ });

const WeatherHourListItem = function (props) {
    const { item: { dt, weather, main, wind, rain } } = props;
    return (
        <ListItem alignItems="flex-start" divider={true}>
            <ListItemAvatar>
                <Box flexDirection="column" p={0} m={0} textAlign="center" alignContent="center">
                    <img src={weather.iconPath} alt="logo" height="64" width="64"/>
                    <Typography color="textPrimary" font={18}>
                        {weather.main}
                    </Typography>
                </Box>
            </ListItemAvatar>
            <ListItemText
                disableTypography={true}
                primary={
                    <Box flexDirection="column" p={0} m={0} textAlign="center" alignContent="center">
                        <Typography color="textPrimary">
                            {`${getHourTitle(dt)} / ${weather.description}`}
                        </Typography>
                    </Box>
                }
                secondary={
                    <Box display="flex" flexDirection="column" p={0} m={0}>
                        <Box width={1} flexDirection="row" fontStyle="bold" fontSize={18} textAlign="center" p={1} m={0}>
                            <Typography
                                component="span"
                                color="textPrimary"
                            >
                                {main.temp} K
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row" width={1} p={0} m={0}>
                            <WeatherItemDetail
                                icon={<ToysOutlined/>}
                                textLine1={`${wind.speed} m/s`}
                                textLine2={`${wind.deg} deg`}
                            />
                            <WeatherItemDetail
                                icon={<OpacityOutlined/>}
                                textLine1={`${main.humidity}%`}
                            />
                            <WeatherItemDetail
                                icon={<GetAppOutlined/>}
                                textLine1={`${main.pressure} hPa`}
                            />
                            <WeatherItemDetail
                                icon={<WbSunny/>}
                                textLine1={`${main.temp_min} K`}
                                textLine2={`${main.temp_max} K`}
                            />
                            <WeatherItemDetail
                                icon={<InvertColors/>}
                                textLine1={`${rain && rain['3h']? rain['3h']  : 0 } mm / 3hrs`}
                            />
                    </Box>
                </Box>
            }
            />
        </ListItem>
    );
};

export default withStyles(styles)(WeatherHourListItem);