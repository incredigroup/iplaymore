import Videos from "../../src/components/Videos";
import Register from "../../src/components/Register";
import Home from "../../src/components/Home";
import Game from "../../src/components/Game";
import Layout from "../../src/layouts/Layout";
import Bonfire from "../../src/components/Bonfire";
import Marketplace from "../../src/components/Marketplace";
import EmptyPage from "../../src/components/EmptyPage";
import { useRouter } from 'next/router'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const Index = ({ videosData, bonfireData , marketplaceData}) => {
  const router = useRouter()

  

  const { route } = router.query
  return (
    <Layout >
      <Home route={route}/>
      <Bonfire data={bonfireData}/>
      <Videos data={videosData} />
      <Game />
      <Register route={route}/>
      <Marketplace route={marketplaceData} />
      <EmptyPage/>
    </Layout>
  );
};

export default Index;


export async function getServerSideProps() {
  const videosRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLvEM_7dT9mGC-daRqTVb5bgwcEGQ1sPB8&key=${process.env.YOUTUBE_API_KEY}`
  );


  const bonfireRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLvEM_7dT9mGDjLAAJBMUgm4qpCzCtLAXm&key=${process.env.YOUTUBE_API_KEY}`
  );

  const marketplaceRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLvEM_7dT9mGDjLAAJBMUgm4qpCzCtLAXm&key=${process.env.YOUTUBE_API_KEY}`
  );

  const videosData = await videosRes.json();
  const bonfireData= await bonfireRes.json();
  const marketplaceData = await marketplaceRes.json();
  return {
    props: {
      videosData,
      bonfireData,
      marketplaceData
    },
  };
}

