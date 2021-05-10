const admin = require('firebase-admin');
const { v4 } = require('uuid');

const serviceAccount = require('../a-health-poem-service-account-key.json');
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

exports.handler = async function(event) {
  const data = JSON.parse(event.body);
  const { contribution } = data;
  const contributionRef = db.collection('contributions').doc(v4());

  await contributionRef.set({
    contribution,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
};