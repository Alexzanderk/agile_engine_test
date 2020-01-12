import { datamuseService } from '../../services/datamuse.service';

export const synonymsActions = {
  SHOW_SYNONYMS: 'SHOW_SYNONYMS',
  GET_SYNONYMS_REQUEST: 'GET_SYNONYMS_REQUEST',
  GET_SYNONYMS_SUCCESS: 'GET_SYNONYMS_SUCCESS',
  GET_SYNONYMS_FAIL: 'GET_SYNONYMS_FAIL',
};

export const showSynonyms = word => {
  return async (dispatch, getState) => {
    try {
      const filteredWord = getState().list.sentences.filter(item => item.value === word)[0];
      if (filteredWord) {
        dispatch({
          type: synonymsActions.SHOW_SYNONYMS,
          payload: { filteredWord },
        });
      } else {
        dispatch({ type: synonymsActions.GET_SYNONYMS_REQUEST });

        const { data, status } = await datamuseService.getSynonym({ ml: word });

        if (status === 200) {
          dispatch({
            type: synonymsActions.GET_SYNONYMS_SUCCESS,
            payload: { value: data },
          });
        }
      }
    } catch (error) {
      dispatch({ type: synonymsActions.GET_SYNONYMS_FAIL });
    }
  };
};
