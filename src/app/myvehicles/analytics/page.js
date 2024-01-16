"use client";
import React from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaRegChartBar,
  FaAtom,
  FaTachometerAlt,
  FaPercent,
} from "react-icons/fa";

export default function Page() {
  const pathname = usePathname();
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
                <div className="col-sm-6">
                  <h1 className="m-0"> My Fleet</h1>
                </div>
                <div className="col-sm-6">
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

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 ">
                <div className="card  shadow ">
                  <Link href="/MyVehicles">
                    <div className="py-4 text-center text-lg boxone text-dark">
                      General
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className={
                    pathname == "/MyVehicles/Analytics"
                      ? "card  shadow bg-dark text-muted font-weight-bold "
                      : "card shadow text-dark"
                  }
                >
                  <Link href="/MyVehicles/Analytics">
                    <div className="py-4  text-center text-lg boxone">
                      Analytics
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow gen">
                  <Link href="/MyVehicles/NextService">
                    <div className="py-4  text-center text-lg boxone text-dark">
                      Next Servics
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow gen">
                  <Link href="LastLocation">
                    <div className="py-4  text-center text-lg boxone text-dark">
                      Last Locations
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group m-2 ">
            <div className="card box Analyticsone">
              <div className="card-header border-0">
                <h3 className="card-title">Analytics</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaRegChartBar />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaAtom />
                      </span>{" "}
                      Total Energy
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaTachometerAlt />
                      </span>{" "}
                      Mean Km/Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaAtom />
                      </span>{" "}
                      Mean Energy/Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaTachometerAlt />
                      </span>{" "}
                      Mean Speed/Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaTachometerAlt />
                      </span>{" "}
                      Vehicle with the min km
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaTachometerAlt />
                      </span>{" "}
                      Vehicle with the max km
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaAtom />
                      </span>{" "}
                      Vehicle with the min efficiency (Km/Energy)
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaAtom />
                      </span>{" "}
                      Vehicle with the max efficiency (Km/Energy)
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPercent />
                      </span>{" "}
                      # of vehicles with efficiency below average
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPercent />
                      </span>{" "}
                      # of vehicles with km below average
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div className="card-group m-2 ">
            <div className="card veh ">
              <div className="col-span-1 bg-white border    py-4 ">
                <div className="card-group m-2 bg-white ">
                  <div className="col-sm-12">
                    <table
                      className="table table-bordered table-hover dataTable dtr-inline"
                      aria-describedby="example2_info"
                    >
                      <thead>
                        <tr>
                          <th>Veh</th>
                          <th>Km ↑↓ </th>
                          <th>Energy ↑↓ </th>
                          <th>Next Service ↑↓ </th>
                          <th>SOC ↑↓ </th>
                          <th>State ↑↓ </th>
                          <th>Current Driver ↑↓ </th>
                          <th># Batteries </th>
                          <th>Remaining Milage↑↓ </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="oddone">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            V1
                          </td>
                          <td>10000 </td>
                          <td>1.1 KWA</td>
                          <td>03/10/24</td>
                          <td>60</td>
                          <td>Locked</td>
                          <td>U 1</td>
                          <td>1</td>
                          <td>20</td>
                        </tr>
                        <tr className="even">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            V2
                          </td>
                          <td>20000</td>
                          <td>2.2 KWA</td>
                          <td>03/10/23</td>
                          <td>30</td>
                          <td>Moving</td>
                          <td>U 2</td>
                          <td>2</td>
                          <td>10</td>
                        </tr>
                        <tr className="oddone">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            V3
                          </td>
                          <td>50000</td>
                          <td>1.9 KWA</td>
                          <td>03/01/24</td>
                          <td>-</td>
                          <td>undefined</td>
                          <td>U 3</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>

                        <tr className="even">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            VN
                          </td>
                          <td>5000</td>
                          <td>0.5 KWA</td>
                          <td>03/07/23</td>
                          <td>95</td>
                          <td>stopped</td>
                          <td>U N</td>
                          <td>2</td>
                          <td>60</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                            
                </div>
              </div>
            </div>
          </div>

          {/* <!--Analytics end --> */}

          {/* <!-- /.content --> */}
        </div>

        <Footer />
      </div>
    </>
  );
}
