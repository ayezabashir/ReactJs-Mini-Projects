/* eslint-disable react/prop-types */
import { useState } from "react"
import MenuList from "./MenuList"

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
            <div style={{ display: 'flex', gap: '20px' }}>
                <p >{item.label}</p>
                {
                    item && item.children && item.children.length > 0 ? <span style={{ cursor: "pointer" }} onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChild[item.label] ? '-' : '+'
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
