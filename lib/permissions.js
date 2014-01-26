ownsDocument = function(userId, doc) {
  return doc && userId === doc.userId;
};
