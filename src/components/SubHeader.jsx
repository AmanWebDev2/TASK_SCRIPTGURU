import React, { useState } from "react";
import { data } from "../data";

const SubHeader = () => {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState(null);
  const [selectedId, setSelectedId] = useState(-1);
  const handleMouseEnter = (e, item) => {
    if (item.names) {
      setShow(true);
      const ele = e.target;
      setSelectedId(item.id);
      const p = ele.getBoundingClientRect();
      setPos(p);
    }
  };

  return (
    <div className="container my-5">
      <div className="row-lg sub-header">
        {data.names.map((item, i) => {
          return (
            <div
              key={i}
              data-id={item.id}
              className="col-lg"
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={() => {
                setShow(false)
                setSelectedId(-1)
              }}
            >
              <div className="img">
                <img src={item.img} />
              </div>
              <p>
                {item.title}
                <b>{item.names ? "*" : ""}</b>
              </p>

              {/* sublist */}
              {item.id == selectedId && (
                <SubList item={item.names} pos={pos} show={show} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SubList = ({ item, pos, show }) => {
  const [subList, setSubList] = useState([]);

  return (
    <div className="row sub">
      <div className="col">
        <object>
          {item.map((e,i) => {
            return (
              <li
                key={i}
                className="subItem"
                onMouseEnter={() => {
                  if (e.names) {
                    setSubList(e.names);
                  }
                }}
                onMouseLeave={(e) => {
                    console.log(e);
                    if(!e.target.classList.contains('subItem')) {
                        setSubList([]);
                    }
                }}
              >
                {e.title}
              </li>
            );
          })}
        </object>
      </div>
      { subList.length>0 && <div className="col">
        <object>
          {subList.length > 0 &&
            subList.map((subItem) => {
              return <li onMouseEnter={()=>{
                setShowSub(true);
              }} className="subItem">{subItem.title}</li>;
            })}
        </object>
      </div>}
    </div>
  );
};

export default SubHeader;
