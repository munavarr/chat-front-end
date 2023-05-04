import React, { useState } from "react";
import {
  chatget,
  chatlist,
  contacts,
  groupcreate,
} from "../features/chatSlice";
import { addid } from "../features/chatSlice";
import "../Pages/Home.css";
import { useDispatch, useSelector } from "react-redux";
// import chatSlice from "../features/chatSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

const Home = () => {
  const theid = useSelector((state) => state.auth.token);
  const [search, setsearch] = useState();
  const [value, setvalue] = useState();
  const [chat, setchat] = useState("chat");
  const [opencontacts, setopencontacts] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const contactss = useSelector((state=>state.chat.allcontacts))
  const [userdata, setuserdata] = useState("");

  const { contactss, allchatss } = useSelector((state) => ({
    contactss: state.chat.allcontacts,
    allchatss: state.chat.chatgetsall,
  }));
  console.log(allchatss);
  useEffect(() => {
    dispatch(chatget());
    console.log(theid);
  }, [dispatch]);

  const addcontacts = () => {
    dispatch(contacts());
    // setopencontacts(!opencontacts);
    setchat("contacts");
  };
  const selectcont = (a) => {
    setuserdata(a);
    const userid = { userid: a };
    console.log(userid);
    console.log(allchatss);
    dispatch(chatlist(userid));
  };
  const click = (a) => {
    dispatch(addid(a));
    navigate("/Chat");
  };
  const [grpop, setgrpop] = useState(false);
  const creategroup = () => {
    // setgrpop(!grpop)
    setchat("group");
  };

  const [clickedIds, setClickedIds] = useState([]);
  const [grpname, setgrpname] = useState("");
  const [vals, setvals] = useState();
  const [jst, setjst] = useState([]);
  const [dop, setdop] = useState(false);

  const [delet, setdelet] = useState();
  const adduser = (id) => {
    const thed = clickedIds.filter((stat) => stat === id);
    const thedd = `${thed}`;
    setvals(!thedd && clickedIds.push(id));
    thedd && clickedIds.splice(clickedIds.indexOf(thedd), 1);
    console.log(thed);
    console.log(clickedIds);
    console.log(id);
    console.log(thedd);

    //  const thedel = vali.filter(stat=>stat===id)
    // if (clickedIds.filter(fruit => fruit === id).length > 1) {
    //   clickedIds.splice(clickedIds.indexOf(id), );}
    // setdelet( clickedIds.splice(clickedIds.indexOf(id)))
  };

  const create = () => {
    const grpdata = { tokenUser: theid, users: clickedIds, name: grpname };
    dispatch(groupcreate(grpdata));
    console.log(grpdata);
  };

  return (
    <div className="Home">
      <div className="titlebar">
        <p className="name">INST</p>
      </div>
      <div className="secondp">
        <button className="bt" onClick={() => setchat("chat")}>
          chat
        </button>
        <button className="bt" onClick={() => setchat("status")}>
          status
        </button>
        <button className="bt" onClick={() => setchat("call")}>
          calls
        </button>
        <button className="contacts" onClick={() => addcontacts()}>
          add contacts
        </button>
        <button className="grpcr" onClick={creategroup}>
          create group
        </button>
        {chat === "chat" ? (
          allchatss.map((chatt) =>
            chatt.users.map((nest) => (
              <div key={chatt._id} className="aa">
                <button className="btns" onClick={() => click(chatt._id)}>
                  {nest.name}
                </button>
              </div>
            ))
          )
        ) : chat === "status" ? (
          <p>this all status</p>
        ) : chat === "call" ? (
          <p>calls</p>
        ) : chat === "contacts" ? (
          contactss.map((cont) => (
            <div className="ss">
              <button className="btns" onClick={() => selectcont(cont._id)}>
                {cont.name}
              </button>
            </div>
          ))
        ) : chat === "group" ? (
          allchatss.map((chatt) =>
            chatt.users.map((nest) => (<div>
              <div className="bb" key={chatt._id}>
                <button className="btns" onClick={() => adduser(chatt._id)}>
                  {nest.name}
                </button>
                </div>
              </div>
            ))
          )
        ) : (
          ""
        )}

        <div>
          {chat === "group" ? (
            <div>
              {" "}
              <input
                className="inputs"
                type="text"
                onChange={(e) => setgrpname(e.target.value)}
              />{" "}
              <button className="creates" onClick={create}>
                create
              </button>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
