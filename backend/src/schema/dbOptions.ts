const {NODE_ENV} = process.env;

export default {
  dialect: 'pg',
  minify: NODE_ENV === 'production',
};
