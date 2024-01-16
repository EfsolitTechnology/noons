"use client";
import React from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWrench } from "react-icons/fa";

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
                <div className="card  shadow gen">
                  <Link href="/MyVehicles">
                    <div className="py-4 text-center text-lg boxone text-dark ">
                      General
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow gen">
                  <Link href="/MyVehicles/Analytics">
                    <div className="py-4  text-center text-lg text-dark boxone">
                      Analytics
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className={
                    pathname == "/MyVehicles/NextService"
                      ? "card  shadow bg-dark text-muted font-weight-bold"
                      : "card shadow gen"
                  }
                >
                  <Link href="/MyVehicles/NextService">
                    <div className="py-4  text-center text-lg boxone">
                      Next Servics
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow gen">
                  <Link href="LastLocation">
                    <div className="py-4 text-dark text-center text-lg boxone">
                      Last Locations
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Fleet – Next Service</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Fleet – Next Service
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="card-group m-2 ">
            <div className="card box veh">
              <div className="card-header border-0">
                <h3 className="card-title"> Next Service</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaWrench />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                <ul>
                  <li>of services at week A</li>
                  <hr />
                  <li>of services at week B (after week A)</li>
                  <hr />
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="card-group m-2 bg-white ">
            <div className="col-sm-12">
              <table
                className="table table-bordered table-hover dataTable dtr-inline"
                aria-describedby="example2_info"
              >
                <thead>
                  <tr>
                    <th>Veh</th>
                    <th>Date ↑↓ </th>
                    <th>Reason ↑↓ </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="oddone">
                    <td className="dtr-control sorting_1" tabIndex={0}>
                      V1
                    </td>
                    <td>03/08/23</td>
                    <td>Brake Pads</td>
                  </tr>
                  <tr className="even">
                    <td className="dtr-control sorting_1" tabIndex={0}>
                      V2
                    </td>
                    <td>03/10/24</td>
                    <td>Battery Life</td>
                  </tr>
                  <tr className="oddone">
                    <td className="dtr-control sorting_1" tabIndex={0}>
                      VN
                    </td>
                    <td>03/05/25</td>
                    <td>Tyres Life</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
        </div>
        <Footer />
      </div>
    </>
  );
}
