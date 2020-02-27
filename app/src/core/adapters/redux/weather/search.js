import { SearchInteractor } from '../../../useCases/searchInteractor'
import Message from '../../../entities/message'
import { SearchService } from '../../../services'

export const searchInitialState = {
  country: 'us',
  zipCode: undefined,
  processing: false,
  message: undefined,
  result: undefined,
}

// Actions
export const SearchActions = {
  Search: 'user/search',
  Success: 'user/search/success',
  Error: 'user/search/error',
  CleanMessage: 'user/search/cleanMessage',
}

// Reducer
export default (
  state = searchInitialState,
  action
) => {
  switch (action.type) {
    case SearchActions.Search:
      return {
        ...state,
        result: undefined,
        message: undefined,
        processing: action.payload.processing,
      }
    case SearchActions.Success:
      return {
        ...state,
        success: true,
        result: action.payload,
        processing: false,
        message: Message.newSuccess('Success'),
      }
    case SearchActions.CleanMessage:
      return {
        ...state,
        message: action.payload,
      }
    case SearchActions.Error:
      return {
        ...state,
        success: false,
        message: action.payload,
        processing: false,
      }
    default:
      return state
  }
}

// Action Creators
const createSearchUserInteractor = () => {
  const service = new SearchService();
  return new SearchInteractor(service);
}

export const searchUserErrorAction = (message) => {
  return {
    type: SearchActions.Error,
    payload: Message.newError(message),
  }
}

export const searchUserCleanMessageAction = () => {
  return {
    type: SearchActions.CleanMessage,
    payload: undefined,
  }
}

export const searchUserSuccessAction = (data) => {
  return {
    type: SearchActions.Success,
    payload: data,
  }
};

export const searchUserProcessingAction = () => {
  return {
    type: SearchActions.Search,
    payload: { processing: true },
  }
};

export const searchAction = (action) => {
  return async (dispatch) => {
    try {
      dispatch(searchUserProcessingAction());
      const interactor = createSearchUserInteractor();
      const searchResult = await interactor.search(action.country, action.zipCode);
      dispatch(searchUserSuccessAction(searchResult));
      dispatch(searchUserCleanMessageAction());
    } catch (error) {
      dispatch(searchUserErrorAction(error.message));
    }
  }
};

// Selectors
export const searchSelector = (state) => state.search;
