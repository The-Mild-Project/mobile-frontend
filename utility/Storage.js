import * as SecureStore from "expo-secure-store";

class Storage {

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

    remove(key) {
        const removeItem = async (key) => {
            try {
                await SecureStore.deleteItemAsync(key);
            } catch(e) {
                console.log(e);
            }
        };
        return removeItem(key);
    }

}

const instance = new Storage();
Object.freeze(instance);

export default instance;
