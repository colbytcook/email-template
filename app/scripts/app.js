import moduleRegistry from './modules/'
import {utilities} from './modules/utilities/utilities.js';

if(utilities.storageAvailable){
    utilities.saveToStorage()
}

moduleRegistry.init()
