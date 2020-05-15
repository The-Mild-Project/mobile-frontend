# Food App Mobile App
​This is the mobile application client for our Food project. It is a react native application that uses [expo](https://docs.expo.io/).
​
## Building the Application Locally
Node and the Explo CLI are required to run the application. 

For Node, ​we recommend the latest stable version- but the maintenance and active LTS releases will also work. 

Install expo-cli using the following command `npm install -g expo-cli` 

Once expo is installed, you can download the required packages with `yarn install`.

1. `yarn test` - Run tests. This project uses jest to orchestrate tests. This is a more or less out of the box implementation, with a test for every screen. [Learn more about jest here](https://jestjs.io/docs/en/tutorial-react-native). 
2. `expo start` - Start the application
​
### Configuration
​
Google oauth requires you to create an application using the google developer console.  

Once you done this, you'll need to create a local configuration file and import the variables ANDROIDCLIENTID and IOSCLIENTID. 

To change the API destinations of the application, you'll need to modify the URLs found in the apis directory.
​
## CI/CD
​
CI/CD Process is implemented using Github Actions. The action is initiated on a merge into master, or on a direct push to master. It follows these steps:
 
1. Sets up Node on machine
2. Sets up expo project and installs required packages
3. Runs test suite using jest
4. Builds iOS and Android bundles and publishes them to endpoint on Expo site associated with this project (Designated in Github Secrets)