import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider"

const Header = () => {
  // const [{ user, basket },dispatch] = useContext(DataContext); 
  // const totalItem = basket?.reduce((amount, item) => {return item.amount + amount;}, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* Logo section */}
          <div className={classes.logo__container}>
          <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
    
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* <div> */}
            {/* Search section */}
            <div className={classes.search}>
              <select name="category" id="category">
                <option value="">All</option>
              </select>
               <input type="text" placeholder="Search..." />
              <BsSearch size={27} />
            </div>
            {/* Other section */}
            <div className={classes.order__container}>
              <Link to="/language" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt="USA flag"
                />
                <select name="language" id="language">
                  <option value="en">EN</option>
                </select>
              </Link>
              {/* Three components */}
              <Link to="/">
                <div>
                  { (
                  //   <>
                  //     <p>Hello {email?.split("@")[0]}</p>
                  //     <span onClick={() => ( auth.signOut() : null)}>
                  //       Sign Out
                  //     </span>
                  //   </>
                  // ) : (
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                {/* <span>{totalItem}</span> */}
                <span>0</span>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </section>
      <LowerHeader />
    </section>
  
  );
};

export default Header;


















