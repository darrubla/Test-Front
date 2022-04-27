const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_Id,
} = process.env

const firebaseApiKey = REACT_APP_FIREBASE_API_KEY,
const firebaseAuthDomain = REACT_APP_AUTH_DOMAIN,
const firebaseProjectId = REACT_APP_PROJECT_ID,
const firebaseStorageBucket = REACT_APP_STORAGE_BUCKET,
const firebaseMsgSenderId = REACT_APP_MESSAGING_SENDER_ID,
const firebaseAppId = REACT_APP_FIREBASE_APP_Id,

export {
  firebaseApiKey,
  firebaseAuthDomain,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMsgSenderId,
  firebaseAppId,
}