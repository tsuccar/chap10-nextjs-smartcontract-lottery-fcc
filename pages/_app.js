import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from "web3uikit";

function MyApp({ Component, pageProps }) {


  return (
     /* false = hook on server to add some more featuers*/
     <MoralisProvider initializeOnMount={false}>  
      <NotificationProvider>
      <Component {...pageProps} />
      </NotificationProvider>
     </MoralisProvider>
  )
}

export default MyApp
