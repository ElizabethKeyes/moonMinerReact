import React from 'react';
import { AppState } from "../AppState.js";

function Moon() {
  function mineCheese() {
    AppState.cheese++
    console.log('cheese', AppState.cheese)
  }
  return (
    <section className="row justify-content-center">
      <div className="col-md-4 moon-container">
        <img src="https://s3-alpha-sig.figma.com/img/d1c9/901c/02c27de6b789f5858dc11e68f67d8da2?Expires=1686528000&Signature=cZ6GwNs5I--I10M1Uat12vsPjiU5OMHYyrPA0Be0md7ypoQVELPC2e-tqAZ3PNHw6zq9aIdea3khgp4bLOS7Mh6IrUtcGO7kClMAlAdZbUy~DzGWLnUYeN2XbgukCzOpK4ZTULJ9Yiu0QtoySjes1iXDDYfaPJVH8RTmFP-sVIHh4b~lFU7SWPkcddJtLAslKBI7tqpvV~JCV72GgY7UPyNQTO4U~nJa8mTasXrMIn8LuVZLCEP6-qSs5rC4BiYQT8HyRYkUzOhOqy0LRtTZOzDyYz1Xm2TubtYW0J2s6onARseZtPGmmRynt3dgx1Bqk7EF3y2o0i3gI1mTfm-2hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="a cartoon image of the moon" className="moon-image" onClick={mineCheese} />
      </div>
    </section>
  )
}

export default Moon;