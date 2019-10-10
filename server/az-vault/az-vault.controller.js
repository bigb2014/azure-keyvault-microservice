// keyvault-secrets
const DefaultAzureCredential = require('@azure/identity')
  .DefaultAzureCredential;
const SecretsClient = require('@azure/keyvault-secrets').SecretsClient;
// require('dotenv').config();

// // Build the URL to reach your key vault
// const credential = new DefaultAzureCredential();

// // Lastly, create our secrets client and connect to the service
// const client = new SecretsClient(process.env.VAULT_URL, credential);

// const now = new Date().toISOString();

// // set the name of the secret, key, cert you want to get the secret value for
// const secretName = 'ahatest';
// // getSecret(secretName);
// // /////////////////////////////////////////////////////////////////////////
// //     get the secret(password, encryption key, sensitive data)
// //
// // /////////////////////////////////////////////////////////////////////////
// async function getSecret(secret) {
//   try {
//     const latestSecret = await client.getSecret(secret);
//     // console.log(latestSecret.value);
//     console.log('Getting value of ' + latestSecret.value);
//     return latestSecret.value;
//   } catch (e) {
//     console.log('ERROR!' + e);
//     // console.error(e);
//     return e;
//   }
// }

// getSecret(secretName);
// 127.0.0.1:4040/api/azvault?secretName=ahatest
async function getSecret(req, res) {
  const secretName = req.query.secretName;
  try {
    // Build the URL to reach your key vault
    const credential = new DefaultAzureCredential();

    // Lastly, create our secrets client and connect to the service
    const client = new SecretsClient(process.env.VAULT_URL, credential);
    const latestSecret = await client.getSecret(secretName);
    // console.log(latestSecret.value);
    // console.log('Getting value of ' + latestSecret.value);
    // return res.status(200).json(latestSecret.value);
    return res.status(200).json(latestSecret);
  } catch (e) {
    // console.log('ERROR!' + e);
    // console.error(e);
    return res.status(500).json(e);
  }
}

module.exports = { getSecret };

// /////////////////////////////////////////////////////////////////////////
//  Create a new record(secret) in Azure key vault
//  secretName      need to set the name of the secret
//  secretValue     secret, password, that needs to be stored
//
// returns the following:
// { value: 'botest-secret-value',
//   id:
//    'https://east-prod-vault-mgmt.vault.azure.net/secrets/botest1/b73ea4775b214fb792b81de69bcb03ec',
//   properties:
//    { vaultUrl: 'https://east-prod-vault-mgmt.vault.azure.net',
//      name: 'botest1',
//      version: 'b73ea4775b214fb792b81de69bcb03ec',
//      enabled: true,
//      created: 2019-10-09T15:19:22.000Z,
//      updated: 2019-10-09T15:19:22.000Z,
//      recoveryLevel: 'Purgeable' } }
// /////////////////////////////////////////////////////////////////////////
// const setSecretName = 'botest1';
// const setSecretValue = 'botest-secret-value';
// // createNewSecret(setSecretName,setSecretValue )

// async function createNewSecret(setSecretName, setSecretValue) {
//   try {
//     const result = await client.setSecret(setSecretName, setSecretValue);
//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log('ERROR!');
//     console.error(e);
//     return e;
//   }
// }

// // Create a new secret and also set additional attributes
//  This function also creates a secret but
//
//
// /////
// createNewSecret2(setSecretName,setSecretValue )
// const setSecretName2 = 'botest2';
// const setSecretValue2 = 'botest-secret-value2';
// createNewSecret2(setSecretName2, setSecretValue2);

// async function createNewSecret2(setSecretName2, setSecretValue2) {
//   try {
//     const result = await client.setSecret(setSecretName2, setSecretValue2, {
//       tags: {
//         Application: 'BIQ',
//         Purpose: 'S3_Access_Key',
//         channelParnet: 'CP_NAME',
//         s3_bucket_url: 's3_bucket_url',
//         Created_Date: now
//       }
//     });
//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log('ERROR!');
//     console.error(e);
//     return e;
//   }
// };
