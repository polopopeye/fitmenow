import RootLayout from '@/app/components/layout';
// import HooksContainer from '@/app/hooks/hooksContainer';
// import store from '@/app/store/store';
// import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: any) {
  return (
    <RootLayout>
      {/* <Provider 
        store={store}
        > */}
      <Component {...pageProps} />
      {/* <HooksContainer /> */}
      {/* </Provider> */}
    </RootLayout>
  );
}
export default MyApp;
