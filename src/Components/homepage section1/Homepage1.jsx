import React from "react";
import "./homepage1.css";
import IMG from './image.png';

const Homepage1 = () => {
  return (
    <div>
      <section className="homeSection1">
        <div className="nav">
          <img src="./download.png" alt="" />
          <a href="" className="active">
            Home
          </a>
          <a href="">About Us</a>
          <a href="">FAQ</a>
          <a href="">Roadmap</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>

          <button className="download-btn">Download Now</button>
          <div className="yellow-line">
            <a href="">
              Start earning high yields on 15 more coins.{" "}
              <span> Download now.</span>
            </a>
          </div>
        </div>

        <div className="page1">
          <h1>Earn crypto every</h1>
          <h1>second on Flint</h1>
          <h3>
            No lock-in. No hidden fees. Only secure yields for your crypto.
          </h3>
          <input type="text" name="email" placeholder="Enter your email" />
          <button>Start earning</button>
        </div>
      </section>
      <section className="homeSection2">
            <img src={IMG} alt="" />
        <div>
          <div className="content">
            <h1>Maximised returns,</h1> <h1>minimised risks</h1>
            <p>
              Crypto wealth management is all about striking a balance. And we
              know how to. Earn returns on your coins, without overthinking the
              risks.
            </p>
          </div>
          <div className="content">
            <h1>For a lot of coins, on a </h1> <h1>lot of chains</h1>
            <p>
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins you have, and some more, can be invested on Flint, using your favourite networks.
            </p>
          </div>
          <div className="content">
            <h1>Where interest is </h1> <h1>earned every second</h1>
            <p>
            Don’t wait. Have your interest added to your portfolio literally every second. And watch your crypto wealth grow in real-time.
            </p>
          </div>
          <div className="content">
            <h1>Like a crypto savings </h1> <h1>account, but better</h1>
            <p>There are no lock-ins on Flint. Even while earning high returns on your crypto, you have the ability to withdraw at any time.
            </p>
          </div>
          <div className="content">
            <h1>All cash, no cache</h1>
            <p>You earn returns in the same cryptocurrency that you invest. There are no twisted terms or token rewards to keep you away from your wealth.
            </p>
          </div>
       </div>
      </section>
      <section className="aboutUs"></section>
    </div>
  );
};

export default Homepage1;
