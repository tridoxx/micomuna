import React, { useEffect } from "react";
import '../css/style.css';


function Tweet() {

  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "white");
    anchor.setAttribute("twitter-timeline", "5");
    anchor.setAttribute("data-height",500);
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/PoliciaColombia?ref_src=twsrc%5Etfw");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);




  return (
    <div class="right2">
            <div class="noticias2">
                <section className="twitterContainer">
                  <h2>Tweets by @PoliciaColombia</h2>
                      <div className="twitter-embed"></div>
                </section>
            </div>


        </div>
  );
}

export default Tweet;
