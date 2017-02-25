const trueEnv = process.env.NODE_ENV;
const envs = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TESTING: 'testing',
};

function getServerBase(env = trueEnv) {
  switch (env) {
    case (envs.DEVELOPMENT):
      return '/';
    case (envs.TESTING):
      return '/';
    default:
      return '/';
  }
}

function makeApiPath(path) {
  const serverBase = getServerBase();
  return `${serverBase}api/${path}`;
}

const paths = {
  api: {
    auth: {
      LOGIN: makeApiPath('auth/login'),
      PROFILE: makeApiPath('auth/profile'),
    },
  },
  appPaths: {
    home: {
      path: '/'
    },
    login: {
      path: '/login',
    },
    profile: {
      path: '/profile',
    },
  },
};

export { envs, paths, makeApiPath, getServerBase };
