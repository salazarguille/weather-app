/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */

export const isValidLatitude = lat => isFinite(lat) && Math.abs(lat) <= 90;

export const isValidLongitude = lng => isFinite(lng) && Math.abs(lng) <= 180;

export const isValidLatitudAndLongitud = (lat, lng) => isValidLatitude(lat) && isValidLongitude(lng);
