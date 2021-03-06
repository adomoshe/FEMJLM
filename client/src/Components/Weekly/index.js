import React, { useContext } from "react";
import Header from '../Header/index';
import './style.css';
import Textbox from "../Textbox/index";

function Weekly() {

  return (
    <div>
      <Header>Meet Our Community</Header>

      <div className="container">
        <div className='row'>

          <div className="col-lg-6 col-md-12 col-sm-12 femstar">
            <div >
              <h5>Fem Star of the Week:</h5>
              <div className="fb-post" data-href="https://www.facebook.com/FemJLM/posts/3066955370027655" data-show-text="true" data-width=""><blockquote cite="https://developers.facebook.com/FemJLM/posts/3066955370027655" class="fb-xfbml-parse-ignore"><p>Elena Liberte is the Director for Strategic Partnerships and HR at Made in Jerusalem.  Elena has wide-ranging and deep...</p>Posted by <a href="https://www.facebook.com/FemJLM/">FEM JLM</a> on&nbsp;<a href="https://developers.facebook.com/FemJLM/posts/3066955370027655">Tuesday, May 19, 2020</a></blockquote></div>
            </div>
          </div>

          {/* <h5 className="femstart-title">Fem Start of the Week:</h5><br></br> */}
          <div>
            <h5>Meet our mentors:</h5>
            <iframe className="airtable-embed" src="https://airtable.com/embed/shryGVVn4QUe3T6fR?backgroundColor=purpleLight&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" />
          </div>
        </div>
      </div>

    </div>

  );
}

export default Weekly;
