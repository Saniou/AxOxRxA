import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sanio.aora',
    projectId: '669283f2000473b8da06',
    databaseId: '6692867c0002fc2e6536',
    usersCollectionId: '669286bb00058a90825a',
    videosCollectionId: '669287120035f0992a4d',
    storageId: '669297fb002f4df6b688',
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const createUser = async (email, password, userName) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            userName,
        )
        if (!newAccount) throw new Error

        const avatarUrl = avatars.getInitials(userName)

        await signIn(email, password)

        const newUser = await database.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                userName,
                avatar: avatarUrl
            }
        )

        return newUser;

    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (err) {
        throw new Error(err);
    }
}

export async function getCurrentUser() {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      const currentUser = await database.listDocuments(
        config.databaseId,
        config.usersCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }