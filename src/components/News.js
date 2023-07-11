import React, { Component } from 'react';
import Newsitems from './Newsitems';
import './SampleOutput'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles:  [
        {
          "source": {
            "id": null,
            "name": "The Tribune India"
          },
          "author": "The Tribune India",
          "title": "Breach in SYL canal at Rajpura - The Tribune India",
          "description": null,
          "url": "https://www.tribuneindia.com/news/punjab/breach-in-syl-canal-at-rajpura-524255",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101625879,width-1070,height-580,imgsize-27172,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-07-10T05:13:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Firstpost"
          },
          "author": "studio18",
          "title": "Best Testosterone Booster for Males over 40 - Top 5 Testosterone Booster Supplements - Firstpost",
          "description": "Several testosterone-boosting products for men can raise the bodys free testosterone levels.",
          "url": "https://www.firstpost.com/health-supplement/best-testosterone-booster-for-males-over-40-top-5-testosterone-booster-supplements-12840202.html",
          "urlToImage": "https://images.firstpost.com/wp-content/uploads/2023/07/TestosteroneBooster_640x320_1.jpg",
          "publishedAt": "2023-07-10T05:02:40Z",
          "content": "As men age, their testosterone levels usually decline, which can have various effects. Several detrimental effects, such as increased If you are experiencing belly fat, mood swings, muscle loss, exha… [+22685 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "etimes.in",
          "title": "Jawan Prevue: Shah Rukh Khan is back with a bang, the Atlee directorial scores high on action - Indiatimes.com",
          "description": "The much awaited prevue of Jawan is finally out. The action-thriller, directed by Atlee, stars Shah Rukh Khan in the lead role, along with Nayanthara,",
          "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/jawan-prevue-shah-rukh-khan-is-back-with-a-bang-the-atlee-directorial-scores-high-on-action/articleshow/101626669.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101626585,width-1070,height-580,imgsize-260996,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-07-10T05:01:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Sergio Ramos Montoya",
          "title": "Smartphone repair from home: A growing trend among brands - HT Tech",
          "description": "As cell phones have evolved and enhanced their features over the years, their upkeep and repair has become even more complex.",
          "url": "https://tech.hindustantimes.com/mobile/news/smartphone-repair-from-home-a-growing-trend-among-brands-71688963779303.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/10/1600x900/kilian-seiler-PZLgTUAhxMM-unsplash_1688964675705_1688964688947.jpg",
          "publishedAt": "2023-07-10T04:54:39Z",
          "content": "As cell phones have evolved and enhanced their features over the years, their upkeep and repair has become even more complex. Old brick cell phones were damage-resistant and when they did get busted,… [+3594 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gadgets360.com"
          },
          "author": "Nithya P Nair, David Delima",
          "title": "Oppo Reno 10 5G Series Price in India Leaked Again Ahead of Launch Today: Details - Gadgets 360",
          "description": "Oppo is all set to unveil the Oppo Reno 10 5G series in India on July 10. A tipster has now suggested the pricing details of the Oppo Reno 10, Reno 10 Pro, and Reno 10 Pro+. The company has teased the RAM and storage configurations as well as colour options o…",
          "url": "https://www.gadgets360.com/mobiles/news/oppo-reno-10-pro-plus-5g-series-price-in-india-launch-july-10-leak-4192719",
          "urlToImage": "https://i.gadgets360cdn.com/large/oppo_reno_10_5g_series_1684928445550.jpg",
          "publishedAt": "2023-07-10T04:43:28Z",
          "content": "Oppo Reno 10 5G series comprising the vanilla Oppo Reno 10, Reno 10 Pro, and Reno 10 Pro+ is all set to go official in India later today. Ahead of the launch, the price in India and specifications of… [+3006 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": null,
          "title": "Stock Market LIVE Updates: Sensex gains 250 pts, Nifty at 19,400; Cyient DLM list with 51% premium - Moneycontrol",
          "description": "Sensex Today | Stock Market LIVE Updates: Reliance Industries, Bajaj Auto, Hero MotoCorp, Tata Motors and HDFC Life were among major gainers on the Nifty, while losers were HCL Technologies, Divis Laboratories, TCS, Wipro and Tech Mahindra. Information Techno…",
          "url": "https://www.moneycontrol.com/news/business/markets/stock-market-live-sensex-nifty-50-share-price-gift-nifty-latest-updates-10-07-2023-10929831.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/07/Market_up-1-770x433.jpeg",
          "publishedAt": "2023-07-10T04:33:17Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Live: SpaceX launches Falcon 9 with 22 Starlink satellites aboard - The Independent",
          "description": "SpaceX launches a Falcon 9 with 22 Starlink satellites aboard. This is the 16th flight for the first stage booster supporting this mission, which previously ...",
          "url": "https://www.youtube.com/watch?v=5ZQmeQvEQ5s",
          "urlToImage": "https://i.ytimg.com/vi/5ZQmeQvEQ5s/hqdefault.jpg",
          "publishedAt": "2023-07-10T04:23:07Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "Lakshya Sen wins Canada Open title beating All England champion Li Shi Feng - Times of India",
          "description": "Badminton News: Commonwealth Games champion Lakshya Sen put up a remarkable performance to secure his second BWF Super 500 title by defeating Li Shi Feng of China 21-",
          "url": "https://timesofindia.indiatimes.com/sports/badminton/lakshya-sen-wins-canada-open-title-beating-all-england-champion-li-shi-feng/articleshow/101625669.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101625879,width-1070,height-580,imgsize-27172,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-07-10T04:10:00Z",
          "content": "Brilliant Brook and Wood drag England back into Ashes series"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "ETMarkets.com",
          "title": "Stocks to buy today: Tata Motors, SBI among top 6 trading ideas for 10 July 2023 - Economic Times",
          "description": "On the weekly options front, the maximum Call OI is placed at 19400 and then towards 19500 strikes while the maximum Put OI is placed at 19400 and then towards 19300 strikes. Call writing is seen at 19400 then 19500 strike while Put writing is seen at 19200 t…",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/stocks-to-buy-today-tata-motors-sbi-among-top-6-trading-ideas-for-10-july-2023/articleshow/101625345.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101625329,width-1070,height-580,imgsize-53880,overlay-etmarkets/photo.jpg",
          "publishedAt": "2023-07-10T03:47:00Z",
          "content": "Indian market is likely to consolidate on Monday tracking mixed global cues.The S&amp;P BSE Sensex fell more than 500 points while the Nifty50 closed below 19400 levels on Friday.\r\nIndia VIX was down… [+1814 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "SAT to give verdict on Zee promoters' plea against Sebi order today - Moneycontrol",
          "description": "The appellate tribunal had reserved the case for orders on June 27 after hearing both Goenka and SEBI at length.",
          "url": "https://www.moneycontrol.com/news/business/sat-to-give-verdict-on-zee-promoters-plea-against-sebi-order-today-10930061.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/07/ZEEL-580x435.jpg",
          "publishedAt": "2023-07-10T03:45:11Z",
          "content": "The Securities and Appellate Tribunal (SAT) will today give its judgement on appeals filed by Zee Entertainment Enterprises promoters against an order by the Securities and Exchange Board of India (S… [+1484 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "iPhone 15 Always-on feature: What leaks are indicating - HT Tech",
          "description": "As iPhone 15 launch nears, the leaks about the Always-on feature are acquiring quite a momentum.",
          "url": "https://tech.hindustantimes.com/mobile/news/iphone-15-always-on-feature-what-leaks-are-indicating-71688960021016.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/07/10/1600x900/quinn-battick-SKVblbjg_VU-unsplash_1685341851896_1688960057238.jpg",
          "publishedAt": "2023-07-10T03:41:37Z",
          "content": "The launch of the iPhone 15 series is getting closer and its mass production will begin in August, some analysts have suggested. However, what is really grabbing attention is the iPhone 15 Always-on … [+1562 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "POLITICO.eu"
          },
          "author": "Ashleigh Furlong",
          "title": "What happens when HIV becomes a crime - POLITICO Europe",
          "description": "UNAIDS argues that criminalization undermines efforts to prevent new infections and end AIDS as a public health threat.",
          "url": "https://www.politico.eu/article/hiv-criminalization-infection-crime-unaids-aids-health-threat/",
          "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/07/03/GettyImages-459779448-scaled.jpg",
          "publishedAt": "2023-07-10T03:38:59Z",
          "content": "Press play to listen to this article\r\nVoiced by artificial intelligence.\r\nLONDON James life was irrevocably changed the day his name, photo, address and place of work were plastered on a news website… [+5447 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Several Dead As North India Rain Washes Away Roads And Records - NDTV",
          "description": "Heavy rain will continue in most parts of northwest India over the next few days, the weather office has said.",
          "url": "https://www.ndtv.com/india-news/heavy-rain-batters-north-india-more-showers-predicted-today-4190636",
          "urlToImage": "https://c.ndtvimg.com/2023-07/m9e2a7ig_rain_625x300_09_July_23.jpg",
          "publishedAt": "2023-07-10T03:37:00Z",
          "content": "North India Rains: Waterlogging led to traffic jams in several areas\r\nNew Delhi: At least 12 people have died in the past two days as heavy rain pounded several parts of north India. The weather offi… [+2564 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Are Breakfast Cereals As Healthy As They Claim? Find Out The Best Way To Consume Them - NDTV Food",
          "description": "Breakfast cereals can trick us into eating too much sugar without realizing it. Let's figure out the best way to eat them without harming our health.",
          "url": "https://food.ndtv.com/health/are-breakfast-cereals-as-healthy-as-they-claim-find-out-the-best-way-to-consume-them-4192641",
          "urlToImage": "https://c.ndtvimg.com/2023-07/tj60sh4o_cereal_625x300_10_July_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-07-10T03:31:54Z",
          "content": "When we steer towards a healthy diet, breakfast cereals often find their way into our pantry. Promising a multitude of nutrients like fibre, vitamins, and minerals, these boxed cereals seem like the … [+3342 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "AFP",
          "title": "Wimbledon curfew halts Novak Djokovic as Iga Swiatek, Elina Svitolina enter quarters win epic wins - Indiatimes.com",
          "description": "Tennis News: Iga Swiatek saved two match points while Elina Svitolina triumphed in a stormy, politically-charged duel with Victoria Azarenka to set up a Wimbledon",
          "url": "https://timesofindia.indiatimes.com/sports/tennis/wimbledon-2023/wimbledon-curfew-halts-novak-djokovic-as-iga-swiatek-elina-svitolina-enter-quarters-win-epic-wins/articleshow/101623794.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-101624166,width-1070,height-580,imgsize-33404,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-07-10T03:03:00Z",
          "content": "Brilliant Brook and Wood drag England back into Ashes series"
        },
        {
          "source": {
            "id": null,
            "name": "The Tribune India"
          },
          "author": "The Tribune India",
          "title": "PGIMS Rohtak to vaccinate 3,000 healthcare workers against hepatitis-B - The Tribune India",
          "description": null,
          "url": "https://www.tribuneindia.com/news/haryana/pgims-rohtak-to-vaccinate-3-000-healthcare-workers-against-hepatitis-b-524309",
          "urlToImage": null,
          "publishedAt": "2023-07-10T01:32:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Affairscloud.com"
          },
          "author": null,
          "title": "Current Affairs 8, 9 & 10 July 2023 - AffairsCloud.com",
          "description": null,
          "url": "https://affairscloud.com/current-affairs-8-9-10-july-2023/",
          "urlToImage": null,
          "publishedAt": "2023-07-10T01:30:25Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Mid-day"
          },
          "author": null,
          "title": "Mumbai: DRDO scientist gave wrong laptop for forensic analysis, says ATS - mid-day.com",
          "description": "Further, investigators have also unearthed that Pradeep Kurulkar shared confidential contact details of his fellow scientists with the Pakistani honeypot",
          "url": "https://www.mid-day.com/mumbai/mumbai-crime-news/article/mumbai-drdo-scientist-gave-wrong-laptop-for-forensic-analysis-says-ats-23296969",
          "urlToImage": "https://images.mid-day.com/images/images/2023/jul/gave-wrong_d.jpg",
          "publishedAt": "2023-07-10T01:29:00Z",
          "content": "Further, investigators have also unearthed that Pradeep Kurulkar shared confidential contact details of his fellow scientists with the Pakistani honeypot masquerading as an Indian admirer\r\nPradeep Ku… [+6264 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Financial Express"
          },
          "author": "The Financial Express",
          "title": "Vande Bharat Express update: Indian Railways working tirelessly to produce Sleeper and Metro version of semi-high speed train - The Financial Express",
          "description": null,
          "url": "https://www.financialexpress.com/business/railways-vande-bharat-express-update-indian-railways-working-tirelessly-to-produce-sleeper-and-metro-version-of-semi-high-speed-train-3161565/",
          "urlToImage": null,
          "publishedAt": "2023-07-10T01:20:00Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Arijit Barman",
          "title": "Three private equity firms eye Rs 2,000-crore Adani Capital buyout - Economic Times",
          "description": "Adani Capital's management - led by former Lehman Brothers and Macquarie investment banker Gaurav Gupta, who joined the conglomerate in 2016 - owns around 10% of the company. Promoters own nearly 90%, which is up for grabs.",
          "url": "https://economictimes.indiatimes.com/news/company/corporate-trends/three-private-equity-firms-eye-rs-2000-crore-adani-capital-buyout/articleshow/101621971.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-101626278,width-1070,height-580,imgsize-13434,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-07-10T00:35:00Z",
          "content": "Mumbai: Private equity groups Bain Capital, Carlyle Group and Cerberus Capital Management are set to make binding bids in the next few weeks to buy out Gautam Adanis six-year-old shadow bank, Adani C… [+5274 chars]"
        }
      ],
    };
  }

  render() {
    return (
      <>
      <h1 className='text-center my-2'>Latest News</h1>
        <div className="container">
          <div className="row">
            {this.state.articles.length === 0 ? (
              <div>There are no headlines</div>
            ) : (
              this.state.articles.map((article) => (
                <div className="col-4" key={article.id}>
                  <Newsitems
                    title={article.title}
                    desc={article.description}
                    url={article.url}
                    imgurl={article.urlToImage}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container">
  <div className="row">
    <div className="col-md-6 d-flex justify-content-start">
      <button type="button" className="btn btn-dark">&larr; Previous</button>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <button type="button" className="btn btn-dark">Next &rarr;</button>
    </div>
  </div>
</div>

      </>
    );
  }
}

export default News;
