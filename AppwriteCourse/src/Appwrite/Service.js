import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

//VariableName in appwrite docs = client
const appwriteClient = new Client()

//We bring appwrite endpoint and ID from .env file
const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPIONT;
const APPWRITE_PROJECT_ID:string = Config.APPWRITE_PROJECT_ID;


class AppwriteService {
    account;

      //it wil talk to appwrite
  constructor(){
      appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
    }

//create a new record of user inside appwrite
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                //TODO: create login feature
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            Snackbar.show({
                text: (error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: createAccount() :: " + error);
            
        }
    }

    async login({email, password}: LoginUserAccount){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: loginAccount() :: " + error);
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount() :: " + error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount() :: " + error);
        }
    }
}

export default AppwriteService