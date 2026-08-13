import { Link } from "react-router-dom";
import {savePageData} from "../services/api";
function Edit({ pageData, setPageData }) {

  const savePage = async () => {

    try {

      const response = await savePageData(pageData);

      console.log(response);

      alert(
        "Page saved successfully!"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to save page."
      );

    }

  };

  const addSlide = () => {

    const newSlide = {
      id: Date.now(),
      image: "https://www.9mindia.in/wp-content/uploads/2026/05/staff-walking-through-an-office-2026-03-25-00-52-58-utc-1.webp",
      title: "New Slide",
      description: "New slide description."
    };

    setPageData({
      ...pageData,
      slides: [
        ...pageData.slides,
        newSlide
      ]
    });

  };


  const removeSlide = (slideId) => {

    const updatedSlides =
      pageData.slides.filter(
        (slide) => slide.id !== slideId
      );

    setPageData({
      ...pageData,
      slides: updatedSlides
    });

  };


  return (

    <main className="edit-page">

      <section className="editor-section">

        <h1>Edit Homepage</h1>

        <div className="form-group">

          <label>
            Heading
          </label>

          <input
            type="text"
            value={pageData.heading}
            onChange={(event) => {

              setPageData({
                ...pageData,
                heading: event.target.value
              });

            }}
          />

        </div>

        <div className="form-group">

          <label>
            Description
          </label>

          <textarea
            value={pageData.description}
            onChange={(event) => {

              setPageData({
                ...pageData,
                description: event.target.value
              });

            }}
          />

        </div>

        <h2>
          Slides
        </h2>

        {pageData.slides.map(
          (slide, index) => (

            <div
              className="slide-editor"
              key={slide.id}
            >

              <h3>
                Slide {index + 1}
              </h3>

              <div className="form-group">

                <label>
                  Image URL
                </label>

                <input
                  type="text"
                  value={slide.image}
                  onChange={(event) => {

                    const updatedSlides =
                      [...pageData.slides];

                    updatedSlides[index] = {
                      ...updatedSlides[index],
                      image: event.target.value
                    };

                    setPageData({
                      ...pageData,
                      slides: updatedSlides
                    });

                  }}
                />

              </div>

              <div className="form-group">

                <label>
                  Title
                </label>

                <input
                  type="text"
                  value={slide.title}
                  onChange={(event) => {

                    const updatedSlides =
                      [...pageData.slides];

                    updatedSlides[index] = {
                      ...updatedSlides[index],
                      title: event.target.value
                    };

                    setPageData({
                      ...pageData,
                      slides: updatedSlides
                    });

                  }}
                />

              </div>

              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  value={slide.description}
                  onChange={(event) => {

                    const updatedSlides =
                      [...pageData.slides];

                    updatedSlides[index] = {
                      ...updatedSlides[index],
                      description:
                        event.target.value
                    };

                    setPageData({
                      ...pageData,
                      slides: updatedSlides
                    });

                  }}
                />

              </div>


              {/* Remove */}

              <button
                type="button"
                onClick={() =>
                  removeSlide(slide.id)
                }
              >
                Remove Slide
              </button>

            </div>

          )
        )}


        {/* Add */}

        <div className="editor-actions">

          <button
            type="button"
            onClick={addSlide}
          >
            + Add Slide
          </button>

          <button
            type="button"
            onClick={savePage}
          >
            Save Changes
          </button>

        </div>

        <Link to="/">
         Back to Homepage
      </Link>

      </section>

    </main>

  );

}

export default Edit;