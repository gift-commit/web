import { fetch } from 'whatwg-fetch'
import Common from './common'

async function createAccount(account) {
    console.log("BRETT!")
    console.log(account)
    fetch('https://gifts.spradling.me/v1/accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
    }).then(Common.isSuccessful)
      .then(function(response) {
          return response.json()
      });
}

const GiftCommitClient = {
    createAccount
}

export default GiftCommitClient