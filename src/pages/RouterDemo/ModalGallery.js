import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.
export default function ModalGallery(props) {
  window.previousLocation = props.location;
  return (
    <Router basename={props.baseURL}>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch(props) {
  let location = useLocation();
  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;
  return (
    <div style = {{ 
        marginTop: "40px"
      }}>
      <Switch location={background || location}>
        <Route exact path="/ModalGallery" children={<Home />} />
        <Route path="/ModalGallery/gallery" children={<Gallery />} />
        <Route path="/ModalGallery/img/:id" children={<ImageView />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/ModalGallery/img/:id" children={<Modal />} />}
    </div>
  );
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  );
}

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 600,
        background: color
      }}
    />
  );
}

function Home() {
  return (
    <div>
      <Link to="/ModalGallery/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/ModalGallery/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/ModalGallery/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

function GoBack() {
  let history = useHistory();
  return (
    <div>
      <button type="button" onClick={()=>{
        history.push({
            pathname: '/ModalGallery'
        })
      }}>
          上一頁
      </button>
    </div>
  )
}

function Gallery() {
  let location = useLocation();
  return (
    <div>
      {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/ModalGallery/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
            style={{
              display:"flex",
              margin: "20px"
            }}
          >
            <Thumbnail color={i.color} />
            <p 
              style={{
                margin: "20px"
              }}
            >{i.title}</p>
          </Link>
      ))}
      <GoBack />
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
      <GoBack />
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.push({
      pathname: '/ModalGallery/gallery',
  });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        alignItems: "center",
        zIndex: 1
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
          borderRadius: "10px 50px",
          transform: "rotate( -1deg )"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}
