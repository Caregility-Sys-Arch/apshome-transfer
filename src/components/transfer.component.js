import React, { Component } from 'react'
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion'
export default class Transfer extends Component {
  render() {
    return (
        <div>
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="#" className="logo d-flex align-items-center">
        <img src="https://caregility.com/wp-content/uploads/2022/01/caregility-logo.png" alt />
      </a>
      <i className="" />
    </div>{/* End Logo */}
    <h1>Aps Home</h1>
  </header>{/* End Header */}
  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid" />
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-person" />
          <span>Aps Configurations</span>
        </a>
      </li>{/* End Profile Page Nav */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-question-circle" />
          <span>Environment Mapper</span>
        </a>
      </li>{/* End F.A.Q Page Nav */}
      <li className="nav-item ">
        <a className="nav-link active" href="#">
          <i className="bi bi-envelope" />
          <span>Transfer page</span>
        </a>
      </li>{/* End Contact Page Nav */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-card-list" />
          <span>Bulk Commands</span>
        </a>
      </li>{/* End Register Page Nav */}
    </ul>
  </aside>{/* End Sidebar*/}
  <main id="main" className="main">
  <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Step 1: Aps Transfer Selection</Accordion.Header>
    <Accordion.Body>
      <div className='row col-md-12 transferp'>
        <div className='col-md-6'>
            <select className="form-select" aria-label="From Environment" style={{"background-color": "#d5e8d4"}}>
                <option selected>From Environment</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Channels">
                <option selected>Channels</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Customers">
                <option selected>Customers</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Facilities">
                <option selected>Facilities</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Units">
                <option selected>Units</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Endpoints">
                <option selected>Endpoints</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
        </div>
        <div className="col-md-6">
            <select className="form-select" aria-label="To Environment" style={{"background-color": "#dae8fc"}}>
                <option selected>To Environment</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Channels">
                <option selected>Channels</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Customers">
                <option selected>Customers</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Facilities">
                <option selected>Facilities</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Units">
                <option selected>Units</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
            <select className="form-select col2" aria-label="Endpoints">
                <option selected>Endpoints</option>
                <option value="{1}">One</option>
                <option value="{2}">Two</option>
                <option value="{3}">Three</option>
            </select>
        </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Step 2: Disclaimer</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Step 3: Initiate Transfer</Accordion.Header>
    <Accordion.Body>
    <div className='row col-md-12'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    <div className='row col-md-12 mtpro'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    <div className='row col-md-12 mtpro'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    <div className='row col-md-12 mtpro'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    <div className='row col-md-12 mtpro'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    <div className='row col-md-12 mtpro'>
        <div className='col-md-3'>
            <div className='fapi'><i class="bi bi-person"></i> Finding Aps</div>
        </div>
        <div className='col-md-4'>
        <div className='fapi1'><i class="bi bi-person-lines-fill"></i> Verifying Configuration</div>
        
        </div>
        <div className='col-md-3'>
        <div className='fapi3'><i class="bi bi-arrow-clockwise"></i> Transferring Aps</div>
        </div>
        <div className='col-md-2'>
        <div className='fapi4'><i class="bi bi-emoji-smile"></i> Done</div>
        </div>
    </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  </main>{/* End #main */}
</div>


    )
  }
}