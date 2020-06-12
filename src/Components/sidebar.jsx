import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
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

      <main className="page-content">
        <div className="container-fluid">
          <h2>Pro Sidebar</h2>
          <hr />
          <div className="row">
            <div className="form-group col-md-12">
              <p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>
              <p> You can find the complete code on<Link to="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank">
                Github</Link>, it contains more themes and background image option</p>
            </div>
            {/* <div className="form-group col-md-12">
              <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small" frameBorder={0} scrolling={0} width="90px" height="30px" />
              <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small" frameBorder={0} scrolling={0} width="90px" height="30px" />
            </div> */}
            <div className="form-group col-md-12">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">New !</h4>
                <p>New react pro sidebar library is now available on<Link to="https://www.npmjs.com/package/react-pro-sidebar" target="_blank">npm</Link><Link to="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                  <img alt="GitHub stars" src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social" />
                </Link></p>
               <Link to="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" className="btn btn-sm btn-primary mr-2">
                  Github</Link>
               <Link to="https://azouaoui-med.github.io/react-pro-sidebar" target="_blank" className="btn btn-sm btn-success">
                  Demo</Link>
              </div>
            </div>
          </div>
          <h5>More templates</h5>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card rounded-0 p-0 shadow-sm">
                <img src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                <div className="card-body text-center">
                  <h6 className="card-title">Angular Pro Sidebar</h6>
                 <Link to="https://github.com/azouaoui-med/angular-pro-sidebar" target="_blank" className="btn btn-primary btn-sm">Github</Link>
                 <Link to="https://azouaoui-med.github.io/angular-pro-sidebar/demo/" target="_blank" className="btn btn-success btn-sm">Preview</Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card rounded-0 p-0 shadow-sm">
                <img src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                <div className="card-body text-center">
                  <h6 className="card-title">Angular Dashboard</h6>
                 <Link to="https://github.com/azouaoui-med/lightning-admin-angular" target="_blank" className="btn btn-primary btn-sm">Github</Link>
                 <Link to="https://azouaoui-med.github.io/lightning-admin-angular/demo/" target="_blank" className="btn btn-success btn-sm">Preview</Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <footer className="text-center">
            <div className="mb-2">
              <small>
                © 2020 made with <i className="fa fa-heart" style={{ color: 'red' }} /> by -<Link target="_blank" rel="noopener noreferrer" to="https://azouaoui.netlify.com">
                  Mohamed Azouaoui
            </Link>
              </small>
            </div>
            <div>
             <Link to="https://github.com/azouaoui-med" target="_blank">
                <img alt="GitHub followers" src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social" />
              </Link>
             <Link to="https://twitter.com/azouaoui_med" target="_blank">
                <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social" />
              </Link>
            </div>
          </footer>
        </div>
      </main>

    </div>

  );
}

export default Sidebar;