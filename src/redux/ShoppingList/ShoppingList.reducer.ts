import {
  ADD_CURRENT_LIST,
  ADD_ELEMENT,
  ARCHIVE_LIST,
  DELETE_LIST,
  GET_ARCHIVED_LISTS,
  GET_CURRENT_LISTS,
  REMOVE_ELEMENT,
} from './ShoppingList.action';
import {listProps} from '../types';

export interface INITIAL_STATE_PROPS {
  currentLists: {
    list: Array<listProps>;
    loading: boolean;
    errors: any;
  };
  archivedLists: {
    list: Array<listProps>;
    loading: boolean;
    errors: any;
  };
}

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  currentLists: {
    list: [],
    loading: false,
    errors: false,
  },
  archivedLists: {
    list: [],
    loading: false,
    errors: false,
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * GET_CURRENT_LISTS
     */
    case GET_CURRENT_LISTS.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
      };
    }
    case GET_CURRENT_LISTS.resolved: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case GET_CURRENT_LISTS.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * GET_ARCHIVED_LISTS
     */
    case GET_ARCHIVED_LISTS.pending: {
      return {
        ...state,
        archivedLists: {
          ...state.archivedLists,
          loading: true,
        },
      };
    }
    case GET_ARCHIVED_LISTS.resolved: {
      return {
        ...state,
        archivedLists: {
          ...state.archivedLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case GET_ARCHIVED_LISTS.rejected: {
      return {
        ...state,
        archivedLists: {
          ...state.archivedLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * ARCHIVE_LIST
     */
    case ARCHIVE_LIST.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
        archivedLists: {
          ...state.archivedLists,
          loading: true,
        },
      };
    }
    case ARCHIVE_LIST.resolved: {
      return {
        ...state,
        archivedLists: {
          ...state.archivedLists,
          loading: false,
          list: action.archiveList,
        },
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.currentList,
        },
      };
    }
    case ARCHIVE_LIST.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
        archivedLists: {
          ...state.archivedLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * DELETE_LIST
     */
    case DELETE_LIST.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
      };
    }
    case DELETE_LIST.resolved: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case DELETE_LIST.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * ADD_CURRENT_LIST
     */
    case ADD_CURRENT_LIST.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
      };
    }
    case ADD_CURRENT_LIST.resolved: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case ADD_CURRENT_LIST.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * ADD_ELEMENT
     */
    case ADD_ELEMENT.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
      };
    }
    case ADD_ELEMENT.resolved: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case ADD_ELEMENT.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    /**
     * REMOVE_ELEMENT
     */
    case REMOVE_ELEMENT.pending: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: true,
        },
      };
    }
    case REMOVE_ELEMENT.resolved: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          list: action.payload,
        },
      };
    }
    case REMOVE_ELEMENT.rejected: {
      return {
        ...state,
        currentLists: {
          ...state.currentLists,
          loading: false,
          errors: action.payload,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
