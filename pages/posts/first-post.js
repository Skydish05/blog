import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My message</title>
      </Head>
      <img class = "images" src="/images/photo1.jpg" alt="Pasha"  />

      <h2 align = "middle">Hello, my name is Kim Pavel. I am a freshman student studying at Hanyang University and majoring in Information Systems. I have just edited this page for CS course assignment :3</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}