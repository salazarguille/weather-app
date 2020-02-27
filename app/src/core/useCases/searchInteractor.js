import { InvalidValueError } from '../entities/invalidValue';
import { isZipCodeANumber, isValidZipCodeLength } from '../utils';

export class SearchInteractor {
  constructor(searchService) {
    this.searchService = searchService;
  }

  async search(country, zipCode) {
    if(!isValidZipCodeLength(zipCode)) {
      throw new InvalidValueError('ZIP code length must be between 2-5 digits.');
    }
    if(!isZipCodeANumber(zipCode)) {
      throw new InvalidValueError('ZIP code must be numeric.');
    }
    return this.searchService.search(country, zipCode)
  }
}
