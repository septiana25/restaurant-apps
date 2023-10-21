const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlSplites = url.split('/');
    return {
      resoruce: urlSplites[1] || null,
      id: urlSplites[2] || null,
      verb: urlSplites[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resoruce ? `/${splitedUrl.resoruce}` : '/')
          + (splitedUrl.id ? '/:id' : '')
          + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;
