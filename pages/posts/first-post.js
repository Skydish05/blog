import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/style1.module.css';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>My message</title>
      </Head>
      <img src="/images/photo1.jpg" alt="Pasha" className ={styles.imgg}  />

      <h2 className ={styles.txt} >Hello, my name is Kim Pavel. I am a freshman student studying at Hanyang University and majoring in Information Systems.
       I have just edited this page for CS course assignment :3      </h2>
      <h2 className ={styles.txt} ><Link className ={styles.myimg} href="https://www.instagram.com/xskydish/">My instagram</Link>   </h2>
      <h2 className ={styles.txt}>
        <Link className ={styles.txt}  href="/">Back to home</Link>
      </h2>
    </>
  );
}