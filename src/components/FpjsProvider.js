import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'


function MyApp() {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: "HN4NqtebLvejzHz6BBuA",
        // apiKey: process.env.PUBLIC_API_KEY,
      }}
    >
    </FpjsProvider>
  )
}

export default MyApp