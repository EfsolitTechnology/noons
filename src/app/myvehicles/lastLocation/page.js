"use client";
import React from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />

        <div className="content-wrapper">
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
                    <div className="py-4  text-center text-lg boxone text-dark">
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
                <div
                  className={
                    pathname == "/MyVehicles/LastLocation"
                      ? "card  shadow bg-dark text-muted font-weight-bold"
                      : "card shadow gen"
                  }
                >
                  <Link href="MyVehicles/LastLocation">
                    <div className="py-4  text-center text-lg boxone">
                      Last Locations
                    </div>
                  </Link>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
          <div className="card-group m-2 ">
            <div className="card box lastloc">
              <div className="card-header border-0">
                <h3 className="card-title">Last Location</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaMapMarkerAlt />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701067367319!5m2!1sen!2sin"
                  className="ifrone"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
