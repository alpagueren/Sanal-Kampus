import isMobile from 'utils/isMobile';

/* set your data here */
const email = 'hakan.ulas.d@gmail.com';
const domain = 'Sanal Kampus'
/* ***************** */

const repository = 'https://github.com/hakanulass/Sanal-Kampus';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Component ın yüklenmesi sırasında bir sorun oluştu :((',
  },
  images: {
    failed: 'Resim yüklenirken sorun oluştu :(',
  },
  404: 'Hayırdır ney baktın ??',
};

const copyright = {
  title: 'copyright © ',
  link: domain,
};

const themes = {
  light: {
    palette: {
      type: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },

  dark: {
    palette: {
      type: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        light: '#7986cb',
        main: '#333',
        dark: '#303f9f',
        contrastText: '#fff',
      },
    },
  },
};

const cancelationMessage = 'operation is manually canceled';

const dateFormat = 'MMMM DD, YYYY';

const title = 'Sanal Kampüs';

const themePair = ['dark', 'light'];

const notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 3000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const giphy404 = 'https://giphy.com/embed/8L0Pky6C83SzkzU55a';

export {
  messages,
  cancelationMessage,
  dateFormat,
  copyright,
  email,
  domain,
  repository,
  loader,
  title,
  themePair,
  giphy404,
  notifications,
  themes,
};
