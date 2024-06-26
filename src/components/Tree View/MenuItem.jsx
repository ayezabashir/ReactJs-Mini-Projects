/* eslint-disable react/prop-types */
import { useState } from "react"
import MenuList from "./MenuList"
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
    const [displayCurrentChild, setDisplayCurrentChild] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChild({
            ...displayCurrentChild,
            [getCurrentLabel]: !displayCurrentChild[getCurrentLabel]
        })
    }
    return (
        <li>
            <div className="menu-item">
                <p >{item.label}</p>
                {
                    item && item.children && item.children.length > 0 ? <span style={{ cursor: "pointer" }} onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChild[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span> : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ?
                    <MenuList list={item.children} />
                    :
                    null
            }
        </li>
    )
}

export default MenuItem
