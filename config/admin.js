module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55f40bfcc32d849031e15ad32a28680d'),
  },
});
