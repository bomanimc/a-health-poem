const admin = require('firebase-admin');

const serviceAccount = require('../a-health-poem-service-account-key.json');
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

exports.handler = async function() {
  const contributionsSnapshot = await db.collection('contributions').get();
  const contributions = [];
  contributionsSnapshot.forEach(doc => contributions.push(doc.data()));

  return {
    statusCode: 200,
    body: JSON.stringify({contributions}),
  };
};