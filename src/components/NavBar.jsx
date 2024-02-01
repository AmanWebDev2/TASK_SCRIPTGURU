import React, { useState } from "react";
import { Form, InputGroup, Dropdown,Button } from "react-bootstrap";
import SubHeader from "./SubHeader";
import Logo from "../assets/svg/Logo";

const NavBar = () => {
  const [openLogin,setOpenLogin] = useState(false);
  const [openOption,setOpenOption] = useState(false);

  const handleMouseLeave=(e)=>{
    setOpenLogin(false)
  }

  return (
    <header className="p-4">
      <div className="row border p-2">
        <div className="col-2">
          <Logo/>
         </div>
        <div className="input d-none d-lg-block col-lg-5">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Search for Products, Brands and More"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="rest col">
          <div className="row">

          <div className="login col">
            <Dropdown onMouseEnter={()=>setOpenLogin(true)} onMouseLeave={()=>setOpenLogin(false)} >
              <Button className="header-login-btn">
                Login *
              </Button>

              <ul className="login-menu" style={{ display: `${openLogin ? 'block': 'none'}`}} >
                <li className="sub-list__header" href="#/action-1">Action </li>
                <li className="sub-list__header" href="#/action-1">Action </li>
                <li className="sub-list__header" href="#/action-1">Action </li>
              </ul>
            </Dropdown>
          </div>
          <div className="cart col">Cart</div>
          <div className="become-seller col">Become Seller</div>
          <div className=" d-none d-lg-block  options col">
            <div className="position-relative" onMouseEnter={()=>setOpenOption(true)} onMouseLeave={()=>setOpenOption(false)} >
              <div>
                :
              </div>

              <ul className="option-menu" style={{ display: `${openOption ? 'block': 'none'}`}} >
                <li className="sub-list__header" href="#/action-1">Noti</li>
                <li className="sub-list__header" href="#/action-2">Another action</li>
                <li className="sub-list__header" href="#/action-3">Something else</li>
              </ul>
            </div>
          </div>
          </div>

        </div>
      </div>
      <SubHeader/>
    </header>
  );
};

export default NavBar;
