import Head from 'next/head'
import Layout from 'component/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <p>Hi. I’m Leo.</p>
      <p>
        I’m currently a software engineer at The Washington Post. Previously, I
        studied at Northwestern University, where I held multiple roles in
        student-run organizations.
      </p>
    </Layout>
  )
}
