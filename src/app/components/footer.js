import React from "react";
import Script from "next/script";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <strong>
          Copyright &copy; 2023 <a href="#"></a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block"></div>
      </footer>
      {/* <!-- jQuery --> */}
      {/* <Script src=""></Script> */}
      <Script src="../js/jquery.min.js"></Script>
      <Script src="../js/bootstrap.bundle.min.js"></Script>
      <Script src="../js/adminlte.js"></Script>

      <Script src="../js/Chart.min.js"></Script>
      <Script src="../js/summernote-bs4.min.js"></Script>
      <Script src="../js/demo.js"></Script>
      <Script src="../js/dashboard3.js"></Script>
    </>
  );
}
