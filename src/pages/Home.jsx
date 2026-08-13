import Slider from "../components/Slider";
import { Link } from "react-router-dom";

function Home({ pageData }) {

  return (

    <main className="main-page">


      <section className="banner-section">

        <h1>
          {pageData.heading}
        </h1>

        <p>
          {pageData.description}
        </p>

        <Link to="/edit">
          Edit Homepage
        </Link>

      </section>


      <section className="slider-section">

        <h2>
          Test Slider
        </h2>

        <Slider
          slides={pageData.slides}
        />

      </section>

    </main>

  );

}

export default Home;