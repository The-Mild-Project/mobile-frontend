import * as SecureStore from "expo-secure-store";

class Storage {
    constructor() {

    }

    retrieve(key) {
        const retrieveItem = async (key) => {
            try {
                const retrievedItem = await SecureStore.getItemAsync(key);
                return retrievedItem;
            } catch (error) {
                console.log(error.message);
            }
        };
        return retrieveItem(key)
    }

    add(key, value) {
        const setItem = async (key, value) => {
            try {
                await SecureStore.setItemAsync(key, value);
            } catch(e) {
                console.log(e);
            }
        };
        return setItem(key, value)
    }

}

export default Storage;
