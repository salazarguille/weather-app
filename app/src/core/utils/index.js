import axios from 'axios';
import { ServerError } from '../entities/servererror';

export const executeRequest = async (executeFunction) => {
  try {
    const result = await executeFunction()
    return result
  } catch (error) {
    if(error.message ===  'Network Error') {
      throw new Error('We are solving some internal issues. Please, try it again later.');
    }
    const {
      response: { data, status },
    } = error;
    if (status >= 500) {
      throw new ServerError(
        'Request couldn not be processed. Please contact to support/admin.',
        status,
        error
      );
    }
    if (status >= 400) {
      throw new Error(`${data.message || data}`);
    }
    throw new Error('Invalid request.')
  }
}

export const executeGet = async (url) => {
  const get = async () => {
    const { data } = await axios.get(url);
    return data;
  };
  const response = await executeRequest(get);
  return response;
};

export const isZipCodeANumber = zipCode => {
  return !isNaN(zipCode) && !zipCode.includes('e') && !zipCode.includes('E');
};

export const isValidZipCodeLength = zipCode => {
  return zipCode.length >= 2 && zipCode.length <= 5;
};