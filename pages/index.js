import Videos from "../src/components/Videos";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import Home from "../src/components/Home";
import Game from "../src/components/Game";
import Comic from "../src/components/Comic";
import Layout from "../src/layouts/Layout";
import Bonfire from "../src/components/Bonfire";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const Index = ({ videosData, bonfireData }) => {
  return (
    <Layout>
      <Home />
      <Bonfire data={bonfireData}/>
      <Comic/>
      <Game/>
      <Register />
      <Videos data={videosData} />
      <Login />
    </Layout>
  );
};

export async function getServerSideProps() {
  const videosRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLvEM_7dT9mGC-daRqTVb5bgwcEGQ1sPB8&key=${process.env.YOUTUBE_API_KEY}`
  );


  const bonfireRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLvEM_7dT9mGDjLAAJBMUgm4qpCzCtLAXm&key=${process.env.YOUTUBE_API_KEY}`
  );

  const videosData = await videosRes.json();
  const bonfireData= await bonfireRes.json();
  return {
    props: {
      videosData,
      bonfireData
    },
  };
}

export default Index;
