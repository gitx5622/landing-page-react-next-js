import { Provider } from 'react-redux';
import { useStore } from '../dataStore';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

function TopRatedApp({ Component, pageProps }) {
  const store = useStore();

  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  );
}

export default TopRatedApp;
