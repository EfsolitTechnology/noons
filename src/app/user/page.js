"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import {
  FaUsers,
  FaPhoneSquare,
  FaMotorcycle,
  FaAngleDown,
} from "react-icons/fa";
import { firestoreDb } from "../firebase/config";
import {
  collection,
  deleteDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  where,
} from "firebase/firestore";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { Accordion } from "react-bootstrap-accordion";

export default function Page() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [records, setRecords] = useState([]);
  // const state_data = useAuth((state) => state.user);
    // console.log(state_data);
  useEffect(() => {
    
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      const userSession = localStorage.getItem("user");
      const user_data = JSON.parse(userSession);
      setRole(user_data.role)
      if(user_data.role==1){
        setLoading(true);
      const q = query(collection(firestoreDb, "user"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setItems(itemsArr);
        setRecords(itemsArr);
        console.log(itemsArr);
        setLoading(false)
        return () => unsubscribe();
      });
    }
    if(user_data.role==2||user_data.role==3){
      setLoading(true);
      const q = query(collection(firestoreDb, "user"),where("owner_id", "==", user_data.user_id));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setItems(itemsArr);
        setRecords(itemsArr);
        console.log(itemsArr);
        setLoading(false)
        return () => unsubscribe();
      });
    }
    
  }
    // }
    // setRecords(items)
    // console.log(records)
    // console.log(records)
    // searchData();
  }, []);

  const editItem = async (email) => {
    const q = query(
      collection(firestoreDb, "user"),
      where("email", "==", email)
    );
    let getdataArr = [];
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let docI = "";
    let name = "";
    querySnapshot.forEach((doc) => {
      getdataArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(getdataArr);
    console.log(getdataArr[0]["email"]);
    //    querySnapshot.forEach((doc) => {
    // alert(doc);
    // console.log(doc);
    // docI = doc.id;
    // name= doc.userId;
    // console.log(doc.email);
    // console.log(doc.id);
    // });

    // const user = doc(firestoreDb, "users", docID);
    // console.log(user);
    alert(docI);
    alert(name);

    // Set the "capital" field of the city 'DC'
    // await updateDoc(user, {
    //     name: name,
    //     address: address
    // });

    // alert(uid)
    // await firestoreDb().deleteUser(uid)
    // await deleteDoc(doc(firestoreDb, 'users', uid));
    // await deleteUser(uid);
    // await deleteDoc(doc(firestoreDb, 'users', uid));
    // await firestoreDb.deleteUser(uid);
    // deleteUser(auth,uid)
  };

  // Delete items from database
  const deleteItem = async (id) => {
    setLoading(true)
    await deleteDoc(doc(firestoreDb, "user", id));
    setLoading(false);
  };

  function handleFilter(event) {
    const newData = items.filter((row) => {
      const result = row.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      if (result == "") {
        const result1 = row.email
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
        if (result1 == "") {
          const result2 = row.mobile.includes(event.target.value);
          return result2;
        } else {
          return result1;
        }
      } else {
        return result;
      }
    });
    setRecords(newData);
  }

  return (
    <>
    {loading ?  <div className="loading"></div>  : <span></span>}
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-3">
                  <h1 className="m-0">
                    Users &nbsp; &nbsp;{" "}
                    {role==1 ? <Link className="btn btn-dark" href="/user/adduseradmin">Add User</Link>  : <Link className="btn btn-success" href="/user/AddUser">Add User</Link> }
                    
                    
                  </h1>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search User"
                      onChange={handleFilter}
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
                    <li className="breadcrumb-item active">Users</li>
                  </ol>
                </div>
              </div>
              {/* <DataTable
                columns={columns}
                data={items}
            >

            </DataTable> */}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item, id) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      {/* <td>{item.userId}</td> */}
                      <td>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="btn btn-dark"
                        >
                          <FaTrash />
                        </button>
                        {/* <button onClick={() => editItem(item.email)} className='btn btn-success ml-2'>Edit</button> */}
                        <Link
                          href={`/user/edituser/${item.userId}/${item.id}`}
                          className="btn btn-dark ml-3 text-light"
                        >
                          <FaEdit />
                        </Link>
                        {/* <Link href={`/user/edituser/${item.userId}`} className='btn btn-success ml-2'>Edit</Link> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
          </div>
          {/* <!-- /.content-header --> */}

          {/* <!-- User ID_1 start --> */}
          <div className="card-group m-2 ">
            <div className="card box">
              <div className="card-header border-0">
                <h3 className="card-title">User ID_1 - Name</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaUsers />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   ">
                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaUsers />{" "}
                      </span>{" "}
                      Name
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

                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />{" "}
                      </span>{" "}
                      Phone Number
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>8976009768</div>
                  </div>
                </div>
                <hr />

                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />
                      </span>{" "}
                      Phone IMEI
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>IMEI 123456789</div>
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
                        <FaMotorcycle />
                      </span>{" "}
                      Last Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>ABC</div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <br />

          {/* <!-- User ID_1 end  -->

        <!-- User ID_2 dropdown start --> */}
          <div className="ml-3  me-3 mt-5">
            <Accordion
              title={
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div
                        className="col-sm-12 first bg-dark"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div>
                          <div className="d-flex accor">
                            <div>User ID_2 </div>
                            <div className="positionn">
                              <button className=" btn btn-dark text-light">
                                <b>
                                  Open <FaAngleDown />{" "}
                                </b>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="card-group m-2 ">
                <div className="card box">
                  <div className="card-header border-0">
                    <h3 className="card-title">User ID_1 - Name</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge badge-dark">
                        <FaUsers />
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 bg-white border   ">
                    <div className="row userp">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaUsers />{" "}
                          </span>{" "}
                          Name
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

                    <div className="row userp ">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaPhoneSquare />{" "}
                          </span>{" "}
                          Phone Number
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>8976009768</div>
                      </div>
                    </div>
                    <hr />

                    <div className="row userp ">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaPhoneSquare />
                          </span>{" "}
                          Phone IMEI
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>IMEI 123456789</div>
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
                            <FaMotorcycle />
                          </span>{" "}
                          Last Vehicle
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>ABC</div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="ml-3  me-3">
            <Accordion
              title={
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div
                        className="col-sm-12 first bg-dark"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div>
                          <div className="d-flex accor">
                            <div>User ID_3 </div>
                            <div className="positionn">
                              <button className=" btn btn-dark text-light">
                                Open <FaAngleDown />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="card-group m-2 ">
                <div className="card box">
                  <div className="card-header border-0">
                    <h3 className="card-title">User ID_1 - Name</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge badge-dark">
                        <FaUsers />
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 bg-white border   ">
                    <div className="row userp">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaUsers />{" "}
                          </span>{" "}
                          Name
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

                    <div className="row userp ">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaPhoneSquare />{" "}
                          </span>{" "}
                          Phone Number
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>8976009768</div>
                      </div>
                    </div>
                    <hr />

                    <div className="row userp ">
                      <div className="col-3">
                        <div className="userone">
                          {" "}
                          <span
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            <FaPhoneSquare />
                          </span>{" "}
                          Phone IMEI
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>IMEI 123456789</div>
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
                            <FaMotorcycle />
                          </span>{" "}
                          Last Vehicle
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="userone">=</div>
                      </div>
                      <div className="col-6">
                        <div>ABC</div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

          {/* <!-- User ID_3 dropdown end  -->


        <!-- User ID_3 start --> */}
          <div className="card-group m-2 collapse " id="collapseExamplefour">
            <div className="card box">
              <div className="card-header border-0">
                <h3 className="card-title">User ID_3 - Name</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaUsers />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   ">
                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaUsers />{" "}
                      </span>{" "}
                      Name
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

                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />
                      </span>{" "}
                      Phone Number
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>8976009768</div>
                  </div>
                </div>
                <hr />

                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />
                      </span>{" "}
                      Phone IMEI
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>IMEI 123456789</div>
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
                        <FaMotorcycle />
                      </span>{" "}
                      Last Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>ABC</div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <br />
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
