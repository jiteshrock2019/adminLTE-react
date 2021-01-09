import React from "react";

function Contact() {
  return (
    <div className="content-wrapper">
      <h1 className="px-3 py-3 bg-secondary"> New Question</h1>
      <div className="container">
        <div className="py-4">
          <form>
            <div class="form-group">
              <label for="question-text">
                <h5>Question Text</h5>
              </label>
              <textarea
                class="form-control"
                rows="2"
                id="question-text"
              ></textarea>
            </div>

            <div>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="option1-text">
                      <h5>Option1</h5>
                    </label>
                    <textarea
                      class="form-control"
                      rows="1"
                      id="option1-text"
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="form-group">
                    <label for="option2-text">
                      <h5>Option2</h5>
                    </label>
                    <textarea
                      class="form-control"
                      rows="1"
                      id="option2-text"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="option3-text">
                      <h5>Option3</h5>
                    </label>
                    <textarea
                      class="form-control"
                      rows="1"
                      id="option3-text"
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="form-group">
                    <label for="option4-text">
                      <h5>Option4</h5>
                    </label>
                    <textarea
                      class="form-control"
                      rows="1"
                      id="option4-text"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>SUBJECTS DROPDOWN START FROM HERE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}

            <div className="my-2 col-4">
              <select name="cars" class="custom-select">
                <option selected>1.Physics</option>
                <option value="chemistry">2.Chemistry</option>
                <option value="mathematics">3.Mathematics</option>
                <option value="computer-science">4.Computer Science</option>
              </select>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<Switch Toggler>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            {/* <input type="checkbox" checked data-toggle="toggle"> */}

            {/* <div className="second-box"></div> */}

            {/* >>>>>>>>>>>>>>>>>>SECOND DIV STARTED FROM HERE<<<<<<<<<<<<<<<< */}
            <div className="second-box container mx-2 my-5 p-3 d-flex  border ">
              {/* <div className="row"> */}
              <div className="col-md-3">
                <h6>Supporting Pictures</h6>
                <div class="custom-file">
                  <label class="custom-file-label" for="customFile"></label>
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div class="form-group">
                  <h6>Supproting Picuture Width</h6>
                  <input
                    type="number"
                    class="form-control"
                    id="picture-width"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <h6>Supporting Picture Size</h6>
                <select name="size" class="custom-select">
                  <option selected>Undifined</option>
                  <option value="defined">Defined</option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div className="col-md-3">
                <h6>Supporting Picture Position</h6>
                <select name="position" class="custom-select">
                  <option selected>Right</option>
                  <option value="left">Left</option>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                </select>
              </div>
            </div>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>DIV 3rd START FROM HERE<<<<<<<<<<<<<<<<<<<<<<< */}
            <div className="third-box container mx-2 my-5 p-3 d-flex  border ">
              <div className="col-md-3">
                <h6>Options Layout</h6>
                <select name="cars" class="custom-select">
                  <option selected>Auto</option>
                  <option value="fixed">Fixed</option>
                  <option value="grid">Grid</option>
                  <option value="horizontal">Horizontal</option>
                </select>
              </div>
              <div className="col-md-3">
                <div class="form-group">
                  <h6>Previous Exam</h6>
                  <input type="text" class="form-control" id="picture-width" />
                </div>
              </div>
            </div>

            {/* >>>>>>>>>>>>>>>>>>>>>>>DIV 4th START FROM HERE<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <div className="fourth-box container mx-2 my-5 p-3 d-flex  border ">
              <div className="row">
                <div className="col-md-8">
                  <div class="form-group">
                    <h6>Vedio Solution URL</h6>
                    <input
                      type="text"
                      class="form-control"
                      id="picture-width"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <h6>Author</h6>
                  <select name="author" class="custom-select">
                    <option selected disabled>
                      Select an author
                    </option>
                    <option value="sharma">R.D. Sharma</option>
                    <option value="agrawal">R.S. Agrawal</option>
                    <option value="chad">S Chand</option>
                  </select>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-md-8">
                  <div class="form-group">
                    <h6>Vedio Title</h6>
                    <input
                      type="text"
                      class="form-control"
                      id="picture-width"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <h6>Vedio Type</h6>
                  <select name="author" class="custom-select">
                    <option selected disabled>
                      Select the Vedio type
                    </option>
                    <option value="science">Science & Technology</option>
                    <option value="maths">Maths Game</option>
                    <option value="SST">World Tour</option>
                  </select>
                </div>
              </div>
            </div>

            {/* >>>>>>>>>>>>>>>>>>>>>>>DIV 5th START FROM HERE<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

            <div className="fourth-box container mx-2 my-5 p-3 d-flex  border ">
              <h4>Hint</h4>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="question-text"></label>
                    <textarea
                      class="form-control"
                      rows="6"
                      id="question-text"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label for="question-text"></label>
                  <textarea
                    class="form-control"
                    rows="6"
                    id="question-text"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
