import React from "react";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { FaBell, FaAngleDown } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />

        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-3">
                  <h1 className="m-0">Notifications</h1>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="Search Notification"
                      className="form-control form_control_new"
                    />
                    <span className="input-group-addon">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark ml-3"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Notifications</li>
                  </ol>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* <!-- /.content-header --> */}

          {/* <!-- User ID_1 start --> */}
          <div className="card-group m-2 ">
            <div className="card box notithree">
              <div className="card-header border-0">
                <h3 className="card-title">Notification </h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaBell />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border padd   overflow-auto py-4 ">
                {/* <!-- notification 1 collapse  start  --> */}

                <div
                  className="col-sm-12 first bg-dark text-light "
                  data-toggle="collapse"
                  href="#collapsenotificationone"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <div>
                    <div className="Vehi">Notification 1</div>
                  </div>
                  <div>
                    <div>
                      <button
                        type="button "
                        className="btn  btn-dark text-light"
                      >
                        <b>
                          Open <FaAngleDown />
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
                <br />

                <div
                  className="alert rul text-justify collapse "
                  role="alert"
                  id="collapsenotificationone"
                >
                  <div className="text-lg pb-2 notitwo">
                    Notification 1 – Short Description
                  </div>
                  <div className="text-lg pb-2 pt-2 notione"> Subject </div>
                  <div>
                    {" "}
                    Main Text Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nobis, omnis! Vero laudantium dicta
                    obcaecati praesentium, voluptas nisi excepturi alias ducimus
                    quaerat eius corrupti ut tempore, dolores placeat libero
                    voluptate odio.
                  </div>

                  <div className="pt-1">
                    {" "}
                    Recommendations in research are a crucial component of your
                    discussion section and the conclusion of your thesis,
                    dissertation, or research paper.{" "}
                  </div>
                </div>
                <br />

                <div
                  className="col-sm-12 first bg-dark text-light"
                  data-toggle="collapse"
                  href="#collapsenotificationtwo"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <div>
                    <div className="Vehi">Notification 2</div>
                  </div>
                  <div>
                    <div>
                      <button type="button" className="btn btn btn-dark ">
                        <b>
                          Open <FaAngleDown />{" "}
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                {/* <!-- notification 2 collapse end  --> */}
                <div
                  className="alert rul text-justify collapse "
                  role="alert"
                  id="collapsenotificationtwo"
                >
                  <div className="text-lg pb-2 notitwo">
                    Notification 2 – Short Description
                  </div>
                  <div className="text-lg pb-2 pt-2 notione"> Subject </div>
                  <div>
                    {" "}
                    Main Text Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nobis, omnis! Vero laudantium dicta
                    obcaecati praesentium, voluptas nisi excepturi alias ducimus
                    quaerat eius corrupti ut tempore, dolores placeat libero
                    voluptate odio.
                  </div>

                  <div className="pt-1">
                    {" "}
                    Recommendations in research are a crucial component of your
                    discussion section and the conclusion of your thesis,
                    dissertation, or research paper.{" "}
                  </div>
                </div>
                <br />

                <div
                  className="col-sm-12 first bg-dark text-light "
                  data-toggle="collapse"
                  href="#collapsenotificationthree"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <div>
                    <div className="Vehi">Notification 3</div>
                  </div>
                  <div>
                    <div>
                      <button type="button" className="btn btn-dark   ">
                        <b>
                          Open <FaAngleDown />
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                {/* <!-- notification 3 collapse end  -->
                                <!-- notification 3 --> */}
                <div
                  className="alert rul text-justify collapse "
                  role="alert"
                  id="collapsenotificationthree"
                >
                  <div className="text-lg pb-2 notitwo">
                    Notification 3 – Short Description
                  </div>
                  <div className="text-lg pb-2 pt-2 notione"> Subject </div>
                  <div>
                    {" "}
                    Main Text Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Nobis, omnis! Vero laudantium dicta
                    obcaecati praesentium, voluptas nisi excepturi alias ducimus
                    quaerat eius corrupti ut tempore, dolores placeat libero
                    voluptate odio.
                  </div>

                  <div className="pt-1">
                    {" "}
                    Recommendations in research are a crucial component of your
                    discussion section and the conclusion of your thesis,
                    dissertation, or research paper.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
}
