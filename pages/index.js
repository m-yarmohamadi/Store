import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
<div className="header">
  <h1>جستجوی عناوین</h1>
  <input type="" name="" value=""/>
</div>
<div className="items">
  <div className="item">
    <img src="/image/DSC00404.jpg" alt=""/>
      <p>عنوان:</p>
      <h2>قیمت:</h2>
  </div>
  <div className="item">
    <img src="/image/DSC00404.jpg" alt=""/>
      <p>عنوان:</p>
      <h2>قیمت:</h2>
  </div>
  <div className="item">
    <img src="/image/DSC00404.jpg" alt=""/>
      <p>عنوان:</p>
      <h2>قیمت:</h2>
  </div>
</div>

    </main>
  );
}
