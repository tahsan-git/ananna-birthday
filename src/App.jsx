import { useState } from "react";
import "./App.css";

const memories = [
  {
    video: "video1.mp4",
    title: "🥹😅",
    message: "আপনি এত সুন্দর করে ভালোবাসতে জানেন! আর আপনি এভাবে ধরলে আসোলেই খুব সুন্দর মোমেন্ট সৃষ্টি হয়।😅 তানভির আর আপনাকে ভিষণ সুন্দর লাগতেছে। ❤️",
  },
  {
    video: "video2.mp4",
    title: "আপনার ঘর😌",
    message: "আপনি কত সুন্দর করে ঘেষে আপনার ঘরে আপনার হাজব্যান্ড এর সাথে বসে আছেন। আপনাদের জীবন সুন্দর হোক, ছবি টার মত হাসি খুশি কাটুক আপনার সারা টা জীবন🫶",
  },
  {
    video: "video3.mp4",
    title: "বিকাল, ঘাষ, প্রিয় মানুষ আর নদী দেখা।🥰",
    message: "আপনার জীবনে আপনি সকল স্বপ্ন ই পূরণ করে নিছেন। একটা মানুষ এর জীবনে আর কি চাওয়ার থাকে? পূরণ হওয়ার বাকি থাকে? এত সুন্দর করে কয়জন মানুষ এর ভাগ্যেই ঘুরা-ঘুরি থাকে?",
  },
  {
    video: "video4.mp4",
    title: "A dream ride with you",
    message: "আপনার হ্যাজব্যান্ড ভিষণ Caring and Romantic. কত সুন্দর আপনার পা হাতে ধরে রাখছে। আপনি কত টা মনের আনন্দে প্রেমিক এর বাইক এ চড়ে ঘুরতেছেন। এত সুন্দর সময়, স্মৃতি কেও কখনো ভুলতে পারে?",
  },
  {
    video: "video5.mp4",
    title: "Weather",
    message: "আপনার মনে পরে? আমি আপনাকে খুব আফসোস করে বলি যে, বৃষ্টিতে ভেজার স্বপ্ন পূরণ হলো নাহ। তখন হয়তো আপনি মনে মনে বলেন আরেহ! বৃষ্টিতে ভিজার ভিতর এত ফ্যান্টাসির কি আছে! আমি তো প্রিয় মানুষকে নিয়ে প্রায় ই বৃষ্টি বিলাশ করি।",
  },
  {
    video: "video6.mp4",
    title: "সাদা-মায়াবতি😍",
    message: "এত সুন্দর সাদা-মায়াবতি হাত টা টেনে নদী, বিকাল আর পরী দেখাতে নিয়ে যাচ্ছে। কত মায়া ভরা ভালোবাসা।",
  },
  {
    video: "video7.mp4",
    title: "এভাবে কি দেখো?",
    message: "এভাবে তাকিয়েই তো মন টা কেড়ে নিছো।",
  },
  {
    video: "video8.mp4",
    title: "Red Sharee",
    message: "আপনাকে শাড়ি তে ভিষণ সুন্দর লাগে। আর যদি হয় লাল শাড়ি + প্রিয় মানুষ পাশে থাকার মুহুর্ত।",
  },
  {
    video: "video9.mp4",
    title: "এই হাসি খুশি আপনাকে ভিষণ সুন্দর লাগে।😊",
    message: "আপনার জন্য কাঠগোলাপ ছিড়ে এনে দেওয়া আর আপনার এত বেশি খুশি হওয়া এগুলো আপনার লাইফ এর সব থেকে সুন্দর সময়।",
  },
  {
    video: "video10.mp4",
    title: "Elegant Hand",
    message: "আমি যখন আপনার হাত সুন্দর বলি তখন নাকি আপনার ভিষণ হাসি পায়?!🤣",
  },
  {
    video: "video11.mp4",
    title: "আপনার হাসি সুন্দর।😍",
    message: "আপনার চেহারা একটু কালো হয়ে গেছে? আহারেহ! যত্ন নিবেন নিজের।",
  },
];

function App() {
  const [showLetter, setShowLetter] = useState(false);

  const scrollToMemories = () => {
    document.getElementById("memories")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="floating-heart heart-one">♥</div>
        <div className="floating-heart heart-two">♡</div>
        <div className="hero-content">
          <span className="eyebrow">A LITTLE SURPRISE FOR YOU</span>
          <div className="hero-heart">♥</div>
          <h1>For My Dearest <span>Ananna</span></h1>
          <p>
            I made a little corner of the internet
            just to remind you how special you are to me.
          </p>
          <button className="primary-button" onClick={scrollToMemories}>
            Open Your Surprise <span>♡</span>
          </button>
          <div className="hero-footer">Made By Tahsan, just for you</div>
        </div>
      </section>

      <section className="memories section" id="memories">
        <div className="section-heading">
          <span className="eyebrow">A LITTLE COLLECTION OF LOVE</span>
          <h2>Things That Remind Me of You</h2>
          <p>Eleven little notes, each carrying a piece of my heart.</p>
        </div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <article className="memory-card" key={memory.video}>
              <div className="photo-frame">
                <video
                  src={`/videos/${memory.video}`}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={memory.title}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="photo-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="memory-caption">
                <h3>{memory.title}</h3>
                <p>{memory.message}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="letter-invitation">
          <span className="letter-icon">💌</span>
          <span className="eyebrow">SOMETHING FROM MY HEART</span>
          <h2>There Is a Letter for You</h2>
          <p>
            Some feelings are too precious to fit inside a little message.
            So I wrote them down just for you.
          </p>
          <button
            className="primary-button"
            onClick={() => setShowLetter(true)}
          >
            Open My Letter ♡
          </button>
        </div>
      </section>

      {showLetter && (
        <section className="letter-overlay" role="dialog" aria-modal="true">
          <div className="letter-paper">
            <button
              className="close-button"
              onClick={() => setShowLetter(false)}
              aria-label="Close letter"
            >
              ×
            </button>
            <span className="eyebrow">WRITTEN WITH LOVE</span>
            <div className="letter-decoration">🌷</div>
            <h2>Dearest Tanvir er Bow,</h2>
            <div className="letter-body">
              <p>
                প্রিয় মাইশা!
আমার তোমার প্রতি কোন অভিযোগ নেই। মন খারাপ নেই।
তবে অনেকগুলো প্রশ্ন আছে।
মনে করো বিশ্বাস করে নিলাম যে, বিয়া ২০২৫ সালে হইছে।
বিয়ার আগে ২-৩ বার জামাইর বাড়ি বেড়াতে যাওয়া।
তাও কাছে হলেও কথা ছিলো অনেক দূরে এটা কি কোন মানুষকে বললেই ভালো বলবে?
একা গেছিলা বেড়াতে নাকি কে গিয়েছিলো? প্রতিবার?
আর আমাকে যে, বললা ব্যাড টাচ তুমি পছন্দ করো না।
আমি জানি পছন্দ করো না, কিন্তু এই অপছন্দটা তোমার তানভির এর ক্ষেত্রে না।
তুমি ওরে জামাই ভাবো আর ভাবো তোমার ব্যাপার টা ওর হক্ব সেই হিসাবে ব্যাড টাচ পছন্দ করো না এটা বলো নাহ, বইলো তাহসান বা দুনিয়ার সকলের ক্ষেত্রে ব্যাড টাচ অপছন্দ।

যাইহোক, জীবনে সুন্দর সময়ের অনেক অনেক মূল্য। খারাপ সময়ে বুঝা যায় ভালো সময় কতটা গুরুত্বপূর্ণ।
তবে ধরে নেই, তোমার বিয়া হয় নাই।
এরপরে ২০২৫ সালে এসএসসি পরীক্ষার সময় আমার সাথে বিয়ার কথা একদম ফাইনাল বলছিলা না?
তখন কখনো আমাকে জানায়ছিলা? যে, তুমি যশোর বেড়ায় আসছো?

আর এত এত সুন্দর টাইম পার করছো, তোমাদের এত এত প্রেম তারপরে কিভাবে তখন মনে হইছিলো যে, আমার হবে?
আমার সাথে তো কখনোই তোমার এত প্রেম হয় নাই।

আর আমার হলেও তুমি এত কিছু ভুলে যেতে কিভাবে?


এরপরের বারে কত বড় মিথ্যা বলছো তা তো জানো তুমি।
কতটা জঘন্য রকমের অভিনয় করে গেছো।


তারপরে আমার সাথে যখন কথা বলছো তুমি বলছো যে, তোমাদের ভিতর সম্পর্ক ভালো নাহ।
অথচ দেখো, তুমি সূর্যনগর আসার আগে কি সুন্দর ছাদ এ টাইম পার করতেছো!
আবার এই যে, বাইক এর সাথে পিক।
বলবা আগের পিক?
নাহ, তোমার চেহারা কি আমি চিনি না?
তুমি হয়তো আমার শরীর দেখলে তোমার মাথায় তানভির চলে আসে আমার তো তেমন নাহ।
আমি চিনি তো...!
এই বোরখা পরে সেদিন আসলে নাহ শিরুয়াইল? ছিহঃ
ওর সাথে যেই বোরখা পরে ঘুরছো সেই বোরখা পরে আমার  পাশে বসছো!


আর তোমার সব জামা, বোরখা ই আমি দেখি।
এই জামা আর এই বোরখা তো এইবার ই দেখলাম।

সব কিছু মিলিয়ে আমার কাছে সব কিছুর কোন হিসাব মিলতেছে নাহ।
আর তুমি বলো যে, আমার জন্য ই মিথ্যা বলো - যেন আমি ভালো থাকি।
তাহলে ওকে টাচ করতে দাওনা,আমাকে ভালোবাসো সব ই কি আমি যেন ভালো থাকি তাই আমায় মিথ্যা বলো?
আমার তোমাকে এখন লিটারেলি সাইকো মনে হচ্ছে - যে হচ্ছে নিজের মনের ভিতর একটা গল্প বানায় আর ঐ গল্পকে ই একদম সত্যি ভেবে বসে।


আমার মনে হয় তোমার আমার সাথে কোন প্রকার কথা বলার অনুমতি নেই।
তাই তুমি আমার সাথে কোন প্রকার কথা বলার আর চেষ্টা করো নাহ।

আর এতদিন হয়তো আমাকে ভালো রাখতে কথা বলতে। এখন থেকে আমাকে ভালো রাখার দায়িত্ব তোমার না।
ভালো থাকবে...!
              </p>
            </div>
            <div className="letter-bottom">♡ &nbsp; ♡ &nbsp; ♡</div>
          </div>
        </section>
      )}

      <footer className="site-footer">
        Made with a little love and a lot of heart ♡
      </footer>
    </main>
  );
}

export default App;