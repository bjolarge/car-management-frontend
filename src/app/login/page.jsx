"use client"
import MyApp from '@/components/FpjsProvider'
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react'

// export async function getInitialProps(){
// // export async function getStaticProps(){
//   return {
//     props: {
//       appID: process.env.PASSAGE_APP_ID
//     }
//   };
// }

export default function Login() {
  const {isLoading, error, data, getData} = useVisitorData(
    {extendedResult: true},
    {immediate: true}
  )

  return (
    <MyApp>
    <div>
      <button onClick={() => getData({ignoreCache: true})}>
        Reload data
      </button>
      <p>VisitorId: {isLoading ? 'Loading...' : data?.visitorId}</p>
      <p>Full visitor data:</p>
      <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
    </div>
    </MyApp>
  )
}