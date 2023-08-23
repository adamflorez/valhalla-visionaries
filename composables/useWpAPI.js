export default () => {
  const wp = useRuntimeConfig().public.wordpressUrl;

  const get = async (endpoint) => {
    return useFetch(`${wp}${endpoint}`);
  };

  const getPosts = async (categories, page = 1, perPage = 9) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    return get(query);
  };

  const getPost = async (slug) => {
    let query = `posts?_embed&slug=${slug}`;
    return get(query);
  };

  const getPage = async (slug) => {
    let query = `pages?_embed&slug=${slug}`;
    return get(query);
  };
  return {
    get,
    getPosts,
    getPost,
    getPage,
  };
};
