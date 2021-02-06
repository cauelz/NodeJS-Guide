const pageNotFound = { pageTitle: 'Page Not Found' };

exports.get404 = (req, res, next) => {
  res.status(404).render('404', pageNotFound);
}