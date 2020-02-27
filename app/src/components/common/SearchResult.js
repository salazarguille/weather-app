import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WeatherDaysList from '../list/WeatherDaysList';
import CircularProgress from '@material-ui/core/CircularProgress';
import CityDetails from './CityDetails';

const SearchResult = function (props) {    
    const { result } = props;

    if(result.processing) {
        return (
            <Box
                width={1}
                flexDirection="column"
                textAlign="center"
                p={2}>
                <CircularProgress/>
                <Typography variant="body2" component="p" color="textSecondary">
                    Searching weather...
                </Typography>
            </Box>
        );
    }

    if(result.result === undefined || result.result.data === undefined) {
        return (
            <Box
            width={1}
            flexDirection="row"
            textAlign="center"
            p={2}>
                Please type a USA zip code and click on search icon. ZIP code examples: 90404 or 90404.
            </Box>
        );
    }
    return (
        <Box
            width={1}
            flexDirection="row"
            textAlign="center"
            p={2}>
            <CityDetails
                city={result.result.data.city}
                uvi={result.result.data.uvi}
            />
            <WeatherDaysList
                items={result.result.data.weather}
                city={result.result.data.city}
                uvi={result.result.data.uvi}
            />
        </Box>
    );
};

export default SearchResult;
  