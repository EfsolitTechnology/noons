"use client"
import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import Sidebar from './components/sidebar'
import Head from 'next/head'
import { FaBell,FaMapMarkerAlt, FaMotorcycle, FaUsers,FaRoute,FaAngleDown    } from "react-icons/fa";

import { useEffect, useState } from 'react'


export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (typeof window !== 'undefined') {
      setLoading(false);
    
    }
  }, []);

  

  return (
    
    < >
    {loading ?  <div className="loading"></div>  : <span></span>}
    
    
    <Head>
            <title>My page title</title>
          </Head>
            <div className='wrapper'>
            <Nav/>

             <Sidebar/>

             


              <div className="content-wrapper" >
                  {/* <!-- Content Header (Page header) --> */}
                  <div className="content-header">
                    <div className="container-fluid">
                      <div className="row mb-2">
                        <div className="col-sm-6">
                          <h1 className="m-0">Home Page</h1>
                        </div>
                        <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Home Page</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.content-header --> */}

                  {/* <!-- Main content --> */}
                  <div className="content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6">

                          {/* <!-- Notifications start --> */}

                          <div className="card notifi" >
                            <div className="card-header border-0">
                              <h3 className="card-title">Notifications</h3>
                              <div className="card-tools">
                                <span title="3 New Messages" className="badge badge-primary"> <FaBell/></span>
                                
                                <span className="badge badge-warning navbar-badge ]">15</span>

                              </div>
                            </div>

                            <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto">
                              <div className="card">
                                <div className="card-header border-0">
                                </div>


                                <div className="col-sm-11 ml-4 me-2  mycst first bg-dark text-light " data-toggle="collapse" href="#collapsenotificationone" role="button" aria-expanded="true" aria-controls="collapseExample">
                                
                                <div>
                                <div className="Vehi">Notification 1</div>
                                </div>
                                <div>
                                <div><button type="button " className="btn btn-dark text-light"><b>Open <FaAngleDown /></b></button>
                                </div>
                                </div>
                        
                            </div><br/>
                                {/* <!-- notification 1 collapse end  --> */}

                        {/* <!-- notification 1 --> */}
                        <div className="alert rul text-justify collapse  " role="alert" id="collapsenotificationone" >
                                <div className="text-lg pb-2 notitwo " >
                                    Notification 1 – Short Description
                                
                                </div>
                                <div className="text-lg pb-2 pt-2 notione" > Subject </div>
                                <div>  Main Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis! Vero laudantium dicta obcaecati praesentium, voluptas nisi excepturi alias ducimus quaerat eius corrupti ut tempore, dolores placeat libero voluptate odio.</div>
                            
                            <div className="pt-1"> Recommendations in research are a crucial component of your discussion section and the conclusion of your thesis, dissertation, or research paper. </div>
                            
                            </div><br/>

                            {/* <!-- notification 2 collapse  start  --> */}
                            
                            <div className="col-sm-11 ml-4 me-2 first bg-dark text-light mt-3" data-toggle="collapse" href="#collapsenotificationtwo" role="button" aria-expanded="true" aria-controls="collapseExample">
                                
                                <div>
                                    <div className="Vehi">Notification 2</div>
                                </div>
                                <div>
                                    <div><button type="button" className="btn btn btn-dark "><b>Open <FaAngleDown /> </b></button>
                                    </div>
                                </div>
                        
                                </div><br/>
                                {/* <!-- notification 2 collapse end  --> */}
                                <div className="alert rul cus_pad text-justify collapse " role="alert" id="collapsenotificationtwo">
                                    <div className="text-lg pb-2 notitwo" >
                                        Notification 2 – Short Description
                                    
                                    </div>
                                    <div className="text-lg pb-2 pt-2 notione" > Subject </div>
                                    <div>  Main Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis! Vero laudantium dicta obcaecati praesentium, voluptas nisi excepturi alias ducimus quaerat eius corrupti ut tempore, dolores placeat libero voluptate odio.</div>
                                
                                <div className="pt-1"> Recommendations in research are a crucial component of your discussion section and the conclusion of your thesis, dissertation, or research paper. </div>
                                
                                </div><br/>

                                <div className="col-sm-11 ml-4 me-2 first bg-dark text-light mt-3" data-toggle="collapse" href="#collapsenotificationthree" role="button" aria-expanded="true" aria-controls="collapseExample">
                                
                                <div>
                                    <div className="Vehi">Notification 3</div>
                                </div>
                                <div>
                                    <div><button type="button" className="btn btn btn-dark "><b>Open <FaAngleDown /> </b></button>
                                    </div>
                                </div>
                        
                                </div><br/>
                                {/* <!-- notification 2 collapse end  --> */}
                                <div className="alert rul cus_pad text-justify collapse " role="alert" id="collapsenotificationthree">
                                    <div className="text-lg pb-2 notitwo" >
                                        Notification 3 – Short Description
                                    
                                    </div>
                                    <div className="text-lg pb-2 pt-2 notione" > Subject </div>
                                    <div>  Main Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis! Vero laudantium dicta obcaecati praesentium, voluptas nisi excepturi alias ducimus quaerat eius corrupti ut tempore, dolores placeat libero voluptate odio.</div>
                                
                                <div className="pt-1"> Recommendations in research are a crucial component of your discussion section and the conclusion of your thesis, dissertation, or research paper. </div>
                                
                                </div><br/>

                                <div className="col-sm-11 ml-4 me-2 first bg-dark text-light mt-3" data-toggle="collapse" href="#collapsenotificationfour" role="button" aria-expanded="true" aria-controls="collapseExample">
                                
                                <div>
                                    <div className="Vehi">Notification 4</div>
                                </div>
                                <div>
                                    <div><button type="button" className="btn btn btn-dark "><b>Open <FaAngleDown /> </b></button>
                                    </div>
                                </div>
                        
                                </div><br/>
                                {/* <!-- notification 2 collapse end  --> */}
                                <div className="alert rul cus_pad text-justify collapse " role="alert" id="collapsenotificationfour">
                                    <div className="text-lg pb-2 notitwo" >
                                        Notification 4 – Short Description
                                    
                                    </div>
                                    <div className="text-lg pb-2 pt-2 notione" > Subject </div>
                                    <div>  Main Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis! Vero laudantium dicta obcaecati praesentium, voluptas nisi excepturi alias ducimus quaerat eius corrupti ut tempore, dolores placeat libero voluptate odio.</div>
                                
                                <div className="pt-1"> Recommendations in research are a crucial component of your discussion section and the conclusion of your thesis, dissertation, or research paper. </div>
                                
                                </div><br/>


                                <div className="col-sm-11 ml-4 me-2 first bg-dark text-light mt-3" data-toggle="collapse" href="#collapsenotificationfive" role="button" aria-expanded="true" aria-controls="collapseExample">
                                
                                <div>
                                    <div className="Vehi">Notification 5</div>
                                </div>
                                <div>
                                    <div><button type="button" className="btn btn btn-dark "><b>Open <FaAngleDown /> </b></button>
                                    </div>
                                </div>
                        
                                </div><br/>
                                {/* <!-- notification 2 collapse end  --> */}
                                <div className="alert rul cus_pad text-justify collapse  " role="alert" id="collapsenotificationfive">
                                    <div className="text-lg pb-2 notitwo" >
                                        Notification 5 – Short Description
                                    
                                    </div>
                                    <div className="text-lg pb-2 pt-2 notione" > Subject </div>
                                    <div>  Main Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis! Vero laudantium dicta obcaecati praesentium, voluptas nisi excepturi alias ducimus quaerat eius corrupti ut tempore, dolores placeat libero voluptate odio.</div>
                                
                                <div className="pt-1"> Recommendations in research are a crucial component of your discussion section and the conclusion of your thesis, dissertation, or research paper. </div>
                                
                                </div><br/>

                              </div>


                            </div>
                          </div>
                          {/* <!-- Notifications end --> */}
                          

                          {/* <!-- Vehicles start --> */}

                          <div className="card notifi " >
                            <div className="card-header border-0">
                              <h3 className="card-title">Vehicles</h3>
                              <div className="card-tools">
                                <span title="3 New Messages" className="badge badge-primary"><FaMotorcycle/></span>

                              </div>
                            </div>
                            <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto vehiclesone">
                              <ol>
                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2  text-primary">Yamaha MT 15</h4>
                                  </li>
                                </a>
                                <hr/>
                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2  text-primary">Yamaha MT 15</h4>
                                  </li>
                                </a>
                                <hr/>

                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2  text-primary ">Yamaha MT 15</h4>
                                  </li>
                                </a>
                                <hr/>

                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2 text-primary">Hero Splendor Plus</h4>
                                  </li>
                                </a>
                                <hr/>

                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2 text-primary ">Royal Enfield Classic 350</h4>
                                  </li>
                                </a>
                                <hr/>

                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2  text-primary">Yamaha R15 V4</h4>
                                  </li>
                                </a>
                                <hr/>

                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2 text-primary">TVS Raider</h4>
                                  </li>
                                </a>
                                <hr/>
                                <a href="">
                                  <li className='text-dark'>
                                    <h4 className="px-1 py-2 text-primary ">Honda Activa 6G </h4>
                                  </li>
                                </a>
                                <hr/>
                              </ol>


                            </div>
                          </div>
                          
                          {/* <!-- Vehicles end --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-lg-6">
                          {/* <!-- /.card --> */}

                          {/* <!-- Locations start --> */}
                          <div className="card">
                            <div className="card-header border-1\">
                              <h3 className="card-title ">Locations </h3>
                              <div className="card-tools">
                                <span title="3 New Messages" className="badge badge-primary"><FaMapMarkerAlt /></span>

                              </div>
                            </div>

                            <div className="col-span-1 bg-white border border-gray-300 h-80">

                              <div className="px-1 mt-3">
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700725461443!5m2!1sen!2sin"className="iframeone"
                                 loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Locations end --> */}

                          {/* User */}

                            <div className="card">
                              <div className="card-header border-.5 ">
                                <h3 className="card-title">User </h3>
                                <div className="card-tools">
                                  <span title="3 New Messages" className="badge badge-primary"><FaUsers/>
                                  </span>
                                </div>

                              </div>

                              <div className="col-span-1 bg-white border border-gray-300 h-80 notif" >

                                <table className="table table-bordered  dataTable dtr-inline" aria-describedby="example2_info">
                                
                                  <tbody>


                                      <tr>
                                          <td> <a href="#">User 1 </a></td>
                                          <td>Name</td>
                                          <td>other data</td>
                                      
                                          
                                      </tr>
                                      <tr>
                                        <td> <a href="#">User 2 </a></td>
                                        <td>Name</td>
                                        <td>other data</td>
                                    
                                        
                                    </tr>
                                    <tr>
                                      <td> <a href="#">User 3 </a></td>
                                      <td>Name</td>
                                      <td>other data</td>
                                  
                                      
                                  </tr>
                                  <tr>
                                    <td> <a href="#">User 4 </a></td>
                                    <td>Name</td>
                                    <td>other data</td>
                                
                                    
                                </tr>
                                
                                <tr>
                                  <td> <a href="#">User 5 </a></td>
                                  <td>Name</td>
                                  <td>other data</td>
                              
                                  
                              </tr>
                              
                                  
                                    
                                  </tbody>
                                
                              </table>
                              </div>
                            </div>
                          {/* User */}
                          
                        </div>
                        {/* <!-- Last Route (of all vehicles) start --> */}
                        <div className='col-12'>
                            <div className="card">
                                <div className="card-header border-.5 ">
                                  <h3 className="card-title">Last Route (of all vehicles)</h3>
                                  <div className="card-tools">
                                    <span title="3 New Messages" className="badge badge-primary"/><FaRoute />

                                  </div>

                                </div>

                                <div className="col-span-1 bg-white border border-gray-300 h-80">

                                  <div className="mt-3">
                                    <Image className="object-cover h-64 px-1 w-100 ... img-fluid imgrauter" 
                                      src={require('./img/GUID-1D641328-ED1D-4D29-B66F-4434AF4A4166-web.png')} style={{height:'346px'}} alt='Image'/>
                                  </div>
                                </div>
                              </div>
                              </div>
                          {/* <!-- Last Route (of all vehicles) end --> */}
                        {/* <!-- /.col-md-6 --> */}
                      </div>
                      {/* <!-- /.row --> */}
                    </div>
              </div>
              </div>
                  

            
              <Footer/>
            </div>
           
           
            </>
  )
}
