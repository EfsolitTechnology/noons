"use client";
import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaExclamationCircle, FaRegChartBar } from "react-icons/fa";
import useAuth from "../utils/useauth";

export default function Page() {
  const pathname = usePathname();

  const state_data = useAuth((state) => state.user);
  const new_data = JSON.parse(state_data);
  console.log(new_data);
  if (new_data) {
    const role = new_data.role;
  } else {
    const role = "";
    const new_data = "";
  }

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
                  <h1 className="m-0"> My Fleet</h1>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="Search Vehicle"
                      className="form-control form_control_new"
                    />
                    <span className="input-group-addon">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark ml-2"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">My Fleet</li>
                  </ol>
                </div>
              </div>
            </div>
            <hr />
          </div>
          {/* <!-- /.content-header -->
                <!-- my feet start --> */}
          {(() => {
            if (new_data) {
              if (new_data.role != 3) {
                return (
                  <>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-3 ">
                          <div
                            className={
                              pathname == "/MyVehicles"
                                ? "card  shadow bg-dark text-muted font-weight-bold "
                                : "card shadow text-dark"
                            }
                          >
                            <Link href="/MyVehicles">
                              <div className="py-4 text-center text-lg boxone ">
                                General
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="card shadow gen">
                            <Link href="/MyVehicles/Analytics">
                              <div className="py-4  text-center text-dark text-lg boxone">
                                Analytics
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="card shadow gen">
                            <Link href="/MyVehicles/NextService">
                              <div className="py-4  text-center text-dark text-lg boxone">
                                Next Servics
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="card shadow gen">
                            <Link href="/MyVehicles/LastLocation">
                              <div className="py-4  text-center text-dark text-lg boxone">
                                Last Locations
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- General start --> */}
                    <div className="card-group m-2 ">
                      <div className="card box sett">
                        <div className="card-header border-0">
                          <h3 className="card-title">General</h3>
                          <div className="card-tools">
                            <span
                              title="3 New Messages"
                              className="badge badge-primary"
                            >
                              <FaExclamationCircle />
                            </span>
                          </div>
                        </div>
                        <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                          <ul>
                            <li>
                              {" "}
                              <a href="./Single_Vehicle’s_Page.html">
                                Vehicles
                              </a>
                            </li>
                            <hr />
                            <li>
                              <a href="#">Users</a>
                            </li>
                            <hr />
                            <li>
                              <a href="#">Batteries</a>
                            </li>
                            <hr />
                            <li>
                              <a href="#">
                                Plot total fleet milage versus weeks
                                (Cumulative)
                              </a>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            }
          })()}

          <div className="content-header mt-3">
            <div className="container_new">
              <div className="row mb-2 padd   ">
                <div
                  className="col-sm-12 first bg-dark ml-4 "
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div>
                    <div className="Vehi">My 1st Vehicle’s</div>
                  </div>
                  <div>
                    <div>
                      <button type="button" className="btn btn-dark ">
                        Open <FaAngleDown />
                      </button>
                    </div>
                  </div>
                  {/* <!-- dropdwon end --> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card-group m-2 collapse " id="collapseExample">
            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Settings</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-gear"></i>
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                <ul>
                  <li>Name</li>
                  <hr />
                  <li>User</li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Analytics</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaRegChartBar />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>Total Km</li>
                  <hr />
                  <li>300km/hr speed</li>
                  <hr />
                  <li>Issues/Notifi cations</li>
                  <hr />
                  <li>Errors </li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Routes</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    {" "}
                    <i className="fas fa-route"></i>
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>
                    Date{" "}
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-calendar " aria-hidden="true"></i>
                    </span>
                  </li>{" "}
                  <hr />
                  <li>
                    Duration
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-clock-o "></i>
                    </span>{" "}
                  </li>
                  <hr />
                  <li>
                    Distance{" "}
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-map-marker " aria-hidden="true"></i>
                    </span>{" "}
                  </li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Next Service</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-wrench" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>Date</li>
                  <li>Service Issue</li>
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Last Location</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="col-span-1 bg-white border border-gray-300 h-80  py-4 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701067367319!5m2!1sen!2sin"
                  className="ifr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <!-- My 1st Vehicle’s end --> */}

          <div className="content-header">
            <div className="container_new">
              <div className="row mb-2 padd   ">
                <div
                  className="col-sm-12 first bg-dark ml-4  "
                  data-toggle="collapse"
                  href="#collapseExampletwo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExampletwo"
                >
                  <div>
                    <div className="Vehi">My 2nd Vehicle’s</div>
                  </div>
                  <div>
                    <div>
                      <button type="button" className="btn btn-dark ">
                        Open <FaAngleDown />
                      </button>
                    </div>
                  </div>
                  {/* <!-- dropdwon end --> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card-group m-2 collapse " id="collapseExampletwo">
            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Settings</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-gear"></i>
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                <ul>
                  <li>Name</li>
                  <hr />
                  <li>User</li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Analytics</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaRegChartBar />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>Total Km</li>
                  <hr />
                  <li>300km/hr speed</li>
                  <hr />
                  <li>Issues/Notifi cations</li>
                  <hr />
                  <li>Errors </li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Routes</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    {" "}
                    <i className="fas fa-route"></i>
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>
                    Date{" "}
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-calendar " aria-hidden="true"></i>
                    </span>
                  </li>{" "}
                  <hr />
                  <li>
                    Duration
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-clock-o "></i>
                    </span>{" "}
                  </li>
                  <hr />
                  <li>
                    Distance{" "}
                    <span
                      title="3 New Messages"
                      className="badge badge-secondary icon"
                    >
                      {" "}
                      <i className="fa fa-map-marker " aria-hidden="true"></i>
                    </span>{" "}
                  </li>
                  <hr />
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Next Service</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-wrench" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                <ul>
                  <li>Date</li>
                  <li>Service Issue</li>
                </ul>
              </div>
            </div>

            <div className="card box sett">
              <div className="card-header border-0">
                <h3 className="card-title">Last Location</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="col-span-1 bg-white border border-gray-300 h-80  py-4 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701067367319!5m2!1sen!2sin"
                  className="ifr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <!-- My 2nd Vehicle’s start --> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
