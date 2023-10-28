import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import './SidebarMenu.css'
import { NavLink } from 'react-router-dom'
import {  Outlet } from 'react-router-dom'

function SidebarMenu() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-md-2 min-vh-100 bg-dark d-flex flex-column justify-content-between'>
                <div>
                <a className='text-white text-decoration-none d-flex align-itemcenter ms-3 mt-2'>
                    <span className='fs-3 ms-1'>Zaagpro</span>
                </a>
                <hr className='text-secondary'/>
                <ul className="nav nav-pills d-flex flex-column ">
                    <li class="nav-item">
                        <NavLink to="home" className="nav-link text-white fs-4" aria-current="page">
                            <i className='bi bi-house'></i><span className='fs-5 ms-1'>Home</span></NavLink>
                        
                    </li>

                    <li class="nav-item">
                        <NavLink to="orders" className="nav-link text-white fs-4" aria-current="page">
                            <i className='bi bi-grid'></i><span className='fs-5 ms-1'>Orders</span></NavLink>
                        
                    </li>
                    <li class="nav-item">
                        <NavLink to="customers" className="nav-link text-white fs-4" aria-current="page">
                            <i className='bi bi-people'></i><span className='fs-5 ms-1'>Customers</span></NavLink>
                        
                    </li>   
                    <li class="nav-item">
                        <NavLink to="products" className="nav-link text-white fs-4" aria-current="page">
                            <i className='bi bi-table'></i><span className='fs-5 ms-1'>Products</span></NavLink>
                        
                    </li>                    
                </ul>
                </div>
                
                <div className="dropdown open">
                    <a className="text-decoration-none text-white dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                               <i className='bi bi-person-circle'></i> <span className='ms-2'>Rahul Ra</span> 
                            </a>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Settings</a>
                    </div>
                </div>
                
            </div>
            <div className='col-auto'>
            <Outlet/>
            </div>
        </div>
        
    </div>
  )
}

export default SidebarMenu