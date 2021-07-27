import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import edusoft from '../edusoft.svg';



const SideBar= () => {
    const history = useHistory();

    useEffect(()=>{
       
    },[])


    return(
       <>
  
    <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">

            <FontAwesomeIcon icon={faUserCircle}  size ={'2x'} className="rounded-full text-white border-2 border-blue-500" />
            
            <div className=" ml-1">
                <p className=" flex break-words ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans "> HELLO PEDRO BENITO</p>
                
            </div>
        </div>

        <div className="overflow-y-hidden overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
                <div className="flex flex-row items-center h-8">
                    <div className="flex font-semibold text-md text-gray-300 my-4 font-sans uppercase">Teacher Dashboard</div>
                </div>
            </li>
            <li>
                <div className="relative flex flex-row items-center  text-gray-400  border-l-4 border-transparent  pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    
                    <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Total Weeks</span>
                    </span>

                 </div>
            </li>
      
            <span class=" ml-8 inline-block rounded-md text-white bg-yellow-600 px-2 py-1 text-sm font-bold text-center mr-3 w-8 ">18</span>
            
            <div className="text-sm mx-4 text-gray-500 font bold mt-4">Filter the class based on its Average Engagement Index </div>

          <form method="GET">
                    <div className="relative text-gray-500 focus-within:text-gray-400 items-center ml-4 ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                      </span>
                      <input type="search" name="q" className="py-1 text-xs text-white bg-gray-600 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-11/12 " placeholder="Search..." autocomplete="off" />
                    </div>
                  </form>
          <div className="relative">
          <table class="tg text-white w-11/12 mr-8 ml-3 mt-4">
                  <thead className="mb-5">
                    <tr className="mb-2">
                      <th class="border-r-2 border-gray-400  font-semibold text-gray-400  text-sm tracking-wide pr-8">Class Name</th>
                      <th class="px-2 font-semibold text-gray-400  text-sm tracking-wide">Average</th>
                    </tr>
                  </thead>
                  <tbody className="h-8 overflow-y-auto">
                    <tr className="">
                      <td class="pl-2 text-sm text-white ">
                        

                        <label className="custom-label flex ml-3">
                          <div className="bg-white shadow w-4 h-4 rounded-sm  flex justify-center items-center mr-2">
                              <input type="checkbox" className="hidden" />
                              <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                          </div>
                          <span className="text-white text-sm">2012243-32</span>
                      </label>
                      
                        </td>
                      <td class="pl-2 text-sm text-white ">90.3%</td>
                    </tr>
                    <tr className="">
                      <td class="pl-2 text-sm text-white ">
                        

                        <label className="custom-label flex ml-3">
                          <div className="bg-white shadow w-4 h-4 rounded-sm  flex justify-center items-center mr-2">
                              <input type="checkbox" className="hidden" />
                              <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                          </div>
                          <span className="text-white text-sm">2012243-32</span>
                      </label>
                      
                        </td>
                      <td class="pl-2 text-sm text-white ">90.3%</td>
                    </tr>
                    <tr className="">
                      <td class="pl-2 text-sm text-white ">
                        

                        <label className="custom-label flex ml-3">
                          <div className="bg-white shadow w-4 h-4 rounded-sm  flex justify-center items-center mr-2">
                              <input type="checkbox" className="hidden" />
                              <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                          </div>
                          <span className="text-white text-sm">2012243-32</span>
                      </label>
                      
                        </td>
                      <td class="pl-2 text-sm text-white ">90.3%</td>
                    </tr>

                  </tbody>
                  </table>
          </div>
          <div className="relative">
          <span className="inline-flex justify-center items-center ml-4 mt-4">
                    <span className="font-semibold text-gray-400  text-md tracking-wide truncate font-sans">Class Weeks</span>
                    </span>
                   <div className="overflow-y-auto h-24 mx-4 ml-5">
                    <label className="custom-label flex mt-1 ml-3">
                      <div className="bg-white shadow w-4 h-4 rounded-sm  flex justify-center items-center mr-2">
                          <input type="checkbox" className="hidden" />
                          <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                      </div>
                      <span className="text-white text-sm"> 10/10/21 to 15/10/21</span>
                  </label>
                  <label className="custom-label flex mt-1 ml-3">
                      <div className="bg-white shadow w-4 h-4  rounded-sm flex justify-center items-center mr-2">
                          <input type="checkbox" className="hidden" />
                          <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                      </div>
                      <span className="text-white text-sm"> 10/10/21 to 15/10/21 </span>
                  </label>
                  <label className="custom-label flex mt-1 ml-3">
                      <div className="bg-white shadow w-4 h-4  rounded-sm flex justify-center items-center mr-2">
                          <input type="checkbox" className="hidden" />
                          <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                      </div>
                      <span className="text-white text-sm"> 10/10/21 to 15/10/21 </span>
                  </label>
                         
                  <label className="custom-label flex mt-1 ml-3">
                      <div className="bg-white shadow w-4 h-4  rounded-sm flex justify-center items-center mr-2">
                          <input type="checkbox" className="hidden" />
                          <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                      </div>
                      <span className="text-white text-sm"> 10/10/21 to 15/10/21 </span>
                  </label>
                  <label className="custom-label flex mt-1 ml-3">
                      <div className="bg-white shadow w-4 h-4  rounded-sm flex justify-center items-center mr-2">
                          <input type="checkbox" className="hidden" />
                          <svg className="hidden w-4 h-4 text-black font-bold pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
                      </div>
                      <span className="text-white text-sm"> 10/10/21 to 15/10/21 </span>
                  </label>
                   </div>
          </div>
         
        </ul>
        </div>
   
    
        {/* logo */}
        <div className="relative mt-2">
            <img className="px-16 pb-4 pt-4" src={edusoft} alt="" srcset="" />
          </div>
    </div>
    
   
          </>  
          
    );
};

export default SideBar;