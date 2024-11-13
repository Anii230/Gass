import Posts from "../components/Home/posts/Posts"
import Share from "../components/Home/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home
