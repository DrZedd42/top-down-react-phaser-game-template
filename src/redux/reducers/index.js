import { combineReducers } from 'redux';

// Reducers
import loadedAssetsReducer from './loadedAssetsReducer';
import gameDataReducer from './gameDataReducer';
import heroDataReducer from './heroDataReducer';
import mapDataReducer from './mapDataReducer';
import dialogReducer from './dialogReducer';
import battleReducer from './battleReducer';
import menuReducer from './menuReducer';
import textReducer from './textReducer';

export default combineReducers({
    loadedAssets: loadedAssetsReducer,
    heroData: heroDataReducer,
    mapData: mapDataReducer,
    game: gameDataReducer,
    dialog: dialogReducer,
    battle: battleReducer,
    menu: menuReducer,
    text: textReducer,
});
