"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import {
  FaMotorcycle,
  FaUsers,
  FaBell,
  FaWrench,
  FaShieldAlt,
} from "react-icons/fa";
import useAuth from "../utils/useauth";

export default function Sidebar() {
  const pathname = usePathname();
  let safetyClass;
  if (pathname == "/myvehicles") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/analytics") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/nextservice") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/lastlocation") {
    safetyClass = "nav-link active";
  } else {
    safetyClass = "nav-link ";
  }

  const state_data = useAuth((state) => state.user);
  console.log(state_data);
  const new_data = JSON.parse(state_data);
  if (new_data) {
    const role = new_data.role;
    const name = new_data.name;
    // console.log(new_data.role);
  } else {
    // console.log(name);
    const role = "";
    const new_data = "";
    const name = "";
  }

  return (
    <>
      {/* Sidebar Start */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4 fix">
        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <Image
                src={require("../../../public/img/profile.png")}
                className="img-circle elevation-2"
                alt="User Image"
              />
              {/* <Image src={new_data.image} width={180}
                    height={180}
                    layout="responsive"    className="img-circle elevation-2" style={{width:"auto"}} alt="User Image"/> */}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {new_data.name}
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library --> */}
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={
                        pathname == "/" ? " nav-link active" : "nav-link"
                      }
                    >
                      <b>
                        <FaHome />
                      </b>
                      <p> Home Page</p>
                    </Link>
                  </li>
                  {(() => {
                    if (new_data) {
                      if (new_data.role != 4) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/user"
                                className={
                                  pathname == "/user"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaUsers />
                                </b>
                                <p> Users </p>
                              </Link>
                            </li>
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  })()}

                  <li className="nav-item">
                    <Link href="/myvehicles" className={safetyClass}>
                      <b>
                        <FaMotorcycle />
                      </b>
                      <p> My Vehicles </p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/notification"
                      className={
                        pathname == "/notification"
                          ? " nav-link active"
                          : "nav-link"
                      }
                    >
                      <b>
                        <FaBell />
                      </b>
                      <p> Notifications</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/service"
                      className={
                        pathname == "/service" ? " nav-link active" : "nav-link"
                      }
                    >
                      <b>
                        <FaWrench />
                      </b>
                      <p> Request for service</p>
                    </Link>
                  </li>
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/privacypolicy"
                                className={
                                  pathname == "/privacypolicy"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaShieldAlt />
                                </b>
                                <p> Privacy Policy</p>
                              </Link>
                            </li>
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  })()}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Sidebar End */}
    </>
  );
}
