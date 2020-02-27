import { executeGet } from '../utils'
import { getBackendApiUrl } from '../../config'

export class SearchService {

  async search(country, zipCode) {
    const url = `${getBackendApiUrl()}/weather/${country.toLowerCase()}/${zipCode}`;
    const searchResult = await executeGet(url);
    return searchResult;
  }
}
