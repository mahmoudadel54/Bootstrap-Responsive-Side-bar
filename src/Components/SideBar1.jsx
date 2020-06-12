import React from 'react';
import {Link} from 'react-router-dom'

const Dash = (props) => {
    return ( 
        <div className="page-wrapper chiller-theme toggled">
        <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
          <i className="fas fa-bars" />
        </Link>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <Link to="#">pro sidebar</Link>
              <div id="close-sidebar">
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User"></img>
              </div>
              <div className="user-info">
                <span className="user-name">Jhon
              <strong>Smith</strong>
                </span>
                <span className="user-role">Administrator</span>
                <span className="user-status">
                  <i className="fa fa-circle" />
                  <span>Online</span>
                </span>
              </div>
            </div>
  
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control search-menu" placeholder="Search..." />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="fa fa-tachometer-alt" />
                    <span>Dashboard</span>
                    <span className="badge badge-pill badge-warning">New</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="#">Dashboard 1
                      <span className="badge badge-pill badge-success">Pro</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Dashboard 2</Link>
                      </li>
                      <li>
                        <Link to="#">Dashboard 3</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="#">
                    <i className="fa fa-shopping-cart" />
                    <span>E-commerce</span>
                    <span className="badge badge-pill badge-danger">3</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <Link to="#">Products
                    </Link>
                      </li>
                      <li>
                        <Link to="#">Orders</Link>
                      </li>
                      <li>
                        <Link to="#">Credit cart</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                 <Link to="#">
                    <i className="far fa-gem" />
                    <span>Components</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                       <Link to="#">General</Link>
                      </li>
                      <li>
                       <Link to="#">Panels</Link>
                      </li>
                      <li>
                       <Link to="#">Tables</Link>
                      </li>
                      <li>
                       <Link to="#">Icons</Link>
                      </li>
                      <li>
                       <Link to="#">Forms</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                 <Link to="#">
                    <i className="fa fa-chart-line" />
                    <span>Charts</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                       <Link to="#">Pie chart</Link>
                      </li>
                      <li>
                       <Link to="#">Line chart</Link>
                      </li>
                      <li>
                       <Link to="#">Bar chart</Link>
                      </li>
                      <li>
                       <Link to="#">Histogram</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                 <Link to="#">
                    <i className="fa fa-globe" />
                    <span>Maps</span>
                  </Link>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                       <Link to="#">Google maps</Link>
                      </li>
                      <li>
                       <Link to="#">Open street map</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="header-menu">
                  <span>Extra</span>
                </li>
                <li>
                 <Link to="#">
                    <i className="fa fa-book" />
                    <span>Documentation</span>
                    <span className="badge badge-pill badge-primary">Beta</span>
                  </Link>
                </li>
                <li>
                 <Link to="#">
                    <i className="fa fa-calendar" />
                    <span>Calendar</span>
                  </Link>
                </li>
                <li>
                 <Link to="#">
                    <i className="fa fa-folder" />
                    <span>Examples</span>
                  </Link>
                </li>
              </ul>
            </div>
  
          </div>
  
          <div className="sidebar-footer">
           <Link to="#">
              <i className="fa fa-bell" />
              <span className="badge badge-pill badge-warning notification">3</span>
            </Link>
           <Link to="#">
              <i className="fa fa-envelope" />
              <span className="badge badge-pill badge-success notification">7</span>
            </Link>
           <Link to="#">
              <i className="fa fa-cog" />
              <span className="badge-sonar" />
            </Link>
           <Link to="#">
              <i className="fa fa-power-off" />
            </Link>
          </div>
        </nav>
  
       
  
      </div>
  
     );
}
 
export default Dash;